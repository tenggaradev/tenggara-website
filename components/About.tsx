// media
import { FaUserShield } from "react-icons/fa";
import { SiFastapi, SiBlockchaindotcom } from "react-icons/si";
// style
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>About Us</h2>
          <p>
            Our team members come from different backgrounds in interest,
            education, and expertise. Our diversity is our core strength in
            facing real-life challenges, identifying opportunities, and finding
            solutions.
          </p>
        </div>
        <article className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <FaUserShield />
              </span>
            </div>
            <h4>Years of Experience</h4>
            <p>
              Our founding members were born out of a passion for exploring the
              vast potential of blockchain and a desire to help others realize
              the benefits of this revolutionary technology since 2018.
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
              We offer various services, including smart contract development,
              blockchain application development, and consulting services. So no
              matter your needs, we can deliver it in an affordable, fast, and
              professional.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <SiBlockchaindotcom />
              </span>
            </div>
            <h4>40+ EVM and Non-EVM Chains Development</h4>
            <p>
              From Ethereum to Hyperledger Fabric, we have the knowledge and
              experience to work with a variety of platforms and technologies.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
