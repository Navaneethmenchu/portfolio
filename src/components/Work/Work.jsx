import theme from "../../assets/theme_pattern.svg"
import work1 from "../../assets/work1.png"
import work2 from "../../assets/work2.png"
import work3 from "../../assets/work3.png"
import work4 from "../../assets/work4.png"
import work5 from "../../assets/work5.png"
import work6 from "../../assets/work6.png"
import { FaArrowRightLong } from "react-icons/fa6";
import "./Work.css"

const Work = () => {
    return (
        <>
            <div id="work" className="work">
                <div className="work-title">
                    <h2>My latest work</h2>
                    <img src={theme} alt="theme" className="work-image" />
                </div>
                <div className="work-container">
                    <div className="image-wrapper"><img src={work1} alt="work image" /></div>
                    <div className="image-wrapper"><img src={work2} alt="work image" /></div>
                    <div className="image-wrapper"><img src={work3} alt="work image" /></div>
                    <div className="image-wrapper"><img src={work4} alt="work image" /></div>
                    <div className="image-wrapper"><img src={work5} alt="work image" /></div>
                    <div className="image-wrapper"><img src={work5} alt="work image" /></div>
                </div>
                <div className="work-showmore">
                    <p>Show More</p> <FaArrowRightLong />
                </div>
            </div>
        </>
    )
}

export default Work