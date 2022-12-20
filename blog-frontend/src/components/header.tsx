import Image from "next/image";
import phone from "../medias/phone.png";
import styles from "../styles/header.module.css";
import m from "../medias/m.png";
import g from "../medias/g.png";
import Mblue from "../medias/Mblue.png";
import Gblue from "../medias/Gblue.png";
import Link from "next/link";
import menuHamb from "../medias/menuHamb.png";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const handleNavBar: any = document.getElementById("navBar");
    const scroll = () => {
      if (window.scrollY !== 0) {
        handleNavBar.style.background = "#2E475D";
      } else {
        handleNavBar.style.background = "transparent";
      }
    };
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, []);
  const buttonHandler = () => {
    const change: any = document.getElementById("menuHamb");
    if (change.style.display === "unset") {
      change.style.display = "none";
    } else {
      change.style.display = "unset";
    }
  };
  return (
    <div>
      <div className={styles.navbar} id="navBar">
        <div className={styles.menus}>
          <div className={styles.logoMG}>
            <Link href={"/"}>
              <Image src={m} alt="m" width={28} height={29} className="mLogo" />
              <Image src={g} alt="g" width={28} height={29} className="gLogo" />
            </Link>
          </div>
          <div className={styles.MG}>
            <div className={styles.M}>
              <Image src={Mblue} alt="M" width={28} height={29} className="m" />
            </div>
            <div className={styles.G}>
              <Image src={Gblue} alt="G" width={28} height={29} className="g" />
            </div>
          </div>
          <div className={styles.navMenus}>
            <div className={styles.navItems}>Plateforme emploi</div>
            <div className={styles.navItems}>Accompagnement</div>
            <div className={styles.navItems}>Notre ADN</div>
            <div className={styles.navItems}>Nos offres</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.navItems}>
            <Image
              src={phone}
              alt="phone"
              width={14}
              height={14}
              className="phoneLogo"
            />

            <p>
              <a href="tel:+0184800940"> 01 84 80 09 40 </a>
            </p>
          </div>
          <div className={styles.button1}>
            <Link className={styles.button1txt} href="/account/signin">
              Se connecter
            </Link>
          </div>
          <div className={styles.hide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1.2em"
              height="1.2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.4 22A15.42 15.42 0 0 1 2 6.6A4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07a3.79 3.79 0 0 1 .72.18a1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65a4.34 4.34 0 0 1 .19.73a4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22Z"
              ></path>
            </svg>
          </div>
          <div className={styles.hide} onClick={buttonHandler}>
            <Image
              src={menuHamb}
              alt="m"
              width={16}
              height={16}
              className="menuHamb"
            />
          </div>
        </div>
      </div>
      <div className={styles.menuPhone} id="menuHamb">
        <div className={styles.menuTop}>
          <div className={styles.menuChild}>Accueil</div>
          <div className={styles.menuChild}>Plateforme emploi</div>
          <div className={styles.menuChild}>Coaching emploi</div>
          <div className={styles.menuChild}>Notre ADN</div>
          <div className={styles.menuChild}>Nos Offres</div>
        </div>
        <div className={styles.menuBottom}>
          <div className={styles.menuChild}>
            <Link className={styles.button1txt} href="/account/signin">
              Se connecter
            </Link>
          </div>
          <div className={styles.menuChild}>Nous contacter</div>
          <div className={styles.menuChild}>Demander une démo</div>
          <div className={styles.menuChild} id={"phone"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1.2em"
              height="1.2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.4 22A15.42 15.42 0 0 1 2 6.6A4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07a3.79 3.79 0 0 1 .72.18a1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65a4.34 4.34 0 0 1 .19.73a4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22Z"
              ></path>
            </svg>
            01 84 80 09 40
          </div>
        </div>
      </div>
    </div>
  );
}
