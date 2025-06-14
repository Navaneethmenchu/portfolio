import theme from "../../assets/theme_pattern.svg"
import { IoIosMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="Contact-title">
                    <h2>Get in touch</h2>
                    <img src={theme} alt="theme pattern" />
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h2>Let's talk</h2>
                        <p className="contact-p">I am actively seeking full-time opportunities in full stack web development. Please feel free to reach out to discuss how my skills can contribute to your team's success.</p>
                        <div className="contact-details">
                            <p><IoIosMail /> navaneethmenchu@gmail.com</p>
                            <p><IoMdCall /> +1 856-520-0830</p>
                            <p><MdLocationPin /> GA, USA</p>
                        </div>
                    </div>
                    <form className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder="Enter your name" name="name" required />
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder="Enter your email" name="name" required />
                        <label htmlFor="">Your Message</label>
                        <textarea name="message" placeholder="Enter your message" rows="8" required></textarea>
                        <button className="contact-submit">submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contact