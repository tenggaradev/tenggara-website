import Image from "next/image"
import LogoWhite from "../../public/logo-tenggara-white.png"
// style
import styles from "../../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image src={LogoWhite} alt="tenggara-logo" />
        <span>&copy;2022 Tenggara Blockchain Services</span>
        <div className={styles.term}>
          <p>Privacy Policy</p>
          <p>Term of Use</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
