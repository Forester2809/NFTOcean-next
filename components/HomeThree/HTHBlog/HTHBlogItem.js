import Link from "next/link"

const HTHBlogItem=(props)=>{
return(
<div className="blog_card_style__one">
    <div className="blog__body">
        <div className="blog_thumb">
            <Link href="/blog"><img src={props.image} alt=""/></Link>
        </div>
        <div className="blog_disc">
            <ul className="blog_meta">
                <li className="blog__tag"> <Link href="/"><a>{props.category}</a></Link> </li>
                <li className="blog__writer"><Link href="/"><a>{props.author}</a></Link></li>
                <li className="blog__date">{props.published_at}</li>
            </ul>
            <h5 className="blog__title">
                <Link href="/blog">
                <a>
                    {props.title}
                </a>
                </Link>
            </h5>
        </div>
    </div>
    <Link href="/blog-details">
    <a className="blog__btn">
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 12.9658L5.59317 8.37172C6.13561 7.82916 6.13561 6.94135 5.59317 6.39879L1 1.80469"
                stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    </a>
    </Link>
</div>
)
}
export default HTHBlogItem