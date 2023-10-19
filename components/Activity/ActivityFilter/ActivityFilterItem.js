import Link from "next/link"

const ActivityFilterItem=(props)=>{
return(
<div className="activity_card__style my-3">
    <div className="activity__left">
        <div className="activity__avater">
            <img src={props.image} alt=""/>
        </div>
    <div className="activity_card__disc">
        <h5 className="nft__title"><Link href="/"><a>{props.title}</a></Link></h5>
        <p>{props.action} <span>{props.username}</span></p>

        <span>{props.time}</span>
    </div>
    </div>

    <div className="activity_status">
        <img src={props.icon} alt=""/>
    </div>
</div>
)
}
export default ActivityFilterItem