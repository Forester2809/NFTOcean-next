import Link from "next/link"

const CollectionGridItem=(props)=>{
return(
<div className="col pt-3 pt-lg-0">
<div className="collection_card_style__three">
    <Link href="/nft-detail">
    <div className="thumb__group" style={{cursor:"pointer"}}>
        <div className="coll coll-one">
            <img src={props.coverImage} alt=""/>
        </div>
        <div className="coll coll-two">
            <img src={props.img1} alt=""/>
            <img src={props.img2} alt=""/>
        </div>
    </div>
    </Link>
    <div className="coll__disc">
        <div className="coll__title">
            <h5><Link href="/nft-detail"><a>{props.title}</a></Link></h5>
            <button className="like__btn"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6985 1.99765L6.99742 2.1692L7.2962 1.99743C7.50862 1.8753 7.71506 1.74828 7.92068 1.62177C8.31313 1.38029 8.70258 1.14066 9.12479 0.940522C9.75536 0.641607 10.2727 0.531212 10.6931 0.653546C13.0724 1.35159 13.8419 3.69977 13.1616 5.63257L13.1605 5.63569C12.6276 7.17674 11.1864 8.58658 9.76123 9.65606C8.42345 10.66 7.1915 11.297 6.99824 11.3948C6.80115 11.2956 5.58162 10.6685 4.25227 9.67217C2.8336 8.60887 1.38875 7.19728 0.835985 5.63289C0.154691 3.69818 0.922552 1.34972 3.29816 0.653425L3.29875 0.653253C3.73433 0.525103 4.24488 0.633423 4.86272 0.928388C5.27058 1.1231 5.64246 1.35367 6.02504 1.59088C6.24316 1.72612 6.46476 1.86351 6.6985 1.99765Z" stroke="currentColor" strokeWidth="1.2"/>
                </svg> <span>{props.total_heart}</span></button>
        </div>

        <div className="coll__bottom">
            <div className="author">
                <div className="avater">
                    <img src={props.pic} alt=""/>
                </div>
                <Link href="/author-profile"><a>{props.author}</a></Link>
            </div>
            <p><span>{props.in_collection}</span> in Collection</p>
        </div>
    </div>
</div>
</div>
)
}
export default CollectionGridItem