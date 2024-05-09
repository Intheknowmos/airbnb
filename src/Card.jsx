import img1 from "./assets/img1.jpg"
import redstar from "./assets/redstar.png"

export default function Card (props) {
    
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <div className="card">
            {badgeText && <span>{badgeText}</span>}
            <img src={props.coverImg} alt="profile image" className="profile-img" />
            <div className="profile-subtitle">
                <img src={redstar} alt="red star" className="star" />
                <p>{props.stats.rating}</p>   
                <p className="gray">({props.stats.reviewCount}) • </p>   
                <p className="gray">{props.location}</p>  
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><strong>From {props.price}</strong>/ person</p>
        </div>
    )
}