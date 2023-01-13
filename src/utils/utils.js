import axios from "axios";

export const getDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(url);
    if (data && data.success) {
      return data;
    }
    new Error("Ошибка выполнения запроса");
  } catch (error) {
    throw error;
  }
};

