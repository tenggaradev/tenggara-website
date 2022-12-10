// style
import styles from "../styles/Contact.module.scss"

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            placeat suscipit earum autem ea nisi accusantium recusandae
            excepturi similique soluta.
          </p>
        </div>
        <form className={styles.message}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
