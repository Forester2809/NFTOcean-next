import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import BlogBreadcrumb from "../components/Blog/Breadcrumb"
import AllBlogs from "../components/Blog/AllBlogs"
import FooterOne from "../components/Layout/Footers/FooterOne"

const Blog=()=>{
return(
<>
<HeaderTwo/>
<BlogBreadcrumb/>
<AllBlogs/>
<FooterOne white={true} />
</>
)
}
export default Blog