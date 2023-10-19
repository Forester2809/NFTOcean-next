import Link from "next/link"

const SlideItem=(props)=>{
return(
<div className="swiper-slide single_hero__slide">
    <div className="hero_slide__img">
        <img src={props.image} alt=""/>
    </div>
    <div className="hero_slide__overlay">
        <h3><Link href="/nft-detail"><a>{props.name}</a></Link></h3>
        <p>{props.title}</p>
    </div>
</div>
)
}
export default SlideItem