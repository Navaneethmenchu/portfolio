import "./About.css"
import profile from "../../assets/profile.PNG";
import theme from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <>
    <div className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme} alt="theme" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="profile image" width={400} height={400}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>
                        I'm a full stack developer based in Georgia, USA, with 3+ years of experience building fast, responsive web applications. I work across the stack using tools like React, Node.js, and Express to create clean, scalable solutions.
                    </p>
                    <p>
                        I enjoy solving real-world problems through code and staying current with the latest web technologies. Whether solo or in a team, I focus on writing quality code and delivering smooth, user-friendly experiences.
                    </p>
                </div>
                <ul className="about-skills">
                    <li className="about-skill">HTML5 & CSS3</li>
                    <li className="about-skill">JavaScript</li>
                    <li className="about-skill">Python</li>
                    <li className="about-skill">React.js</li>
                    <li className="about-skill">Node.js</li>
                    <li className="about-skill">Express.js</li>
                    <li className="about-skill">MongoDB</li>
                    <li className="about-skill">Git & GitHub</li>
                    <li className="about-skill">RESTful API </li>
                    <li className="about-skill">TypeScript</li>
                    <li className="about-skill">Tailwind CSS</li>
                </ul>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="about-achivement">
                <h1>25+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <div className="about-achivement">
                <h1>7+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About