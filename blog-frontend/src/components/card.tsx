import styles from "../styles/card.module.css";
import array from "../medias/array.png";
import Image from "next/image";
import Label from "./label";
import { useRouter } from "next/router";

export default function Cart(props: any) {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <Image
          loader={() => `http://localhost:1337/${props.image?.slice(1)}`}
          src={`http://localhost:1337/${props.image}`}
          alt="array"
          width={354}
          height={216}
          className={styles.topImage}
          onClick={() => router.push(`/articles/${props.name}`)}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.textContainer}>
          <p>
            {new Date(props.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className={styles.textTop}>
            <div className={styles.mainText}>
              <div className={styles.textT}>{props.name}</div>
              <div className={styles.textB}>
                Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed
                cursus ut mi.
              </div>
            </div>
          </div>
          <div className={styles.link}>
            <div
              className={styles.label}
              onClick={() => router.push(`/categories/${props.category}`)}
            >
              <Label
                name={props.category}
                color={props.color}
                accentColor={props.accentColor}
              />
            </div>
            <div
              className={styles.bottomRight}
              onClick={() => router.push(`/articles/${props.name}`)}
            >
              <p>Lire l'article</p>
              <Image
                src={array}
                alt="array"
                width={16}
                height={15}
                className="array"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
