// media
import { SiBlockchaindotcom } from "react-icons/si"
// style
import styles from "../styles/Services.module.scss"

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            ex.
          </p>
        </div>
        <article className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <SiBlockchaindotcom />
              </span>
            </div>
            <div className={styles.content}>
              <h4>Blockchain Consulting</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit impedit neque ullam ea iste quam! loprem20
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <SiBlockchaindotcom />
              </span>
            </div>
            <div className={styles.content}>
              <h4>Token</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit impedit neque ullam ea iste quam!
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <SiBlockchaindotcom />
              </span>
            </div>
            <div className={styles.content}>
              <h4>NFT</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit impedit neque ullam ea iste quam!
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <SiBlockchaindotcom />
              </span>
            </div>
            <div className={styles.content}>
              <h4>DeFi</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit impedit neque ullam ea iste quam!
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <SiBlockchaindotcom />
              </span>
            </div>
            <div className={styles.content}>
              <h4>Smart Contract Development</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit impedit neque ullam ea iste quam!
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services
