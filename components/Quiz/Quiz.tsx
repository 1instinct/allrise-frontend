import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";
import {
  QuizContainer,
  QuizWrapper,
  QuizInfo,
  QuizTitleWrapper,
  QuizTitle,
  QuizText,
  QuizImageWrapper,
  QuizImage,
  RowOfOptions,
  CentralControl,
  CategoryWrapper,
  CategoryName,
  BackButton,
  YesButton,
  NoButton,
  Logo,
  ApiErrorText,
  QuizLegalFooter,
  overlayFadeIn,
  popupSlideUp,
  RulingResult,
  RulingOverlay,
  RulingCard,
  RulingHeader,
  RulingResultText,
  RulingCloseButton,
  RulingBody,
  RulingSummaryText,
  RulingAudioButton,
  LanguageToggleContainer,
  LanguageToggleSlider,
  LanguageFlagButton
} from "./Quiz.styles";
// Case data is now fetched server-side via getServerSideProps
import {
  ArrowBack,
  Close,
  VolumeUp,
  VolumeOffRounded
} from "@material-ui/icons";
import { LegalLink } from "../LegalLinks/LegalLinks.styles";

interface QuizImage {
  id: number;
  lawsuit_id: number;
  url: string;
  description: string;
  created_at: string;
  updated_at: string;
  prompt_id: number;
}

const nativeAds = [
  {
    id: 1,
    lawfirm: "Law Firm 1",
    url: "https://allrise-api-production.s3.amazonaws.com/ads/ad-1.jpg"
  },
  {
    id: 2,
    lawfirm: "Law Firm 2",
    url: "https://allrise-api-production.s3.amazonaws.com/ads/ad-2.jpg"
  },
  {
    id: 3,
    lawfirm: "Law Firm 3",
    url: "https://allrise-api-production.s3.amazonaws.com/ads/ad-3.jpg"
  }
];

const LANGUAGE_FLAGS: Record<string, string> = {
  en: "\u{1F1FA}\u{1F1F8}",
  es: "\u{1F1EA}\u{1F1F8}",
  fr: "\u{1F1EB}\u{1F1F7}",
  de: "\u{1F1E9}\u{1F1EA}",
  pt: "\u{1F1E7}\u{1F1F7}",
  it: "\u{1F1EE}\u{1F1F9}",
  ja: "\u{1F1EF}\u{1F1F5}",
  zh: "\u{1F1E8}\u{1F1F3}",
  ko: "\u{1F1F0}\u{1F1F7}",
  ar: "\u{1F1F8}\u{1F1E6}",
  hi: "\u{1F1EE}\u{1F1F3}",
  ru: "\u{1F1F7}\u{1F1FA}"
};

