import Image from "next/image"
import Link from "next/link"
// media
import HeroImage from "../public/hero-icon.png"
import Fantom from "../public/fantom-logo.png"
import Ethereum from "../public/ethereum-logo.png"
import Avalanche from "../public/avalanche-logo.png"
import Polygon from "../public/polygon-logo.png"
import Binance from "../public/bsc-logo.png"
// style
import styles from "../styles/Hero.module.scss"

const Hero = () => {
  return (
    <>
      <main className={styles.hero}>
        <section className={styles.container}>
          <div className={styles.content}>
            <h1>
              Empowering businesses with the revolutionary power of blockchain technology
            </h1>
            <Link className={styles.button} href="/#contact" scroll={false}>
              <span>Develop with Tenggara</span>
            </Link>
          </div>
          <div className={styles.image}>
            <Image src={HeroImage} alt="hero" />
          </div>
        </section>
      </main>

      {/* stacks */}
      <section className={styles.stacks}>
        <div className={styles.container}>
          <div>
            <Image
              src={Ethereum}
              alt="ethereum"
            />
          </div>
          <div>
            <Image
              src={Fantom}
              alt="fantom"
            />
          </div>
          <div>
            <Image
              src={Avalanche}
              alt="avalanche"
            />
          </div>
          <div>
            <Image
              src={Polygon}
              alt="polygon"
            />
          </div>
          <div>
            <Image
              src={Binance}
              alt="binance"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
