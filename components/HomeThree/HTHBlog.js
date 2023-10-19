import HTHBlogItem from "./HTHBlog/HTHBlogItem"

const HTHBlog=()=>{
return(
<div className="blog_style__one bg-body section_gap_y_bottom__1">
<div className="container">
<div className="row gy-4 align-items-end">
    <div className="col-md-7">
        <span className="sub-header-2">Most Popular</span>
        <h2 className="section_title__2">Popular Collections</h2>
    </div>
    <div className="col-md-5 text-md-end">
        <a className="btn-rounded-v3">View all post</a>
    </div>
</div>

<div className="row pt-50">
    <div className="col-lg-12">
        
    <HTHBlogItem
      image="/images/blog/b-one.png"
      category="COLUMNS"
      author="By Jolene Creighton"
      published_at="Jun 14 2022"
      title="Lucien Smith Aims to Cultivate Emerging Artists Through New SEEDS NFT Project"
    />

    <HTHBlogItem
      image="/images/blog/b-two.png"
      category="COLUMNS"
      author="By Jolene Creighton"
      published_at="Jun 14 2022"
      title="“Clock” NFT Sells for $52.7M to Help Fund Julian Assange’s Legal Defense"
    />

    <HTHBlogItem
      image="/images/blog/b-three.png"
      category="COLUMNS"
      author="By Jolene Creighton"
      published_at="Jun 14 2022"
      title="Behind The Drop: The Making of Joshua Davis’ The VO1D"
    />

    </div>
</div>
</div>
</div>
)
}
export default HTHBlog