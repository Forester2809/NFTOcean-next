
const BlogwithText=(props)=>{
return(
<div className="classic_blog__outer mt-4">
    <div className="blog_classic__style">
        <div className="blog_classic__disc">
            <h3 className="blog__title">
                <a>{props.title}</a></h3>
            <ul className="blog__meta">
                <li className="blog__writer">
                    <img src="/images/blog/blog-avater-sm.png" alt="" 
                    className="blog__avater"/>
                    <span>{props.author}</span>
                </li>
                <li>{props.published_at}</li>
                <li className="reading__time"><ins>{props.read_minute}</ins> <span>Min Read</span> </li>
            </ul>
            <p className="intro__text">
                {props.short_desc}
            </p>
            <a className="spotlight">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3566 7.97952L7.01826 13.6412C7.13189 13.7549 7.26681 13.8452 7.41533 13.9067C7.56385 13.9683 7.72305 14 7.88382 14C8.0446 14 8.2038 13.9683 8.35231 13.9067C8.50083 13.8452 8.63576 13.7549 8.74938 13.6412L14.0039 8.39279L13.366 1.63788L6.61112 1L1.3566 6.25452C1.12874 6.48374 1.00084 6.79382 1.00084 7.11702C1.00084 7.44023 1.12874 7.7503 1.3566 7.97952Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.67188 5.33521H9.66579" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                <span>Artist Spotlight</span>
            </a>
        </div>
    </div>
</div>
)
}
export default BlogwithText