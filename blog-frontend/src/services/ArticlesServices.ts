import axios from "axios";

export const FetchArticles = async () => {
  try {
    const res = axios.get("http://localhost:1337/api/articles");
    const articles = (await res).data;
    return { articles };
  } catch (error) {
    return { error };
  }
};
