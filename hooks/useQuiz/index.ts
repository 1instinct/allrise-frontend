import axios from "axios";

export const fetchQuestion = async (id: string) => {
  const username =
    process.env.QUIZ_API_USERNAME ||
    process.env.NEXT_PUBLIC_QUIZ_API_USERNAME ||
    "";
  const password =
    process.env.QUIZ_API_PASSWORD ||
    process.env.NEXT_PUBLIC_QUIZ_API_PASSWORD ||
    "";
  const loginResponse = await axios.post(
    "https://lawsuits.allrise.app/api/v1/login",
    null,
    { params: { username, password } }
  );
  const token = loginResponse.data.access;
  const response = await axios.get(
    `https://lawsuits.allrise.app/api/v1/lawsuits/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
  return response.data;
};
