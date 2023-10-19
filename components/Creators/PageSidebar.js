import CTpgSocielFilter from "./PageSIdebar/SocialFilter"
import CTpgTypeFilter from "./PageSIdebar/TypeFilter"

const CreatorPageSidebar=()=>{
return(
<div className="col-lg-3">
<form action="#">
    <div className="sidebar__searchbar">
        <input type="text" placeholder="Search here"/>
        <button type="submit" className="submit__btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.35992 13.7206C10.8724 13.7206 13.7198 10.873 13.7198 7.36029C13.7198 3.8476 10.8724 1 7.35992 1C3.84743 1 1 3.8476 1 7.36029C1 10.873 3.84743 13.7206 7.35992 13.7206Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.9997 15L11.8516 11.8522" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </div>
</form>

    <CTpgTypeFilter/>
    
    <CTpgSocielFilter/>
    

</div>
)
}
export default CreatorPageSidebar