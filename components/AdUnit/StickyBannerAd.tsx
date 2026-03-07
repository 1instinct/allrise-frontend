import React, { useState } from "react";
import { AdUnit } from "./AdUnit";
import { StickyBannerWrapper, BannerCloseButton } from "./AdUnit.styles";

export const StickyBannerAd: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const slotId = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER;

  if (dismissed || !slotId) return null;

  return (
    <StickyBannerWrapper>
      <BannerCloseButton onClick={() => setDismissed(true)} aria-label="Close ad">
        &times;
      </BannerCloseButton>
      <AdUnit
        slotId={slotId}
        format="horizontal"
        style={{ minHeight: "50px", height: "auto", maxHeight: "90px" }}
      />
    </StickyBannerWrapper>
  );
};
