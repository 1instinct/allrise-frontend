import React, { useEffect, useRef } from "react";
import { AdContainer } from "./AdUnit.styles";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdUnitProps {
  slotId: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({
  slotId,
  format = "auto",
  responsive = true,
  style,
  className
}) => {
  const adRef = useRef<HTMLModElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    if (!process.env.NEXT_PUBLIC_ADSENSE_PUB_ID) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      initialized.current = true;
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  if (!process.env.NEXT_PUBLIC_ADSENSE_PUB_ID) return null;

  return (
    <AdContainer className={className} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUB_ID}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </AdContainer>
  );
};
