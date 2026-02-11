"use client";
import dynamic from "next/dynamic";
import { Layout } from "../components";
import girlAnimation from "../../data/girl.json";
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundSubtitle
} from "./FourOhFour.styles";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: girlAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export const FourOhFour = () => {
  return (
    <Layout>
      <NotFoundContainer>
        <Lottie
          options={animationOptions}
          width={300}
          height={300}
          style={{ pointerEvents: "none" }}
        />
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Whoops, keep looking...</NotFoundSubtitle>
      </NotFoundContainer>
    </Layout>
  );
};
