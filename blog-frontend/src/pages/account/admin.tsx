import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/admin.module.css";
import editButton from "../../medias/edit.png";
import deleteButton from "../../medias/delete.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home({ articles, error }: any) {
  // Set default values
  const router = useRouter();
  const [name, setName] = useState("null");
  const [content, setContent] = useState("null");
  const [cat, setCat] = useState("null");
  const [date, setDate] = useState("null");
  const [category, setCategory] = useState("null");
  const [author, setAuthor] = useState("null");
  // Request to create an article
  const handlerequestArticle = async (event: any) => {
    event.preventDefault();
    setName("");
    setContent("");
    setCat("");
    setDate("");
    setAuthor("");
    await axios.post("http://localhost:1337/api/articles", {
      data: {
        name: name,
        content: content,
        // category: cat,
        publishDate: date,
        author: author,
      },
    });
    router.reload();
  };

  const handlerequestCategorie = (event: any) => {
    event.preventDefault();
    setCategory("");
    axios.post("http://localhost:1337/api/categories", {
      data: {
        name: category,
      },
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <h1>Bonjour, admin</h1>
        <Link href={"/"}>Retourner à l'accueil</Link>
      </div>
      <div className={styles.panelTitle}>Panneau de contrôle</div>
      <div className={styles.adminPanel}>
        <div className={styles.panelChild}>
          <form className={styles.form}>
            <div className={styles.formTitle}>Nouvel article</div>
            <div className={styles.title}></div>
            <label htmlFor="inputField" className={styles.label}>
              Nom
            </label>
            <input
              className={styles.inputField}
              type="text"
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
              placeholder="ex: Lorem ipsum ..."
              onChange={(event) => setContent(event.target.value)}
              required
            />
            <label htmlFor="inputField" className={styles.label}>
              Date de publication
            </label>
            <input
              className={styles.inputField}
              type="date"
              onChange={(event) => setDate(event.target.value)}
              required
            />
            <label htmlFor="inputField" className={styles.label}>
              Auteur
            </label>
            <input
              className={styles.inputField}
              placeholder="ex: Mansour Ndao"
              type="text"
              onChange={(event) => setAuthor(event.target.value)}
              required
            />
            <label htmlFor="inputField" className={styles.label}>
              Catégorie
            </label>
            <input
              className={styles.inputField}
              type="text"
              placeholder="ex: Entretien"
              onChange={(event) => setCat(event.target.value)}
              required
            />
            <button
              onClick={handlerequestArticle}
              className={styles.submitButton}
            >
              <div className={styles.submitButtonTxt}>Créer l'article</div>
            </button>
          </form>
        </div>
        <div className={styles.panelChild}>
          <form className={styles.form}>
            <div className={styles.formTitle}>Nouvelle catégorie</div>
            <div className={styles.title}></div>
            <label htmlFor="inputField" className={styles.label}>
              Nom
            </label>
            <input
              className={styles.inputField}
              type="text"
              placeholder="ex: Curriculum-vitae"
              onChange={(event) => setCategory(event.target.value)}
              required
            />

            <button
              onClick={handlerequestCategorie}
              className={styles.submitButton}
            >
              <div className={styles.submitButtonTxt}>Créer la catégorie</div>
            </button>
          </form>
        </div>
        <div className={styles.panelChild} id={styles.published}>
          <form className={styles.form}>
            <div className={styles.formTitle}>Articles publiés</div>
            {articles.data
              .sort((a: any, b: any) => {
                const dataA = new Date(a.attributes.publishDate);
                const dateB = new Date(b.attributes.publishDate);
                return dataA > dateB ? -1 : 1;
              })

              .map((article: any) => (
                <li key={article.id} className={styles.elementBox}>
                  <div className={styles.publishedChild}>
                    <span>
                      {new Date(
                        article.attributes.publishDate
                      ).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </span>
                    {article.attributes.name}
                  </div>
                  <div className={styles.publishedChild} id={styles.right}>
                    <div
                      onClick={() =>
                        router.push(`/account/update/${article.id}`)
                      }
                      className={styles.submitButton}
                    >
                      <div className={styles.submitButtonTxt}>
                        <Image
                          src={editButton}
                          alt="edit"
                          className={styles.editButton}
                        />
                      </div>
                    </div>
                    <div
                      onClick={async (event: any) => {
                        event.preventDefault();
                        await axios.delete(
                          `http://localhost:1337/api/articles/${article.id}`
                        );
                        router.reload();
                      }}
                      className={styles.submitButton}
                      id={styles.right}
                    >
                      <div className={styles.submitButtonTxt}>
                        <Image
                          src={deleteButton}
                          alt="delete"
                          className={styles.deleteButton}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </form>
        </div>
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  try {
    const res = axios.get("http://localhost:1337/api/articles");
    const articles = (await res).data;
    return { articles };
  } catch (error) {
    return { error };
  }
};
