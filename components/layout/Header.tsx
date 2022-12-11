import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
// media
import { AiOutlineMenu } from "react-icons/ai"
import Logo from "../../public/logo-tenggara.png"
// style
import styles from "../../styles/Header.module.scss"

const Header = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo} onClick={() => setShowNav(false)}>
            <Link href="/">
              <Image
                src={Logo}
                alt="Tenggara Blockchain"
                width={136}
                height={39}
              />
            </Link>
          </div>
          <div className={styles.navbar}>
            <div className={styles.navigation}>
              <Link
                className={styles.services}
                href="/#services"
                scroll={false}
              >
                <p>Services</p>
              </Link>
              <Link className={styles.about} href="/#about" scroll={false}>
                <p>About</p>
              </Link>
              <Link
                className={styles.contact}
                onClick={() => setShowNav(false)}
                scroll={false}
                href="/#contact"
              >
                <p>Contact</p>
              </Link>
            </div>
            <div
              className={styles.hamburger}
              onClick={() => setShowNav(!showNav)}
            >
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </header>

      {/* mobile nav menu */}
      {showNav && (
        <div className={styles.navMobile} onClick={() => setShowNav(false)}>
          <div className={styles.services}>
            <Link href="/#services">
              <p>Services</p>
            </Link>
          </div>
          <div className={styles.about}>
            <Link href="/#about">
              <p>About</p>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
