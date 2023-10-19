import Link from "next/link"

const HTCollectionItem=(props)=>{
return(
<div className="col">
    <div className="seller_card_style__four">
        <span className="start__index">{props.index}</span>
        <div className="avater-thumb">
            <Link href="/nft-detail">
            <img src={props.image} alt="" className="avater"/>
            </Link>
        </div>
        <div className="star-disc">
            <h5 className="star__name"><Link href="/nft-detail"><a>{props.title}</a></Link></h5>
            <p className="total__spent">{props.price}</p>
        </div>
    </div>
</div>
)
}
export default HTCollectionItem