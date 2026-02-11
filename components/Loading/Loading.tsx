"use client";
import styled from "@emotion/styled";

export const LoadingWrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div svg g g g path {
    stroke: white;
  }
`;

export const LoadingIcon = styled.i`
  margin: 0 auto;
`;

export const Loading = () => {
  return (
    <LoadingWrapper />
  );
};
