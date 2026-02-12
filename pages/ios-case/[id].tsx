import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  QuizContainer,
  Logo,
  ApiErrorText
} from "../../components/Quiz/Quiz.styles";
import { LegalLink } from "../../components/LegalLinks/LegalLinks.styles";

const IosCaseFallback = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    // Give the Universal Link a moment to intercept.
    // If we're still here after 1.5s, the app isn't installed —
    // redirect to the web case view.
    const timeout = setTimeout(() => {
      router.replace(`/case/${id}`);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <QuizContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
          gap: "10px"
        }}
      >
        <Logo src="/images/allrise/logo-shadow.png" alt="AllRise Logo" />
        <ApiErrorText style={{ fontFamily: "Special, sans-serif" }}>
          Opening in the All Rise! app...
        </ApiErrorText>
        <LegalLink href={`/case/${id}`}>
          Or view this case in your browser
        </LegalLink>
      </div>
    </QuizContainer>
  );
};

export default IosCaseFallback;
