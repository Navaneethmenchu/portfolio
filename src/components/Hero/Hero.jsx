import "./Hero.css"
import profile from "../../assets/profile.PNG"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <img src={profile} alt="profile-image" height={200} width={200} />
        <h1>
          I'm <span>Navaneeth Menchu,</span> <br />A Full Stack Developer based in USA.
        </h1>
        <p>
          I'm a passionate full stack developer based in Georgia, USA with 3+ years of experience building robust web applications and intuitive user experiences.
        </p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    </>
  )
}

export default Hero