import Link from "next/link"

const SellerSlide=(props)=>{
return(
<div className="swiper-slide">
<div className="seller_card-outer">
    <div className="seller_card_style__one">
        <div className="seller__thumb">
            <Link href="/author-profile">
            <a>
                <img src={props.avatar} alt=""/>
            </a>
            </Link>
        </div>
        <div className="seller__info">
            <h6 className="seller__name"><Link href="/author-profile">
                <a>{props.username}</a></Link></h6>
            <p>{props.price}</p>

            <Link href="/author-profile"><a className="seller__follow">Follow</a></Link>
        </div>
    </div>
</div>
</div>
)
}

export default SellerSlide