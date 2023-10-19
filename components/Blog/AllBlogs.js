import BlogwithImage from "./Blogs/BlogwithImage"
import BlogwithText from "./Blogs/BlogwithText"
import BlogItemTwo from "./Blogs/BlogwithVideo"
import BlogSidebar from "./BlogSidebar"

const AllBlogs=()=>{
return(
<>
<div className="blog_classic_grid__style section_gap_y_bottom__1 section_gap_y_top__1 bg-body-2 overflow-hidden">
<div className="container">
<div className="row gx-6 gy-4">
<div className="col-lg-8">

<BlogwithImage
 coverImage="/images/blog/blog-one.png"
 title="NFT Hack sponsorship NFTOcean protocol prerelease"
 avatar="/images/blog/blog-avater-sm.png"
 author="Ephimera"
 published_at="October 4, 2022"
 read_minute="4"
 short_desc="“The Stranger” by Damon Davis tells the 
 story of a wanderer seeking his castle and queen.Damon Davis is a 
 post-disciplinary artist exploring identity"
/>

<BlogItemTwo
 thumbnail="/images/blog/blog-two.png"
 title="NFT Hack sponsorship NFTOcean protocol prerelease"
 avatar="/images/blog/blog-avater-sm.png"
 author="Ephimera"
 published_at="October 4, 2022"
 read_minute="4"
 short_desc="“The Stranger” by Damon Davis tells the 
 story of a wanderer seeking his castle and queen.Damon Davis is a 
 post-disciplinary artist exploring identity"
/>
<BlogwithText
  coverImage="/images/blog/blog-three.png"
  title="NFT Hack sponsorship NFTOcean protocol prerelease"
  avatar="/images/blog/blog-avater-sm.png"
  author="Ephimera"
  published_at="October 4, 2022"
  read_minute="4"
  short_desc="“The Stranger” by Damon Davis tells the 
  story of a wanderer seeking his castle and queen.Damon Davis is a 
  post-disciplinary artist exploring identity"
/>

<BlogwithImage
 coverImage="/images/blog/blog-three.png"
 title="NFT Hack sponsorship NFTOcean protocol prerelease"
 avatar="/images/blog/blog-avater-sm.png"
 author="Ephimera"
 published_at="October 4, 2022"
 read_minute="4"
 short_desc="“The Stranger” by Damon Davis tells the 
 story of a wanderer seeking his castle and queen.Damon Davis is a 
 post-disciplinary artist exploring identity"
/>


<ul className="pagination_style__one pt-30">
    <li><a>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 7H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 13L1 7L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </a>
    </li>
    <li><a className="active__page">1</a></li>
    <li><a>2</a></li>
    <li><a>...</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li><a>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 13L13 7L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
    </a></li>
</ul>
</div>

<div className="col-lg-4">
 <BlogSidebar/>
</div>

</div>
</div>
</div>
</>
)
}
export default AllBlogs