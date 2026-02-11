import styled from "@emotion/styled";
import { transparentize } from "polished";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import { Slider, Slide, ImageWithZoom } from "pure-react-carousel";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  background: url("/images/allrise/law-pattern.png"),
    linear-gradient(196.13deg, #ffda17 -16.74%, #f7be56 89.04%);
  background-attachment: fixed;
`;

export const ProductImage = styled.img`
  width: 33%;
  height: auto;
  object-fit: contain;
  object-position: center;
  margin: 0 auto;
  display: block;
  margin-bottom: -100px;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
    width: 100%;
    height: auto;
    margin-bottom: -150px;
  }
`;

export const ProductImageCarousel = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

export const CarouselBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: ${(p: any) =>
    p.isDarkMode
      ? transparentize(0.95, p.theme.colors.black.primary)
      : transparentize(0.95, p.theme.colors.white.primary)};
`;

export const StyledSlider = styled(Slider)`
  height: 100vh;
  background: ${(p: any) =>
    p.isDarkMode
      ? transparentize(0.95, p.theme.colors.black.primary)
      : transparentize(0.95, p.theme.colors.white.primary)};
`;

export const StyledSlide = styled(Slide)`
  /* width: 60vw;
  height: 500px; */
  height: 100vh;
`;
export const StyledImageWithZoom = styled(ImageWithZoom)``;

export const CarouselNav = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  top: 50%;
  display: flex;
  justify-content: space-between;
`;

export const CarouselBackButton = styled(ButtonBack)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
  opacity: 0.11;
  &:hover {
    opacity: 1;
  }
`;

export const CarouselNextButton = styled(ButtonNext)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  opacity: 0.11;
  &:hover {
    opacity: 1;
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 85px;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
    width: 90%;
    height: auto;
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

export const ProductLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-around;
  width: 50%;
  margin: 20px auto;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
    width: 100%;
  }
`;

export const ProductLink = styled.a`
  width: 100%;
  margin: 0 10px 0 5px;
  &:first-of-type {
    margin: 0 5px 0 10px;
  }
`;

export const ProductLinkImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  margin: 0 auto;
`;

export const ProductTeaserContainer = styled.div`
  display: flex;
  height: 420px;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  position: relative;
`;

export const ProductTeaserBackgroundCircle = styled.div`
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: ${(p: any) =>
    p.theme.isDarkMode
      ? p.theme.colors.black.primary
      : p.theme.colors.white.primary};
  opacity: 0.77;
  position: absolute;
`;

export const ProductTeaserImage = styled.img`
  width: 400px;
  height: auto;
  object-fit: contain;
  object-position: center;
  margin: 0 auto;
  position: absolute;
`;
