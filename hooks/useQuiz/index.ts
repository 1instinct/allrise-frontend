import { useQuery } from "react-query";
import axios from "axios";

const fetchQuestion = async (id: string) => {
  const loginResponse = await axios.post(
    "https://lawsuits.allrise.app/api/v1/login",
    { username: "softcall", password: "test123" }
  );
  const token = loginResponse.data.token;
  const response = await axios.get(
    `https://lawsuits.allrise.app/api/v1/lawsuits/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
  return response.data;
};

const useQuestion = (id: string) => {
  return useQuery(["lawsuit", id], () => fetchQuestion(id));
};

export { fetchQuestion, useQuestion };
