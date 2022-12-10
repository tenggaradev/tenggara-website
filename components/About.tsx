// media
import { FaUserShield } from "react-icons/fa"
import { SiFastapi, SiBlockchaindotcom } from "react-icons/si"
// style
import styles from "../styles/About.module.scss"

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            unde similique magni quo iure aliquid expedita alias hic ducimus
            temporibus?
          </p>
        </div>
        <article className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <FaUserShield />
              </span>
            </div>
            <h4>More Than 5+ Years of Experience</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              nihil quae dolore nemo. Sapiente, quasi.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <SiFastapi />
              </span>
            </div>
            <h4>Affordable, Fast, and Professional</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              consequuntur veniam facilis saepe nesciunt esse?
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <SiBlockchaindotcom />
              </span>
            </div>
            <h4>20+ EVM and Non-EVM Chains Development</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, a ea
              sequi neque corporis perspiciatis?
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
