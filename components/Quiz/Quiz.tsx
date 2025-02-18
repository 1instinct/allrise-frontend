import { useState, useEffect } from "react";
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
import { Speaker } from "@material-ui/icons";

interface QuizImage {
  id: number;
  lawsuit_id: number;
  url: string;
  description: string;
  created_at: string;
  updated_at: string;
  prompt_id: number;
}

export const Quiz = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("QUIZ ID: ", id);
  const { data: caseData, isLoading } = useQuestion((id as string) || "");

  const playSummary = () => {
    const audio = new Audio(caseData?.narrations[0].url);
    audio.play();
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <QuizContainer>
      <Logo src="/images/allrise/logo-shadow.png" alt="AllRise Logo" />
      <QuizWrapper>
        <a href={`/ios-case/${id}`}>Open in App</a>
        <QuizImageWrapper>
          {caseData?.sketches?.length ? (
            <Carousel
              autoPlay
              swipeable
              infiniteLoop
              showArrows={false}
              showStatus={false}
              showThumbs={false}
            >
              {caseData?.sketches.map((sketch: QuizImage) => (
                <div key={sketch.id}>
                  <img src={sketch.url} alt={caseData?.title} />
                </div>
              ))}
            </Carousel>
          ) : (
            <QuizImage src={caseData?.image} alt={caseData?.title} />
          )}
          <BackButton onClick={() => router.back()}>←</BackButton>
        </QuizImageWrapper>
        <Speaker onClick={() => playSummary()} />
        <QuizInfo>
          <QuizTitleWrapper>
            <QuizTitle>{caseData?.title}</QuizTitle>
            <Speaker onClick={() => playSummary()} />
          </QuizTitleWrapper>
          <QuizText>{caseData?.caseSummary}</QuizText>
          <RowOfOptions>
            <YesButton>FOR</YesButton>
            <button>AGAINST</button>
          </RowOfOptions>
        </QuizInfo>
      </QuizWrapper>
    </QuizContainer>
  );
};
