import Link from "next/link"

const HTSellerItem=(props)=>{
return(
<div className="col-lg-12 col-md-6 col-sm-6">
    <div className="star_card_style__one">
        <span className="start__index">1</span>
        <div className="avater-thumb">
            <img src={props.avatar} alt="" className="avater"/>
            <img src="/images/icons/tick-yellow-x.svg" alt="" 
            className="tick-icon"/>
        </div>
        <div className="star-disc">
            <h5 className="star__name">
                <Link href="/"><a>{props.username} Pass</a></Link>
            </h5>
            <p className="total__spent">{props.price}</p>
        </div>
    </div>
</div>
)
}

export default HTSellerItem