import styled from "@emotion/styled";

interface FooterStateType {
  darkMode?: boolean;
}

export const SocialContainer = styled.div<FooterStateType>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialList = styled.ul`
  padding-inline-start: 0px;
`;

export const SocialListItem = styled.li<FooterStateType>`
  display: inline-block;
  margin: 0 10px;
  & a {
    color: ${(p) =>
    p.theme.isDarkMode
      ? p.theme.colors.white.primary
      : p.theme.colors.black.primary};
    
    & svg {
      width: 2em;
      height: 2em;
    }
  }
  & a:hover svg {
    fill: ${(p) => p.theme.colors.brand.dark};
  }
`;

export const SocialIcon = styled.img`
  height: 40px;
  width: 40px;
  padding: 5px;
`;
