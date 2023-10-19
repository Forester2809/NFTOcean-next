import Link from "next/link"

const SidebarBlogList=(props)=>{
return(
<li className="single_blog__sm">
    <div className="blog__thumb" style={{cursor:"pointer"}}>
        <Link href="/nft-detail"><img src={props.image} alt=""/></Link>
    </div>
    <div className="blog__disc">
        <h6 className="blog__title">
            <Link href="/nft-detail"><a>{props.title}</a></Link>
        </h6>
        <span> <i className="bi bi-clock"></i> {props.published_at}</span>
    </div>
</li>
)
}
export default SidebarBlogList