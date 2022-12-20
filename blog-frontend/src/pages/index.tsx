import Head from "next/head";
import styles from "../styles/Index.module.css";
import Header from "../components/header";
import Label from "../components/label";
import whiteArray from "../medias/whiteArray.png";
import Image from "next/image";
import Footer from "../components/footer";
import axios from "axios";
import { useState } from "react";
import CardMin from "../components/cardMin";
import Card from "../components/card";
import TypeEffect from "../components/typeEffect";
import SvgIndex from "../components/svgIndex";

export default function Home({ articles, categories, error }: any) {
  const scrollHandle = (e: any) => {
    e.preventDefault();
    let id = e.target.id;
    let position = document.getElementById(id.slice(0, id.length - 1));
    window.location.href = "#middle";
    position && position.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [newsletter, setnewsletter] = useState("null");
  // Request to send email to Newsletter collection
  const handlerequestnewsletter = (event: any) => {
    event.preventDefault();
    setnewsletter("");
    axios.post("http://localhost:1337/api/newsletters", {
      data: {
        email: newsletter,
      },
    });
  };
  // Count of the number of items displayed in articles and archives
  const [lengthArticles, setLengthArticles] = useState(6);
  const [lengthArchives, setLengthArchives] = useState(9);
  // Set the category to display
  const [catSelectet, setCatselected] = useState("entretien");

  return (
    <div className={styles.container}>
      <Head>
        <title>Mentor Goal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <SvgIndex />
        <div className={styles.pageTop}>
          <div className={styles.pageTopLeft}>
            <div className={styles.topContent}>
              <p className={styles.leblog}>
                Le <span>blog</span>
              </p>
              <div className={styles.leblogtxt}>{TypeEffect()}</div>
            </div>
            <div className={styles.botContent}>
              <p className={styles.newstxt}>
                Rejoignez pour ne pas louper pas les nouveaux articles
              </p>
              <div className={styles.inputNewsletter}>
                <input
                  className={styles.mailtxt}
                  placeholder="Votre adresse mail"
                  type="email"
                  onChange={(event) => setnewsletter(event.target.value)}
                  required
                />

                <button
                  onClick={handlerequestnewsletter}
                  className={styles.button1}
                >
                  <div className={styles.button1txt}>Rejoindre</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.pageTopRight}>
            {articles.data
              .sort((a: any, b: any) => {
                const dataA = new Date(a.attributes.publishDate);
                const dateB = new Date(b.attributes.publishDate);
                return dataA > dateB ? -1 : 1;
              })
              .slice(0, 2)
              .map((article: any) => (
                <li key={article.id}>
                  <div className={styles.card}>
                    <Card
                      name={article.attributes.name}
                      category={
                        article.attributes.category.data?.attributes?.name
                      }
                      date={article.attributes.publishDate}
                      color={
                        article.attributes.category.data?.attributes?.color
                      }
                      accentColor={
                        article.attributes.category.data?.attributes
                          ?.accentColor
                      }
                      image={article.attributes.image.data?.attributes?.url}
                    />
                  </div>
                </li>
              ))}
            <div className={styles.seeMore} onClick={scrollHandle}>
              <span> Voir plus</span>
              <Image
                src={whiteArray}
                alt="array"
                width={30}
                height={30}
                className="whiteArrayLogo"
              />
            </div>
          </div>
        </div>
        <div className={styles.pageMiddle} id="middle">
          <div className={styles.headerMiddle}>
            <p className={styles.headerMiddleTxt}> Tous nos articles</p>
            <div className={styles.sort}>
              <select className={styles.select} name="sort" id="select">
                <option value="recent">Plus récent</option>
                <option value="ancien">Plus ancien</option>
                <option value="a-z">Nom (a - z)</option>
                <option value="z-a">Nom (z - a)</option>
                <option value="categories">Catégorie</option>
              </select>
            </div>
          </div>
          <div className={styles.rectangleMiddle}></div>
          <div className={styles.cardContainer}>
            {articles.data
              .sort((a: any, b: any) => {
                const dataA = new Date(a.attributes.publishDate);
                const dateB = new Date(b.attributes.publishDate);
                return dataA > dateB ? -1 : 1;
              })
              .slice(0, lengthArticles)
              .map((article: any) => (
                <li key={article.id}>
                  <div className={styles.card}>
                    <Card
                      name={article.attributes.name}
                      category={
                        article.attributes.category.data?.attributes?.name
                      }
                      date={article.attributes.publishDate}
                      color={
                        article.attributes.category.data?.attributes?.color
                      }
                      accentColor={
                        article.attributes.category.data?.attributes
                          ?.accentColor
                      }
                      image={article.attributes.image.data?.attributes?.url}
                    />
                  </div>
                </li>
              ))}
          </div>
          <div className={styles.buttonsee}>
            <p
              className={styles.buttonseeTxt}
              onClick={() => setLengthArticles(lengthArticles + 3)}
            >
              Voir plus
            </p>
          </div>
        </div>
        <div className={styles.pageBottom}>
          <div className={styles.categories}>
            <p className={styles.categoriesTxt}>Les catégories</p>
            <div className={styles.labelContainer}>
              {categories.data.map((category: any) => (
                <li key={category.id}>
                  <div
                    className={styles.selectCat}
                    onClick={() => setCatselected(category.attributes.name)}
                  >
                    <Label
                      name={category.attributes.name}
                      color={category.attributes.color}
                      accentColor={category.attributes.accentColor}
                    />
                  </div>
                </li>
              ))}
            </div>
          </div>
          <div className={styles.headerBottom}>
            <p className={styles.headerBottomTxt}>Les archives</p>
          </div>
          <div className={styles.cardContainerMin}>
            {articles.data
              .filter(
                (data: any) =>
                  data.attributes.category.data?.attributes?.name
                    .toLowerCase()
                    .replace(" ", "-") ===
                  catSelectet.toLowerCase().replace(" ", "-")
              )
              .slice(0, lengthArchives)
              .map((article: any) => (
                <li key={article.id}>
                  <div className={styles.card}>
                    <CardMin
                      name={article.attributes.name}
                      category={
                        article.attributes.category.data?.attributes?.name
                      }
                      date={article.attributes.publishDate}
                      color={
                        article.attributes.category.data?.attributes?.color
                      }
                      accentColor={
                        article.attributes.category.data?.attributes
                          ?.accentColor
                      }
                      image={article.attributes.image.data?.attributes?.url}
                    />
                  </div>
                </li>
              ))}
          </div>
          <div className={styles.buttonsee}>
            <p
              className={styles.buttonseeTxt}
              onClick={() => setLengthArchives(lengthArchives + 3)}
            >
              Voir plus
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

// Request to get all articles et categories
Home.getInitialProps = async () => {
  try {
    const res = axios.get("http://localhost:1337/api/articles?populate=%2A");
    const resCat = axios.get("http://localhost:1337/api/categories");
    const articles = (await res).data;
    const categories = (await resCat).data;
    return { articles, categories };
  } catch (error) {
    return { error };
  }
};
