import styles from "../styles/footer.module.css";
import Image from "next/image";
import m from "../medias/Mblue.png";
import g from "../medias/Gblue.png";
import linkedIn from "../medias/logoLinkedIn.png";
import Youtube from "../medias/logoYoutube.png";
import Tiktok from "../medias/logoTiktok.png";
import Instagram from "../medias/logoInstagram.png";
import Twitter from "../medias/logoTwitter.png";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.containerTop}>
        <div className={styles.blockLogo}>
          <div className={styles.logo}>
            <div className={styles.MG}>
              <div className={styles.M}>
                <Image src={m} alt="M" className="m" />
              </div>
              <div className={styles.G}>
                <Image src={g} alt="G" className="g" />
              </div>
            </div>
            <p>
              Permettre l'accès à l'emploi aux jeunes issus de tous horizons. 🎯
            </p>
          </div>
          <div className={styles.linksLogo}>
            <div className={styles.icon}>
              <Image src={linkedIn} alt="logo" className="icon" />
            </div>
            <div className={styles.icon}>
              <Image src={Youtube} alt="logo" className="icon" />
            </div>
            <div className={styles.icon}>
              <Image src={Instagram} alt="logo" className="icon" />
            </div>
            <div className={styles.icon}>
              <Image src={Twitter} alt="logo" className="icon" />
            </div>
            <div className={styles.icon}>
              <Image src={Tiktok} alt="logo" className="icon" />
            </div>
          </div>
        </div>
        <div className={styles.block1footer}>
          <span>À propos</span>
          <div className={styles.content}>
            <p>Pourquoi Mentor Goal</p>
            <p>Notre ADN</p>
            <p>Notre équipe</p>
            <p>Nos offres</p>
            <p>Nos avis TrustPilot</p>
          </div>
        </div>
        <div className={styles.block2footer}>
          <span>Solutions</span>
          <div className={styles.content}>
            <p>Espaces écoles</p>
            <p>Espaces étudiants</p>
            <p>Coaching</p>
            <p>Espace entreprises</p>
            <p>Extension OneClick</p>
          </div>
        </div>
        <div className={styles.block3footer}>
          <span>Contact</span>
          <div className={styles.content}>
            <p>Nous contacter</p>
            <p>Réserver une démo</p>
            <p>Nous rejoindre</p>
          </div>
        </div>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.links}>Mentions légales et CGU</div>
        <div className={styles.links}>RGPD</div>
        <div className={styles.links}>Politique de confidentialité</div>
        <div
          className={styles.links}
          onClick={() => router.push("/account/admin")}
        >
          Admin
        </div>
        <div className={styles.links}>@ Copiright 2022</div>
      </div>
    </div>
  );
}
