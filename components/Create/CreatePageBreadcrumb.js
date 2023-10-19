import Link from "next/link"

const CreatePageBreadcrumb=(props)=>{
return(
<div className="breadcrumb_style__two bg-body-2">
<div className="container">
    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
        <a className="back__btn">
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 6.5H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 11.5L1 6.5L6 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to home</span>
        </a>

        <ul className="d-flex page__list">
            <li><Link href="/"><a>Home</a></Link></li>
            <li>{props.title}</li>
        </ul>
    </div>
</div>
</div>
)
}
export default CreatePageBreadcrumb