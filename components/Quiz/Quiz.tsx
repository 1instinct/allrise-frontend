import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
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
  Logo
} from "./Quiz.styles";
import { useQuestion } from "../../hooks/useQuiz";
import { ArrowBack, Speaker, SpeakerPhone, VolumeMute, VolumeMuteSharp, VolumeOff, VolumeOffRounded } from "@material-ui/icons";
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
    url: "https://allrise-api-production.s3.amazonaws.com/ads/ad-1.jpg",
  },
  {
    id: 2,
    lawfirm: "Law Firm 2",
    url: "https://allrise-api-production.s3.amazonaws.com/ads/ad-2.jpg",
  },
  {
    id: 3,
    lawfirm: "Law Firm 3",
    url: "https://allrise-api-production.s3.amazonaws.com/ads/ad-3.jpg",
  },
];

export const Quiz = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("QUIZ ID: ", id);
  const { data: caseData, isLoading } = useQuestion((id as string) || "");
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultQuizImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * nativeAds.length);
    return nativeAds[randomIndex].url;
  }, [nativeAds]);

  const playSummary = () => {
    setIsPlaying(true);
    const audio = new Audio(caseData?.narrations[0].url);
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().then(() => {
        audio.addEventListener("ended", () => {
          setIsPlaying(false);
        });
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <QuizContainer>
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "20px 0" }}>
        <Logo src="/images/allrise/logo-shadow.png" alt="AllRise Logo" />
        <LegalLink href={`/ios-case/${id}`}>Open case in the All Rise! App</LegalLink>
      </div>
      <QuizWrapper> 
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
          <BackButton onClick={() => router.push('/')}>
            <ArrowBack style={{ color: 'black'}} />
          </BackButton>
        </QuizImageWrapper>
        <QuizInfo>
          <QuizTitleWrapper onClick={playSummary}>
            <QuizTitle>{caseData?.title}</QuizTitle>
            <VolumeOffRounded style={{ color: "white" }} />
          </QuizTitleWrapper>
          <QuizText>{caseData?.caseSummary}</QuizText>
          <RowOfOptions>
            <YesButton>FOR</YesButton>
            <NoButton>AGAINST</NoButton>
          </RowOfOptions>
        </QuizInfo>
      </QuizWrapper>
    </QuizContainer>
  );
};