export const Quiz = ({ caseData }: { caseData: any }) => {
  const router = useRouter();
  const { id } = router.query;
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [rulingResult, setRulingResult] = useState<RulingResult>(undefined);
  const [showRuling, setShowRuling] = useState(false);
  const [isRulingPlaying, setIsRulingPlaying] = useState(false);
  const rulingAudioRef = useRef<HTMLAudioElement | null>(null);

  const defaultQuizImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * nativeAds.length);
    return nativeAds[randomIndex].url;
  }, [nativeAds]);

  const availableLanguages = useMemo(() => {
    if (!caseData?.narrations) return [];
    return Array.from(
      new Set(caseData.narrations.map((n: any) => n.language))
    ) as string[];
  }, [caseData?.narrations]);

  useEffect(() => {
    if (
      availableLanguages.length > 0 &&
      !availableLanguages.includes(selectedLanguage)
    ) {
      setSelectedLanguage(availableLanguages[0]);
    }
  }, [availableLanguages]);

  const playSummary = () => {
    const narration =
      caseData?.narrations?.find(
        (n: any) =>
          n.narration_type === "summary" && n.language === selectedLanguage
      ) || caseData?.narrations[0];
    if (!narration) return;

    const audio = new Audio(narration.url);
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      audio.play().then(() => {
        audio.addEventListener("ended", () => {
          setIsPlaying(false);
        });
      });
    }
  };

  const answer = (guess: string) => {
    if (!caseData || rulingResult !== undefined) return;

    const correct = caseData.verdict.toLowerCase() === guess.toLowerCase();
    setRulingResult(correct ? "win" : "loss");
    setShowRuling(true);
  };

  const playRuling = () => {
    if (isRulingPlaying && rulingAudioRef.current) {
      rulingAudioRef.current.pause();
      setIsRulingPlaying(false);
      return;
    }

    const narration =
      caseData?.narrations?.find(
        (n: any) =>
          n.narration_type === "ruling" && n.language === selectedLanguage
      ) ||
      caseData?.narrations?.find((n: any) => n.narration_type === "ruling");
    if (!narration) return;

    const audio = new Audio(narration.url);
    rulingAudioRef.current = audio;
    setIsRulingPlaying(true);
    audio.play().then(() => {
      audio.addEventListener("ended", () => {
        setIsRulingPlaying(false);
        rulingAudioRef.current = null;
      });
    });
  };

  const closeRuling = () => {
    if (rulingAudioRef.current) {
      rulingAudioRef.current.pause();
      rulingAudioRef.current = null;
    }
    setIsRulingPlaying(false);
    setShowRuling(false);
  };

  if (!caseData)
    return (
      <QuizContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 20px",
            gap: "10px"
          }}
        >
          <Logo src="/images/allrise/logo-shadow.png" alt="AllRise Logo" />
          <ApiErrorText style={{ fontFamily: "Special, sans-serif" }}>
            Case not available right now. Please try again later.
          </ApiErrorText>
          <LegalLink href={`/ios-case/${id}`}>
            Open case in the All Rise! App
          </LegalLink>
        </div>
      </QuizContainer>
    );

  return (
    <QuizContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
          gap: "10px"
        }}
      >
        <Logo src="/images/allrise/logo-shadow.png" alt="AllRise Logo" />
        <LegalLink href={`/ios-case/${id}`}>
          Open case in the All Rise! App
        </LegalLink>
      </div>
      <QuizWrapper>
        {availableLanguages.length >= 1 && (
          <LanguageToggleContainer>
            <LanguageToggleSlider
              activeIndex={availableLanguages.indexOf(selectedLanguage)}
            />
            {availableLanguages.map((lang: string) => (
              <LanguageFlagButton
                key={lang}
                isActive={lang === selectedLanguage}
                onClick={() => setSelectedLanguage(lang)}
              >
                {LANGUAGE_FLAGS[lang] || lang.toUpperCase()}
              </LanguageFlagButton>
            ))}
          </LanguageToggleContainer>
        )}
        <QuizImageWrapper>
          {caseData?.sketches?.length ? (
            <Carousel
              autoPlay
              swipeable
              infiniteLoop
              interval={3000}
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
            >
              {caseData?.sketches.map((sketch: QuizImage) => (
                <div key={sketch.id}>
                  <img src={sketch.url} alt={caseData?.title} />
                </div>
              ))}
            </Carousel>
          ) : (
            <QuizImage src={defaultQuizImage} alt={caseData?.title} />
          )}
          <BackButton onClick={() => router.push("/")}>
            <ArrowBack style={{ color: "black" }} />
          </BackButton>
        </QuizImageWrapper>
        <QuizInfo>
          <QuizTitleWrapper onClick={playSummary}>
            <QuizTitle>{caseData?.title}</QuizTitle>
            <VolumeOffRounded style={{ color: "white" }} />
          </QuizTitleWrapper>
          <QuizText>{caseData?.caseSummary}</QuizText>
          <RowOfOptions>
            <YesButton
              onClick={() => answer("FOR")}
              disabled={rulingResult !== undefined}
              style={{ opacity: rulingResult !== undefined ? 0.5 : 1 }}
            >
              FOR
            </YesButton>
            <NoButton
              onClick={() => answer("AGAINST")}
              disabled={rulingResult !== undefined}
              style={{ opacity: rulingResult !== undefined ? 0.5 : 1 }}
            >
              AGAINST
            </NoButton>
          </RowOfOptions>
        </QuizInfo>
      </QuizWrapper>

      <QuizLegalFooter>
        <a href="https://people.allrise.app/terms">Terms</a>
        <span>|</span>
        <a href="https://people.allrise.app/privacy">Privacy</a>
        <span>|</span>
        <a href="mailto:help@allrise.co">Help</a>
      </QuizLegalFooter>

      {showRuling && (
        <RulingOverlay onClick={closeRuling}>
          <RulingCard
            result={rulingResult}
            onClick={(e) => e.stopPropagation()}
          >
            <RulingHeader result={rulingResult}>
              <RulingResultText>
                {rulingResult === "win" ? "CORRECT!" : "INCORRECT"}
              </RulingResultText>
              <RulingCloseButton onClick={closeRuling}>
                <Close style={{ color: "white", fontSize: 20 }} />
              </RulingCloseButton>
            </RulingHeader>
            <RulingBody>
              <RulingSummaryText
                dangerouslySetInnerHTML={{
                  __html: caseData?.rulingSummary || ""
                }}
              />
              {caseData?.narrations?.some(
                (n: any) => n.narration_type === "ruling"
              ) && (
                <RulingAudioButton
                  isPlaying={isRulingPlaying}
                  onClick={playRuling}
                >
                  <VolumeUp style={{ fontSize: 22 }} />
                  {isRulingPlaying ? "PAUSE RULING" : "PLAY RULING"}
                </RulingAudioButton>
              )}
            </RulingBody>
          </RulingCard>
        </RulingOverlay>
      )}
    </QuizContainer>
  );
};
