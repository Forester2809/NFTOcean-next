import Link from "next/link"

const AboutCrewItem=(props)=>{
return(
<div className="col">
    <div className="crew_card_style__one">
        <div className="crew__image">
            <img src={props.image} alt=""/>
        </div>
        <div className="crew__disc">
            <h5 className="crew__title"><a>{props.username}</a></h5>
            <span>{props.position}</span>
            <ul className="crew__social">
                <li><Link href={`props.twitter`}><a><i className="bi bi-twitter"></i></a></Link></li>
                <li><Link href={`props.instagram`}><a><i className="bi bi-instagram"></i></a></Link></li>
                <li><Link href={`props.discord`}><a><i className="bi bi-discord"></i></a></Link></li>
            </ul>
        </div>
    </div>
</div>
)
}
export default AboutCrewItem