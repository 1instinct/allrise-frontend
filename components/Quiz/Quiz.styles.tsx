import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export type RulingResult = "win" | "loss" | undefined;

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  width: auto;
  min-height: 100vh;
  background: url("/images/allrise/law-pattern.png"),
    linear-gradient(196.13deg, #ffda17 -16.74%, #f7be56 89.04%);
  background-attachment: fixed;
  padding: 40px 0;
`;

export const QuizWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 800px;
  background: white;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.11);
`;

export const Logo = styled.img`
  width: auto;
  margin: 0 auto;
  height: 85px;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
    width: 50%;
    height: auto;
    object-fit: contain;
  }
`;

export const LogoText = styled.div`
  font-family: ${(p: any) => p.theme.typography.titleLG.fontFamily};
  font-weight: ${(p: any) => p.theme.typography.titleLG.fontWeight};
  font-size: ${(p: any) => p.theme.typography.titleLG.fontSize};
  line-height: ${(p: any) => p.theme.typography.titleLG.lineHeight};
  color: ${(p: any) =>
    p.theme.isDarkMode
      ? p.theme.colors.white.primary
      : p.theme.colors.black.primary};
  margin: 40px 0 20px 0;
`;

export const Tagline = styled.div`
  text-align: center;
  width: 425px;
  margin: 10px auto;
  font-family: ${(p: any) => p.theme.typography.titleMD.fontFamily};
  font-weight: ${(p: any) => p.theme.typography.titleMD.fontWeight};
  font-size: ${(p: any) => p.theme.typography.titleMD.fontSize};
  line-height: ${(p: any) => p.theme.typography.titleMD.lineHeight};
  text-transform: uppercase;
  color: ${(p: any) =>
    p.theme.isDarkMode
      ? p.theme.colors.white.primary
      : p.theme.colors.black.primary};
`;

export const Text = styled.div`
  text-align: center;
  width: 425px;
  font-family: ${(p: any) => p.theme.typography.specialMD.fontFamily};
  font-weight: ${(p: any) => p.theme.typography.specialMD.fontWeight};
  font-size: ${(p: any) => p.theme.typography.specialMD.fontSize};
  line-height: ${(p: any) => p.theme.typography.specialMD.lineHeight};
  text-transform: uppercase;
  color: ${(p: any) =>
    p.theme.isDarkMode
      ? p.theme.colors.white.primary
      : p.theme.colors.black.primary};
`;

export const QuizInfo = styled.div`
  margin-top: -25px;
  padding-bottom: 40px;
`;

export const QuizTitleWrapper = styled.div`
  background-color: black;
  margin: 0px 0px 5px 0px;
  transform: rotate(-2deg);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 6px 12px rgba(0, 0, 0, 0.66);
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 6px 12px rgba(0, 0, 0, 0.66);
  }
`;

export const QuizTitle = styled.h2`
  color: white;
  padding: 10px;
  font-family: "Hitchcock", sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: capitalize;
`;

export const QuizText = styled.p`
  color: black;
  padding: 0 16px;
  text-align: justify;
  margin-top: 20px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1px;
  font-family: "Special", sans-serif;
`;

export const QuizImageWrapper = styled.div`
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  margin-bottom: -21px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

export const QuizImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const BackButton = styled.button`
  position: fixed;
  top: 50px;
  left: 10px;
  width: 36px;
  height: 36px;
  padding: 3px 5px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.11);
`;

export const RowOfOptions = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 16px;
  gap: 16px;
`;

export const YesButton = styled.button`
  background: ${(p) => p.theme.colors.developed.primary};
  color: black;
  font-family: "Hitchcock", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(p) => p.theme.colors.developed.medium};
  }
`;

export const NoButton = styled.button`
  background: ${(p) => p.theme.colors.red.primary};
  color: white;
  font-family: "Hitchcock", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(p) => p.theme.colors.red.medium};
  }
`;

