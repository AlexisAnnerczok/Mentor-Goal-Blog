import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/category.module.css";
import Header from "../../components/header";
import Card from "../../components/card";
import axios from "axios";
import { useState } from "react";
import SvgIndex from "../../components/svgIndex";
import expand from "../../medias/expand.png";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ articles, categories, error }: any) {
  const router = useRouter();
  const [lengthArchives, setLengthArchives] = useState(9);
  const { pid }: any = router.query;
  const [lengthArticles, setLengthArticles] = useState(6);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mentor Goal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.topContent}>
          <div className={styles.breadCrumb}>
            <ul>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li> {">"} </li>
              <li>
                <Link href="#">Catégories</Link>
              </li>
              <li> {">"} </li>
              <li>
                <div className={styles.currentPage}>
                  <Link href="#">{pid}</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.pageMiddle} id="middle">
          <div className={styles.headerMiddle}>
            <p className={styles.headerMiddleTxt}>{pid.replace(" ", "-")}</p>
            <div className={styles.sort}>
              <div className={styles.sortText}>
                <p>Trier par</p>
                <Image
                  src={expand}
                  alt="array"
                  width="20"
                  height="20"
                  className="expand"
                />
              </div>
            </div>
          </div>
          <div className={styles.rectangleMiddle}></div>
          <div className={styles.cardContainer}>
            {articles.data
              .filter(
                (data: any) =>
                  data.attributes.category.data?.attributes?.name
                    .toLowerCase()
                    .replace(" ", "-") === pid.toLowerCase().replace(" ", "-")
              )
              .slice(0, lengthArchives)
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
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  try {
    const res = axios.get("http://localhost:1337/api/articles?populate=%2A");
    const articles = (await res).data;
    const resCat = axios.get("http://localhost:1337/api/categories");
    const categories = (await resCat).data;
    return { articles, categories };
  } catch (error) {
    return { error };
  }
};
