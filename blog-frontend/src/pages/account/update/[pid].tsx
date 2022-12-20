import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../../styles/admin.module.css";

export default function Home({ articles }: any) {
  const router = useRouter();
  const { pid }: any = router.query;
  const [name, setName] = useState("null");
  const [content, setContent] = useState("null");
  const [date, setDate] = useState("null");
  const [category, setCategory] = useState("null");
  const [author, setAuthor] = useState("null");
  const updateArticle = async (event: any) => {
    event.preventDefault();
    setName("");
    setContent("");
    // setCategory("");
    setDate("");
    await axios.put(`http://localhost:1337/api/articles/${pid}`, {
      data: {
        name: name,
        content: content,
        publishDate: date,
        // category: category,
      },
    });
  };

  const deleteArticle = (event: any) => {
    event.preventDefault();
    // axios.delete(`http://localhost:1337/api/articles/${id}`);
  };
  const article = articles.data.filter((article: any) => article.id == pid);
  return (
    <div className={styles.main} id={styles.update}>
      <div className={styles.adminPanel} id={styles.update}>
        <div className={styles.panelChild}>
          {articles.data
            .filter((data: any) => data.id == pid)
            .map((article: any) => (
              <li key={article.id}>
                <form className={styles.form}>
                  <div className={styles.formTitle}>Modifier l'article</div>

                  <label htmlFor="inputField" className={styles.label}>
                    Nom
                  </label>
                  <input
                    className={styles.inputField}
                    type="text"
                    defaultValue={article.attributes.name}
                    placeholder="ex: Personnaliser son CV"
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                  <label htmlFor="inputField" className={styles.label}>
                    Contenu
                  </label>
                  <input
                    id={styles.content}
                    className={styles.inputField}
                    type="text"
                    contentEditable="true"
                    defaultValue={article.attributes.content}
                    onChange={(event) => setContent(event.target.value)}
                    required
                  />
                  <label htmlFor="inputField" className={styles.label}>
                    Date de publication
                  </label>
                  <input
                    className={styles.inputField}
                    type="date"
                    contentEditable="true"
                    defaultValue={article.attributes.date}
                    onChange={(event) => setDate(event.target.value)}
                    required
                  />
                  <label htmlFor="inputField" className={styles.label}>
                    Catégorie
                  </label>
                  <input
                    className={styles.inputField}
                    type="text"
                    placeholder="ex: Entretien"
                    contentEditable="true"
                    defaultValue={
                      article.attributes.category.data?.attributes?.name
                    }
                    onChange={(event) => setCategory(event.target.value)}
                    required
                  />

                  <button
                    onClick={updateArticle}
                    className={styles.submitButton}
                  >
                    <div className={styles.submitButtonTxt}>
                      Modifier l'article
                    </div>
                  </button>
                  <button
                    onClick={deleteArticle}
                    className={styles.submitButton}
                  >
                    <div className={styles.submitButtonTxt}>
                      Supprimer l'article
                    </div>
                  </button>
                </form>
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  try {
    const res = axios.get(`http://localhost:1337/api/articles/?populate=%2A`);
    const articles = (await res).data;
    return { articles };
  } catch (error) {
    return { error };
  }
};
