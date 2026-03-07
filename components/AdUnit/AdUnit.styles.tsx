import styled from "@emotion/styled";

export const AdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 250px;
  background: ${(p) => p.theme.colors.gray.background || "#f5f5f5"};
  overflow: hidden;
`;

export const StickyBannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  padding: 4px 0;
`;

export const BannerCloseButton = styled.button`
  position: absolute;
  top: 2px;
  right: 8px;
  background: transparent;
  border: none;
  color: #aaa;
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  line-height: 1;
  z-index: 10000;

  &:hover {
    color: #fff;
  }
`;
