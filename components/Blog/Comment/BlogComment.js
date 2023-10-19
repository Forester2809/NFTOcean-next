
const BlogComment=(props)=>{
return(
<li className="single__com">
    <div className="commentor">
        <img src={props.avatar} alt=""/>
    </div>
    <div className="comment__body">
        <h5>{props.author} <span>. {props.created_at}</span></h5>
        <p>{props.text}</p>
        <button className="reply__btn">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 6L1 3.5L3.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9V5.5C9 4.96957 8.78929 4.46086 8.41421 4.08579C8.03914 3.71071 7.53043 3.5 7 3.5H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Reply</span>
        </button>
    </div>
</li>
)
}
export default BlogComment