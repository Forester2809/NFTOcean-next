import Link from "next/link"

const HTHArtistItem=(props)=>{
return(
<div className="swiper-slide">
    <div className="artist_card_style__one">
        <div className="artist__thumb">
            <div className="artist__cover">
                <img src={props.image} alt=""/>
            </div>
            <div className="artist__avater">
                <img src={props.avatar} alt=""/>
            </div>
        </div>
        <div className="artist__disc">
            <h6 className="artist__name">
               <Link href="/"><a>{props.username}</a></Link>
             </h6>
            <button className="btn-follow">
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.5 8.5V1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>Follow</button>
        </div>
    </div>
</div>
)
}
export default HTHArtistItem