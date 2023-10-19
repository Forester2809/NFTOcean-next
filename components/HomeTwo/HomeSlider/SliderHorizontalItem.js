import Link from "next/link"

const SliderHorizontalItem=(props)=>{
return(
<div className="swiper-slide">
<div className="hero_featured__slide">
    <div className="featured_slide__bg">
        <img src={props.image} alt=""/>
    </div>
    <div className="featured_slide__content">
        <Link href="/nft-detail">
        <a className="author">
            <img src="/images/icons/tick-yellow.svg" alt=""/> 
            By {props.by}
        </a>
        </Link>
        <h1>
           <Link href="/nft-detail"> 
            <a>
                {props.title}
            </a>
            </Link>
        </h1>
        <div className="featured_slide__bottom">
            <Link href="/">
            <a className="btn-pill-v1">
                <img src="/images/icons/bid-regular.svg" alt=""/> 
                <span>Place a bid</span>
            </a>
            </Link>
            <div className="feat_nft__price">
                <span>HEIGHT</span>
                <ins>
                <img src="/images/icons/custom-flash-yellow.svg" alt=""/> {props.price} ETH</ins>
            </div>
        </div>
    </div>
</div>
</div>
)
}
export default SliderHorizontalItem