import Link from "next/link"

const HomeCollectionSlide=(props)=>{
return(
<div className="collection_card_style__one">
<div className="collection__thumbs">
    <div className="collection_thumb__xl">
        <Link href="/collection">
        <a> 
        <img src={props.coverImg}
                alt=""/>
        </a>
        </Link>
    </div>
    <div className="coll_thumbs__bottom">
        <div className="coll_sm__thumb">
            <Link href="/collection">
            <a> 
            <img src={props.thumbOne}
                    alt=""/>
            </a>
            </Link>
        </div>
        <div className="coll__avater">
            <Link href="/author-profile">
            <a> 
            <img src={props.avatar} alt=""/>
            </a>
            </Link>
            <div className="tick__icon">
                <img src="/images/icons/tick-stylish.svg" alt=""/>
            </div>
        </div>
        <div className="coll_sm__thumb">
            <Link href="/collection">
            <a>
                <img src={props.thumbTwo}
                    alt=""/>
            </a>
            </Link>
        </div>
    </div>
</div>
<div className="collection__disc">
    <h5><a>Modern Art Collection</a></h5>
    <span>235 in Collection</span>
</div>
</div>
)
}

export default HomeCollectionSlide