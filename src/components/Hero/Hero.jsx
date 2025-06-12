import "./Hero.css"
import profile from "../../assets/profile.PNG"

const Hero = () => {
  return (
    <>
    <div className="hero">
        <img src={profile} alt="profile-image" height={200} width={200}/>
        <h1>
            I'm <span>Navaneeth Menchu,</span> <br />A Full Stack Developer based in USA.
        </h1>
        <p>
            I'm a passionate full stack developer based in Georgia, USA with 3+ years of experience building robust web applications and intuitive user experiences.
        </p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
    </>
  )
}

export default Hero