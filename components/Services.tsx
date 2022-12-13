// media
import { SiBlockchaindotcom } from "react-icons/si";
import { FaFileContract, FaCoins } from "react-icons/fa";
import { GiCube } from "react-icons/gi";
import { IoImages } from "react-icons/io5";
// style
import styles from "../styles/Services.module.scss";

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Our Services</h2>
          <p>
            Revolutionize your business with our expert blockchain application
            development services
          </p>
        </div>
        <article className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <GiCube />
              </span>
            </div>
            <div className={styles.content}>
              <h4>Blockchain Consulting</h4>
              <p>
                We help businesses to take advantage of Blockchain Technology
                and transform into Web3 optimized business.
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
                Create your own crypto token in any chain, from white paper,
                tokenomics, development to marketing.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <IoImages />
              </span>
            </div>
            <div className={styles.content}>
              <h4>NFT</h4>
              <p>
                Tokenize your assets or items as NFT. Build a new business model
                based on NFT as a unique reward or requirement for accessing
                your special offers.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <FaCoins />
              </span>
            </div>
            <div className={styles.content}>
              <h4>DeFi</h4>
              <p>
                Create a decentralized financial system and instruments that are
                borderless and permissionless.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <FaFileContract />
              </span>
            </div>
            <div className={styles.content}>
              <h4>Smart Contract Development</h4>
              <p>
                Create a smart contract and smart legal contract for everything
                may it be a business or personal, small or large, renting your
                bike or your house. The possibilities are endless.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
