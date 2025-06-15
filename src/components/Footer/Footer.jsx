import logo from "../../assets/portfolio-logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="logo" width={180} height={120} />
                    </div>
                    <div footer-main>
                        <nav className="footer-nav">
                            <a href="#">Home</a>
                            <a href="#about">About me</a>
                            <a href="#services">Services</a>
                            <a href="#work">portfolio</a>
                            <a href="#contact">Contact</a>
                        </nav>
                        <p className="footer-title">Let's connect and create something great!</p>
                        <div className="footer-contact">
                            Contact me at <a href="mailto:navaneethmenchu@gmail.com">navaneethmenchu@gmail.com</a> or connect on
                            <a href="https://www.linkedin.com/in/navaneeth-menchu-121037350/" target="_blank" rel="noopener noreferrer"> <FaLinkedin />
                                LinkedIn</a> &nbsp;|&nbsp;
                            <a href="https://github.com/Navaneethmenchu" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                        </div>

                        <button onClick={scrollToTop} className="back-to-top">↑ Back to Top</button>

                        <p className="footer-copy">© 2025 Navaneeth Menchu • Built with React, JavaScript & Node.js</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer