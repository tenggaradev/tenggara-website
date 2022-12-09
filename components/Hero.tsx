import Image from "next/image"
import Link from "next/link"
// media
import HeroImage from "../public/hero-icon.png"
// style
import styles from "../styles/Hero.module.scss"

const Hero = () => {
  return (
    <>
      <main className={styles.hero}>
        <section className={styles.container}>
          <div className={styles.content}>
            <h1>
              Securely connect smart contacts with off-chain data and services
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              tempore rerum natus aperiam corporis blanditiis!
            </p>
            <Link className={styles.button} href="#">
              <span>Develop with Tenggara</span>
            </Link>
          </div>
          <div className={styles.image}>
            <Image src={HeroImage} alt="hero" width={728} height={502} />
          </div>
        </section>
      </main>
      {/* stacks */}
      <section className={styles.stacks}>
        <div className={styles.container}>
          {/* <div className={styles.stack}> */}
          <p>ethereum</p>
          <p>ethereum</p>

          {/* </div> */}
        </div>
      </section>
    </>
  )
}

export default Hero
