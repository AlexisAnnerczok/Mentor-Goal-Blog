import axios from "axios";
import styles from "../styles/adminCard.module.css";
import array from "../medias/array.png";
import icon_modify from "../medias/icon_modify.png";
import icon_delete from "../medias/icon_delete.png";
import Image from "next/image";
import Label from "./label";
import { useRouter } from "next/router";

export default function AdminCard(props: any) {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.topContainer}>
        <div className={styles.textContainer}>
          <p>22 novembre 2022</p>
        </div>
        <Label name={props.category}/>
      </div>

      <div className={styles.textTop}>
        <div className={styles.mainText}>
          <div className={styles.textT}>{props.name}</div>
          
        </div>
      </div>
    
      <div className={styles.bottomButtons}>
          <div
            className={styles.readArticleButton}
            onClick={() =>
              router.push(`/articles/${props.category}/${props.name}`)
            }
          >
          <div className={styles.link}>
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
        <div className={styles.adminButtons}>
          <div
            className={styles.specialButton}
            onClick={() =>
              router.push(`/articles/${props.category}/${props.name}`)
            }
            >
            <Image
              src={icon_modify}
              alt="modify"
              width={25}
              height={25}
              className="modify"
              />
          </div>
          <div
            className={styles.specialButton}
            onClick={() =>
              axios.delete("http://localhost:1337/api/articles/3")
            }
            >
            <Image
              src={icon_delete}
              alt="delete"
              width={25}
              height={25}
              color={"red"}
              className="delete"
              />
          </div>

        </div>
      </div>
    </div>
  );
}