export const CentralControl = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CategoryName = styled.h3`
  font-family: "Special", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: black;
  margin: 0;
  padding: 0;
`;

export const ApiErrorText = styled.p`
  font-family: ${({ theme }: any) => theme.typography.bodySM.fontFamily};
  font-size: ${({ theme }: any) => theme.typography.bodySM.fontSize};
  font-weight: ${({ theme }: any) => theme.typography.bodySM.fontWeight};
  line-height: ${({ theme }: any) => theme.typography.bodySM.lineHeight};
  color: ${(p) =>
    p.theme.isDarkMode
      ? p.theme.colors.white.primary
      : p.theme.colors.black.primary};
  text-align: center;
  margin-top: 20px;
`;

// --- Language Toggle Styles ---

export const LanguageToggleContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  z-index: 10;
  backdrop-filter: blur(8px);
`;

interface LanguageToggleSliderProps {
  activeIndex: number;
}

export const LanguageToggleSlider = styled.div<LanguageToggleSliderProps>`
  position: absolute;
  top: 4px;
  left: ${(props) => 4 + props.activeIndex * 36}px;
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #ffda17, #f7be56);
  border-radius: 18px;
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
`;

export const LanguageFlagButton = styled.button<{ isActive: boolean }>`
  position: relative;
  z-index: 1;
  background: none;
  border: none;
  width: 36px;
  height: 36px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
  padding: 0;
  opacity: 1;
  color: ${(props) => (props.isActive ? "black" : "#555")};
  filter: ${(props) => (props.isActive ? "none" : "grayscale(100%)")};

  &:hover {
    transform: scale(1.15);
    filter: none;
  }
`;

// --- Ruling Popup Styles ---

export const overlayFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const popupSlideUp = keyframes`
  from {
    opacity: 0;
    transform: scale(0.85) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

export const RulingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: ${overlayFadeIn} 0.25s ease-out;
  backdrop-filter: blur(4px);
`;

export const RulingCard = styled.div<{ result: RulingResult }>`
  background: white;
  border-radius: 16px;
  max-width: 480px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${popupSlideUp} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
`;

export const RulingHeader = styled.div<{ result: RulingResult }>`
  background: ${(props) =>
    props.result === "win"
      ? "linear-gradient(135deg, #4CAF50, #66BB6A)"
      : "linear-gradient(135deg, #F44336, #EF5350)"};
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RulingResultText = styled.h3`
  color: white;
  font-family: "Hitchcock", sans-serif;
  font-size: 24px;
  letter-spacing: 2px;
  margin: 0;
`;

export const RulingCloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`;

export const RulingBody = styled.div`
  padding: 24px;
`;

export const RulingSummaryText = styled.div`
  color: #333;
  font-family: "Special", sans-serif;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.5px;
  margin: 0 0 20px 0;

  span {
    font-weight: bold;
    color: black;
  }
`;

export const RulingAudioButton = styled.button<{ isPlaying: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px;
  background: ${(props) =>
    props.isPlaying
      ? "linear-gradient(135deg, #333, #555)"
      : "linear-gradient(135deg, #ffda17, #f7be56)"};
  color: ${(props) => (props.isPlaying ? "white" : "black")};
  border: none;
  border-radius: 10px;
  font-family: "Hitchcock", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const QuizLegalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 30px 0;
  font-family: ${({ theme }: any) => theme.typography.bodySM.fontFamily};
  font-size: ${({ theme }: any) => theme.typography.bodySM.fontSize};
  font-weight: ${({ theme }: any) => theme.typography.bodySM.fontWeight};
  line-height: ${({ theme }: any) => theme.typography.bodySM.lineHeight};
  color: ${(p) => p.theme.colors.black.primary};

  a {
    color: ${(p) => p.theme.colors.black.primary};
    margin: 0 0.5rem;
    text-decoration: underline;
    text-decoration-skip-ink: auto;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
