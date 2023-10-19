import SidebarBlogList from "./Sidebar/BlogList"
import Link from "next/link"

const BlogSidebar=()=>{
return(
<>
<aside className="blog__sidebar">
    <div className="single__widget pt-0">
        <div className="widget__search position-relative">
            <input type="text" id="sidebar__search" 
            placeholder="Search here"/>
            <label htmlFor="sidebar__search">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.35992 13.7206C10.8724 13.7206 13.7198 10.873 13.7198 7.36029C13.7198 3.8476 10.8724 1 7.35992 1C3.84743 1 1 3.8476 1 7.36029C1 10.873 3.84743 13.7206 7.35992 13.7206Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.9997 15L11.8516 11.8522" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
            </label>
        </div>
    </div>

    <div className="single__widget pt-40">
        <h5 className="widget__title">Popular Posts</h5>
        <ul className="widget__body popular__post">

            <SidebarBlogList
             image="/images/blog/bs-one.png"
             title="Hack sponsorship NFT Ocean protocol Prerelease"
             published_at="March 8, 2022"
            />

            <SidebarBlogList
             image="/images/blog/bs-two.png"
             title="Yatreda on the power Storytelling owning history."
             published_at="March 7, 2022"
            />

            <SidebarBlogList
             image="/images/blog/bs-three.png"
             title="The Breakthrough Genres of Foundation in 2021"
             published_at="March 6, 2022"
            />
           
            
        </ul>
    </div>

    <div className="single__widget pt-40">
        <h5 className="widget__title">Categories</h5>
        <ul className="widget__body categories">
            <li>
                <Link href="/blog">
                  <a><p>Arts</p> <span>1</span></a>
                </Link>
            </li>
            <li>
                <Link href="/blog">
                  <a><p>Photography</p> <span>3</span></a>
                </Link>
            </li>
            <li>
                <Link href="/blog">
                  <a><p>Sports</p> <span>8</span></a>
                </Link>
            </li>
            <li>
                <Link href="/blog">
                  <a><p>Technology</p> <span>5</span></a>
                </Link>  
            </li>
            <li>
                <Link href="/blog">
                  <a><p>Domains</p> <span>4</span></a>
                </Link>
            </li>
            <li>
                <Link href="/blog"> 
                  <a><p>Marketing</p> <span>2</span></a>
                </Link>
            </li>
        </ul>
    </div>

    <div className="single__widget pt-40">
        <h5 className="widget__title">Popular Tags</h5>
        <ul className="widget__body popular__tags">
            <li>
                <Link href="/blog"><a>NFT</a></Link>
            </li>
            <li>
                <Link href="/blog"><a>Creative</a></Link>
            </li>
            <li>
                <Link href="/blog"><a>Agency</a></Link>
            </li>
            <li>
                <Link href="/blog"><a>Marketplace</a></Link>
            </li>
            <li>
                <Link href="/blog"><a>Software</a></Link>
            </li>
            <li>
                <Link href="/blog"><a>Art</a></Link>
            </li>
        </ul>
    </div>

    <div className="single__widget pt-40">
        <h5 className="widget__title">Social Profiles</h5>
        <ul className="widget__body social__profiles">
            <li>
                <Link href="/blog">
                <a>
                    <img src="/images/icons/fb-round.svg" alt=""/>
                <span>SHARE</span>
                </a>
                </Link>
            </li>
            <li>
                <Link href="/blog">
                <a>
                    <img src="/images/icons/twitter-round.svg" alt=""/>
                    <span>SHARE</span>
                </a>
                </Link>
            </li>
            <li>
                <Link href="/blog">
                <a>
                    <img src="/images/icons/insta-round.svg" alt=""/>
                        <span>SHARE</span>
                </a>
                </Link>
            </li>
        </ul>
    </div>
</aside>
</>
)
}
export default BlogSidebar