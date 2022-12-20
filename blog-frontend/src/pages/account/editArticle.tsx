import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/admin.module.css";

export default function Home({ articles, error }: any) {
  const [name, setName] = useState("null");
  const [content, setContent] = useState("null");
  const [date, setDate] = useState("null");
  const [category, setCategory] = useState("null");
  const [author, setAuthor] = useState("null");

  const updateArticle = (event: any) => {
    const router = useRouter();
    const { id }: any = router.query;
    event.preventDefault();
    setName("");
    setContent("");
    setCategory("");
    setDate("");
    axios.put("http://localhost:1337/api/articles/" + id, {
      data: {
        name: name,
        content: content,
        category: category,
        publishDate: date,
      },
    });
  };

  const deleteArticle = (event: any) => {
    event.preventDefault();
    axios.delete("http://localhost:1337/api/articles/" + id);
  };

  return (
    <div className={styles.main}>
      <div className={styles.panelTitle}>Panneau de contrôle</div>
      <div className={styles.adminPanel}>
        <div className={styles.panelChild}>
          <form className={styles.form}>
            <div className={styles.formTitle}>Modifier l'article</div>
            <label htmlFor="inputField" className={styles.label}>
              Nom
            </label>
            <input
              className={styles.inputField}
              type="text"
              defaultValue={test_data[0].name}
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
              defaultValue={test_data[0].content}
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
              defaultValue={test_data[0].date}
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
              defaultValue={test_data[0].category}
              onChange={(event) => setCategory(event.target.value)}
              required
            />
            <button onClick={updateArticle} className={styles.submitButton}>
              <div className={styles.submitButtonTxt}>Modifier l'article</div>
            </button>
            <button onClick={deleteArticle} className={styles.submitButton}>
              <div className={styles.submitButtonTxt}>Supprimer l'article</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
