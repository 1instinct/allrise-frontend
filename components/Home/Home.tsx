import React, { useState, useEffect, useCallback } from "react";
import {
  NotifyForm,
  ProductTeaser,
  SocialLinks,
  LegalLinks
} from "../components";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { useMutation, useQueryClient } from "react-query";
import { fetchProducts, useProducts } from "../../hooks";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
  Container,
  ProductImage,
  Logo,
  LogoText,
  ProductImageCarousel,
  CarouselBackground,
  StyledSlider,
  StyledSlide,
  StyledImageWithZoom,
  CarouselNav,
  CarouselBackButton,
  CarouselNextButton,
  Text,
  Tagline,
  ProductLinks,
  ProductLink,
  ProductLinkImg,
  ProductTeaserContainer,
  ProductTeaserBackgroundCircle,
  ProductTeaserImage
} from "./Home.styles";

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE || "";
const siteDesc = process.env.NEXT_PUBLIC_SITE_DESC || "";
const logoPath = process.env.NEXT_PUBLIC_LOGO_PATH;
const previewMode =
  process.env.NEXT_PUBLIC_IS_PREVIEW_MODE === "true" ? true : false;
const comingSoonText = process.env.NEXT_PUBLIC_COMING_SOON_TEXT || "";
const mailerUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL || "";
const mailerId = process.env.NEXT_PUBLIC_MAILCHIMP_ID || "";
const mailerUser = process.env.NEXT_PUBLIC_MAILCHIMP_U || "";
const spreeApiUrl = process.env.NEXT_PUBLIC_SPREE_API_URL || "";

export const Home = () => {
  const mailChimpUrl = `${mailerUrl}?u=${mailerId}&id=${mailerUser}`;
  const [isSlideshow, setIsSlideshow] = useState(false);

  const queryClient = useQueryClient();
  const {
    error: productsError,
    status: productsStatus,
    data: productsData,
    isLoading: productsAreLoading,
    isSuccess: productsSuccess
  }: {
    error: any;
    status: any;
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
  } = useProducts(1);

  const renderProductSlides = useCallback(() => {
    return productsData.data.map((i: any) => {
      const productImg = i.relationships?.images?.data[0]?.id;
      const allImages = productsData
        ? productsData?.included?.filter((e: any) => e.type == "image")
        : [];
      const foundImg = allImages
        ? allImages.filter((e: any) => e["id"] == productImg)
        : undefined;
      const imgUrl =
        foundImg !== undefined ? foundImg[0]?.attributes?.styles[4]?.url : "";
      const imgSrc = productImg ? `${spreeApiUrl}${imgUrl}` : "";
      return allImages?.map((image: any, index: any) => {
        const imgSrc = image?.attributes?.styles[9]?.url || "";
        const imgUrl = `${spreeApiUrl}${imgSrc}`;
        return (
          <StyledSlide
            key={`image-${index}`}
            index={index}
            onClick={() => setIsSlideshow(false)}
          >
            <StyledImageWithZoom src={imgUrl} />
          </StyledSlide>
        );
      });
    });
  }, [productsData]);

  const renderProductThumbnails = useCallback(
    (productsData: any, setIsSlideshow: any) => {
      return productsData?.data?.map((i: any) => {
        const productImg = i.relationships?.images?.data[0]?.id;
        const allImages = productsData
          ? productsData?.included?.filter((e: any) => e.type == "image")
          : [];
        const foundImg = allImages
          ? allImages.filter((e: any) => e["id"] == productImg)
          : undefined;
        console.log("foundImg: ", foundImg);
        const imgUrl =
          foundImg !== undefined ? foundImg[0]?.attributes?.styles[3]?.url : "";
        const imgSrc = productImg ? `${spreeApiUrl}${imgUrl}` || "" : "";
        return (
          <div
            key={`image-${i.id}`}
            onClick={() => setIsSlideshow(true)}
            style={{ cursor: "pointer" }}
          >
            <img src={imgSrc} />
          </div>
        );
      });
    },
    [productsData]
  );

  useEffect(() => {
    if (productsSuccess) {
      queryClient.setQueryData(["products", 1], productsData);
    }
  }, [productsSuccess]);

  return (
    <>
      <Container>
        <ProductImage
          src="/images/allrise/allrise-trio.png"
          alt="All Rise! Phones"
        />
        {logoPath ? (
          <Logo src={logoPath} />
        ) : siteTitle ? (
          <LogoText>{siteTitle}</LogoText>
        ) : null}
        {comingSoonText && <Tagline>{comingSoonText}</Tagline>}
        {previewMode && (
          <ProductTeaser
            products={productsData}
            title={""}
            openSlideshow={(e: any) => setIsSlideshow(e)}
          />
        )}
        {previewMode && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {renderProductThumbnails(productsData, setIsSlideshow)}
            </Masonry>
          </ResponsiveMasonry>
        )}
        {siteDesc !== "" && <Text>{siteDesc}</Text>}
        <ProductLinks>
          <ProductLink
            href="https://apps.apple.com/us/app/all-rise/id1662328976"
            target="_blank"
          >
            <ProductLinkImg src="/images/app-store.gif" />
          </ProductLink>
          <ProductLink
            href="https://play.google.com/store/apps/details?id=com.allrise.YouJudge"
            target="_blank"
          >
            <ProductLinkImg src="/images/play-store.gif" />
          </ProductLink>
        </ProductLinks>

        <hr />

        <h3>Prefer a physical game?</h3>
        <h1>Coming Soon...</h1>

        <ProductTeaserContainer>
          <ProductTeaserBackgroundCircle />
          <ProductTeaserImage src="/images/allrise/allrise-card-box-2023.png" />
        </ProductTeaserContainer>

        <NotifyForm />
        <SocialLinks />
        {isSlideshow && (
          <ProductImageCarousel>
            <CarouselBackground onClick={() => setIsSlideshow(false)} />
            <CarouselProvider
              naturalSlideWidth={600}
              naturalSlideHeight={600}
              totalSlides={productsData.data ? productsData.data.length : 1}
              touchEnabled
              infinite={productsData.data ? true : false}
            >
              <StyledSlider className="slider">
                {renderProductSlides()}
              </StyledSlider>
              <CarouselNav>
                <CarouselBackButton>
                  <ArrowBack />
                </CarouselBackButton>
                <CarouselNextButton>
                  <ArrowForward />
                </CarouselNextButton>
              </CarouselNav>
            </CarouselProvider>
          </ProductImageCarousel>
        )}
        <LegalLinks />
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products", 1], () => fetchProducts(1));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
