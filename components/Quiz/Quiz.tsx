import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import {
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
  BackButton
} from "./quiz-styles";
import { useQuestion } from "../../hooks/useQuiz";

export const Quiz = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("QUIZ ID: ", id);
  const { data: caseData, isLoading } = useQuestion((id as string) || "");

  if (isLoading) return <div>Loading...</div>;

  return (
    <QuizWrapper>
      <a href={`/ios-case/${id}`}>Open in App</a>
      <QuizImageWrapper>
        <QuizImage src={caseData?.image} alt={caseData?.title} />
        <BackButton onClick={() => router.back()}>←</BackButton>
      </QuizImageWrapper>
      <QuizInfo>
        <QuizTitleWrapper>
          <QuizTitle>{caseData?.title}</QuizTitle>
        </QuizTitleWrapper>
        <QuizText>{caseData?.summary}</QuizText>
        <RowOfOptions>
          <button>FOR</button>
          <button>AGAINST</button>
        </RowOfOptions>
      </QuizInfo>
    </QuizWrapper>
  );
};
