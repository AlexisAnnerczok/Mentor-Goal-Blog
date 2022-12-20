import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/article.module.css";
import Header from "../../components/header";
import Card from "../../components/card";
import Footer from "../../components/footer";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Label from "../../components/label";
import SvgIndex from "../../components/svgIndex";

export default function Home({ articles, categories, error }: any) {
  const router = useRouter();
  const { pid }: any = router.query;
  return (
    <div className={styles.main}>
      <Head>
        <title>Mentor Goal Blog</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.svg}>
          <SvgIndex />
        </div>
        <div className={styles.topContent}>
          <div className={styles.breadCrumb}>
            <ul>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li> {">"} </li>
              <li>
                <Link href="#">Articles</Link>
              </li>
              <li> {">"} </li>
              <li>
                <div className={styles.currentPage}>
                  <Link href="#">{pid}</Link>
                </div>
              </li>
            </ul>
          </div>
          {articles.data
            .filter(
              (data: any) =>
                data.attributes.name.toLowerCase().replace(" ", "-") ===
                pid.toLowerCase().replace(" ", "-")
            )
            .slice(0, 1)
            .map((article: any) => (
              <div key={article.id} className={styles.topBox}>
                <div className={styles.boxTopLeft}>
                  <div className={styles.label}>
                    <Link
                      href={`/category/${article.attributes.category.data?.attributes?.name}`}
                    >
                      <Label
                        name={
                          article.attributes.category.data?.attributes?.name
                        }
                        color={
                          article.attributes.category.data?.attributes?.color
                        }
                        accentColor={
                          article.attributes.category.data?.attributes
                            ?.accentColor
                        }
                      />
                    </Link>
                  </div>
                  <div className={styles.separator}></div>
                  <div className={styles.title}>{article.attributes.name}</div>
                  <div className={styles.infos}>
                    <span>
                      {new Date(
                        article.attributes.publishDate
                      ).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>-</span>
                    <span>{article.attributes.author}</span>
                  </div>
                </div>
                <div className={styles.boxTopRight}>
                  <Image
                    loader={() =>
                      `http://localhost:1337/${article.attributes.image.data?.attributes?.url?.slice(
                        1
                      )}`
                    }
                    src={`http://localhost:1337/${article.attributes.image.data?.attributes?.url}`}
                    alt="array"
                    width={543}
                    height={407}
                    className={styles.topImage}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className={styles.middleContent}>
          <div className={styles.paragraphe}>
            Lorem ipsum dolor sit amet consectetur. Semper nulla ut rhoncus
            vitae proin lectus. Vel nisi quis at adipiscing quisque. Orci
            porttitor facilisis at ut aenean volutpat sit nibh. Lacinia sed
            lacus quam aliquam. Turpis pretium non quam augue in quis enim nam
            nunc. Sit et aliquam libero euismod dignissim massa et aliquam. In
            neque lobortis blandit euismod curabitur pellentesque consectetur
            varius nunc. Tristique lectus in erat eget in ut in. Orci in tortor
            diam nisl eu. Volutpat volutpat ultrices pretium id tristique. Elit
            duis cursus sagittis duis. Massa nam porttitor feugiat orci risus
            dui in vivamus. Mi suscipit tincidunt dolor nulla risus. Accumsan
            fusce dui eget semper ultrices. In sem placerat odio sed lobortis
            nisl arcu. Habitant nibh urna nunc morbi morbi amet gravida
            malesuada eget. Orci aliquet dictumst ac lectus metus ullamcorper
            sed faucibus. Lectus felis semper massa in quis. Ut nunc in duis est
            elit in porttitor at. Semper est facilisis tristique odio et blandit
            bibendum. Vulputate id sociis leo eu fermentum ultrices in gravida
            vulputate. Turpis turpis duis non condimentum felis. Interdum purus
            gravida tortor neque. Nisl rhoncus gravida eu egestas purus rhoncus.
          </div>
          <div className={styles.paragraphe}>
            Sit amet euismod tortor a sapien. Vitae nulla eros blandit sit
            accumsan ornare tellus tellus. Erat amet id risus sed. Magna lacus
            cras enim ultricies arcu amet ultrices. Egestas malesuada bibendum
            pulvinar sed sodales at bibendum. Leo consequat augue maecenas ac et
            volutpat in etiam. A ac gravida egestas lectus cras vel. Laoreet
            aliquet mattis etiam morbi mauris. Placerat vel sed tellus sit
            tortor. Pulvinar diam semper ullamcorper blandit nunc eget. Quam a
            sed gravida enim non mattis. Sed commodo tempus volutpat vel sed
            nulla ac risus. Cras et aliquet felis scelerisque nam vitae. Fusce
            mauris nibh luctus sem faucibus nisi pharetra felis facilisis. At
            laoreet augue magna sit viverra sagittis. Facilisi dictum ac cum
            nibh dui urna fusce porta amet. Curabitur nunc ac varius luctus diam
            eget ut. Consequat interdum non praesent semper congue nec amet
            cursus. Enim elit eu tellus est elit mauris orci ultrices.
            Ullamcorper vulputate duis non viverra semper cursus fermentum quis
            aliquet. Auctor cras hac ipsum nisi. Etiam nec non id integer congue
            purus sem. Euismod a ac justo libero lacus. Viverra nunc pretium
            pretium est vitae vestibulum viverra. Dignissim aliquet duis sit
            tincidunt nullam montes est tellus egestas. Ornare amet mauris
            sapien dignissim convallis eu tempor gravida. Sed commodo tempus
            volutpat vel sed nulla ac risus. Cras et aliquet felis scelerisque
            nam vitae. Fusce mauris nibh luctus sem faucibus nisi pharetra felis
            facilisis. At laoreet augue magna sit viverra sagittis. Facilisi
            dictum ac cum nibh dui urna fusce porta amet. Curabitur nunc ac
            varius luctus diam eget ut. Consequat interdum non praesent semper
            congue nec amet cursus. Enim elit eu tellus est elit mauris orci
            ultrices.
          </div>
          <div className={styles.paragraphe}>
            Sit amet euismod tortor a sapien. Vitae nulla eros blandit sit
            accumsan ornare tellus tellus. Erat amet id risus sed. Magna lacus
            cras enim ultricies arcu amet ultrices. Egestas malesuada bibendum
            pulvinar sed sodales at bibendum. Leo consequat augue maecenas ac et
            volutpat in etiam. A ac gravida egestas lectus cras vel. Laoreet
            aliquet mattis etiam morbi mauris. Placerat vel sed tellus sit
            tortor. Pulvinar diam semper ullamcorper blandit nunc eget. Quam a
            sed gravida enim non mattis. Sed commodo tempus volutpat vel sed
            nulla ac risus. Cras et aliquet felis scelerisque nam vitae. Fusce
            mauris nibh luctus sem faucibus nisi pharetra felis facilisis. At
            laoreet augue magna sit viverra sagittis. Facilisi dictum ac cum
            nibh dui urna fusce porta amet. Curabitur nunc ac varius luctus diam
            eget ut. Consequat interdum non praesent semper congue nec amet
            cursus. Enim elit eu tellus est elit mauris orci ultrices.
            Ullamcorper vulputate duis non viverra semper cursus fermentum quis
            aliquet. Auctor cras hac ipsum nisi. Etiam nec non id integer congue
            purus sem. Euismod a ac justo libero lacus. Viverra nunc pretium
            pretium est vitae vestibulum viverra. Dignissim aliquet duis sit
            tincidunt nullam montes est tellus egestas. Ornare amet mauris
            sapien dignissim convallis eu tempor gravida. Sed commodo tempus
            volutpat vel sed nulla ac risus. Cras et aliquet felis scelerisque
            nam vitae. Fusce mauris nibh luctus sem faucibus nisi pharetra felis
            facilisis. At laoreet augue magna sit viverra sagittis. Facilisi
            dictum ac cum nibh dui urna fusce porta amet. Curabitur nunc ac
            varius luctus diam eget ut. Consequat interdum non praesent semper
            congue nec amet cursus. Enim elit eu tellus est elit mauris orci
            ultrices.
          </div>
        </div>
        <div className={styles.botContent}>
          <div className={styles.botContentTitle}>Articles récents:</div>
          <div className={styles.moreContent}>
            {articles.data
              .sort((a: any, b: any) => {
                const dataA = new Date(a.attributes.publishDate);
                const dateB = new Date(b.attributes.publishDate);
                return dataA > dateB ? -1 : 1;
              })
              .slice(0, 3)
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
    const resCat = axios.get("http://localhost:1337/api/categories");
    const articles = (await res).data;
    const categories = (await resCat).data;
    return { articles, categories };
  } catch (error) {
    return { error };
  }
};
