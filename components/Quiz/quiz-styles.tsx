import styled from "@emotion/styled";

export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
  height: 280px;
`;

export const QuizImage = styled.img`
  width: 100%;
  height: 280px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 50px;
  left: 10px;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.11);
`;

export const RowOfOptions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
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
