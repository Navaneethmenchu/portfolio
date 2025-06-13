import theme from "../../assets/theme_pattern.svg"
import "./Services.css"
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
    return (
        <>
            <div className="services">
                <div className="services-title">
                    <h1>Services</h1>
                    <img src={theme} alt="theme" />
                </div>
                <div className="services-container">
                    <div className="services-format">
                        <h2>Full Stack Web Development</h2>
                        <p>Design and build complete web applications using JavaScript-based technologies, including client-side interfaces and server-side APIs.</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className="services-format">
                        <h2>Frontend Development</h2>
                        <p>Develop responsive and dynamic user interfaces using modern frameworks like React or Next.js, with an emphasis on performance, accessibility, and user experience.</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className="services-format">
                        <h2>Backend Development</h2>
                        <p>Create robust and scalable RESTful APIs, handle server-side logic, and integrate databases to power application features.</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className="services-format">
                        <h2>Database Management</h2>
                        <p>Design and manage NoSQL or relational databases, ensuring data integrity and efficient queries for application needs.</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className="services-format">
                        <h2>Authentication & Authorization</h2>
                        <p> Implement secure user login systems with JWT, OAuth, or session-based authentication to protect user data and control access</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className="services-format">
                        <h2>API Integration & Development</h2>
                        <p> Build and integrate third-party APIs (e.g., payment gateways, email services, social logins) to extend app functionality.</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className="services-format">
                        <h2>Version Control</h2>
                        <p> Use Git for source control and GitHub for collaboration, managing codebase history and contributing to team workflows.</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className="services-format">
                        <h2>Deployment & DevOps</h2>
                        <p> Deploy and manage applications using platforms like Vercel, Netlify, Heroku, or AWS, and automate CI/CD pipelines for streamlined releases.</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services