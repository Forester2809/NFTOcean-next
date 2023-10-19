import Link from "next/link"

const BlogBreadcrumb=()=>{
return(
<div className="breadcrumb_style__three bg-body-2">
<div className="container">
    <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="page__title">Classic Blog</h2>

            <ul className="d-flex page__list justify-content-center">
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>Pages</li>
                <li>Create item</li>
            </ul>
        </div>
    </div>
</div>
</div>
)
}
export default BlogBreadcrumb