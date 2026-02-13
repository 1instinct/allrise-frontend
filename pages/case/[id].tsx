import { GetServerSideProps } from "next";
import { Quiz } from "../../components";
import { fetchQuestion } from "../../hooks/useQuiz";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params || {};
  if (!id) {
    return { props: { caseData: null } };
  }
  try {
    const caseData = await fetchQuestion(id as string);
    return { props: { caseData } };
  } catch (error) {
    console.error("Failed to fetch case data:", error);
    return { props: { caseData: null } };
  }
};

export default Quiz;
