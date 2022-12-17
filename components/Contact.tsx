import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
// style
import styles from "../styles/Contact.module.scss"
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
  const notify = () =>
    toast.info("Message Sent! \r\n we will reach you back shortly")
  const form: any = useRef()

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        `${process.env.EMAIL_JS_SERVICE_ID}`,
        `${process.env.EMAIL_JS_TEMPLATE_ID}`,
        form.current,
        `${process.env.EMAIL_JS_API_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text)
          e.target.reset()
          notify()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Contact Us</h2>
          <p>
          </p>
        </div>
        <form className={styles.message} ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        closeOnClick={false}
        hideProgressBar={true}
        theme="colored"
      />
    </section>
  )
}

export default Contact
