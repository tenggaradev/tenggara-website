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
            <div className={styles.icon}>icon</div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>icon</div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>icon</div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
