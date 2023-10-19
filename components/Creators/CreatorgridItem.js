import Link from "next/link"

const CreatorGridItem=(props)=>{
return(
<div className="col">
<div className="seller_card_style__two">
    <div className="seller__thumb">
        <div className="seller__cover">
            <img src={props.image} alt=""/>
        </div>
        <div className="seller__avater">
        <a>
            <img src={props.avatar} alt="" className="avater"/>
        </a>
        </div>
        
    </div>
    <div className="seller__disc">
    <h6 className="artist__name">
    <Link href="/author-profile">
    <a>{props.username}</a>
    </Link>
    </h6>
    <span className="total__value">{props.price}</span>
    <Link href="/author-profile">
    <button className="follow__btn">
        Follow
    </button>
    </Link>
    </div>
</div>
</div>
)
}
export default CreatorGridItem