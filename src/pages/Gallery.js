import g1 from "../imgs/g1.jpg";
import g2 from "../imgs/g2.jpg";
import g3 from "../imgs/g3.jpg";
import g4 from "../imgs/g4.jpg";
import "./Gallery.css"

function Gallery(){
    return(
        <div>
            <h1 style={{textAlign: "center", color: "#3e7ddb"}}>Our Gallery</h1>
        <div className="gallery-container">
            <div className="container">
            <img className="pic" src={g1} alt="img not found" />
            <div className="text">Prize giving ceremony for SIH Internal Hackathon 2022</div>
            </div>
            <div className="container">
            <img className="pic" src={g2} alt="img not found" />
            <div className="text">Prize giving ceremony for SIH Internal Hackathon 2022</div>
            </div>
            <div className="container">
            <img className="pic" src={g3} alt="img not found" />
            <div className="text">Prize giving ceremony for SIH Internal Hackathon 2022</div>
            </div>
            <div className="container">
            <img className="pic" src={g4} alt="img not found" />
            <div className="text">Prize giving ceremony for SIH Internal Hackathon 2022</div>
            </div>
            <div className="container">
            <img className="pic" src={g2} alt="img not found" />
            <div className="text">Prize giving ceremony for SIH Internal Hackathon 2022</div>
            </div>
            <div className="container">
            <img className="pic" src={g3} alt="img not found" />
            <div className="text">Prize giving ceremony for SIH Internal Hackathon 2022</div>
            </div>
        </div>
        </div>
    )
}
export default Gallery;