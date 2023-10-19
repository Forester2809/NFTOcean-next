import Link from "next/link"

const BreadCrumbOne=(props)=>{
return(
<div className="breadcrumb_style__one bg-body-2 ">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-12 text-center">
            <h2 className="page__title">{props.pagename}</h2>
            <ul className="d-flex justify-content-center page__list">
                <li><Link href="/"><a>{props.prevPage}</a></Link></li>
                <li>{props.pagename}</li>
            </ul>
        </div>
    </div>
</div>
</div>
)
}
export default BreadCrumbOne