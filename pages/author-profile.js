import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import AupSidebar from "../components/AuthorProfile/AupSidebar"
import FooterOne from "../components/Layout/Footers/FooterOne"
import Link from "next/link"
import AupGridItem from "../components/AuthorProfile/AupGridItem"
import { useState } from "react"


const AuthorProfilePage=()=>{
const [Tab,setTab] = useState("tb_48")

// change tab
async function ChangeTab(tb){
  try{
    let all_tabs = document.querySelectorAll(".tb_grid_aut")
    all_tabs.forEach(ttb=>{
        ttb.classList.remove("active")
        ttb.classList.remove("show")
    })
    let cu_tab = document.getElementById(tb)
    cu_tab.classList.add("active")
    setTimeout(()=>{
      cu_tab.classList.add("show")
    },100)
    setTab(tb)
  }catch(err){
      console.log('error')
  }
}

return(
<>
<HeaderTwo/>
<div className="author_profiler__wrapper bg-body-2 section_gap_y_bottom__1">
<div className="author_profile__cover"></div>
<div className="container">

<div className="author_profiler__details">
<div className="ap__header d-flex align-items-center justify-content-between flex-wrap gap-3">
<div className="author_image">
    <img src="/images/nft/author__xxl.png" alt=""/>
</div>

<div className="ap_header__right">
    <div className="calloctors">
        <span>Collected by</span>
        <div className="avater__group">
            <img src="/images/nft/ag-one.png" alt=""/>
            <img src="/images/nft/ag-two.png" alt=""/>
            <img src="/images/nft/ag-three.png" alt=""/>
            <img src="/images/nft/ag-four.png" alt=""/>
        </div>
    </div>
    <button className="info__btn">
        <svg width="19" height="4" viewBox="0 0 19 4" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.4375 2.875C9.95527 2.875 10.375 2.45527 10.375 1.9375C10.375 1.41973 9.95527 1 9.4375 1C8.91973 1 8.5 1.41973 8.5 1.9375C8.5 2.45527 8.91973 2.875 9.4375 2.875Z"
                fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
            <path
                d="M16.4375 2.875C16.9553 2.875 17.375 2.45527 17.375 1.9375C17.375 1.41973 16.9553 1 16.4375 1C15.9197 1 15.5 1.41973 15.5 1.9375C15.5 2.45527 15.9197 2.875 16.4375 2.875Z"
                fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
            <path
                d="M2.4375 2.875C2.95527 2.875 3.375 2.45527 3.375 1.9375C3.375 1.41973 2.95527 1 2.4375 1C1.91973 1 1.5 1.41973 1.5 1.9375C1.5 2.45527 1.91973 2.875 2.4375 2.875Z"
                fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>

    </button>
</div>
</div>
</div>

<div className="row pt-40 gy-4">

<AupSidebar/>

<div className="col-lg-9">


<div className="nft_grid__header row mb-40">
    <div className="col-lg-12">
        <ul className="nav nav-pills pills-default" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className={`nav-link ${Tab==='tb_48'?'active':''}`} 
                onClick={e=>ChangeTab('tb_48')}>Creations 48</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className={`nav-link ${Tab==='tb_24'?'active':''}`} 
                onClick={e=>ChangeTab('tb_24')}>Collections 24</button>
            </li>

        </ul>
    </div>
</div>

<div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade tb_grid_aut show active" id="tb_48">
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
            
        <AupGridItem
         image="/images/nft/auction-one.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        /> 

        <AupGridItem
         image="/images/nft/auction-two.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        />  

        <AupGridItem
         image="/images/nft/auction-three.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        />  

        <AupGridItem
         image="/images/nft/auction-four.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        />   

        <AupGridItem
         image="/images/nft/auction-five.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        />  

        <AupGridItem
         image="/images/nft/auction-six.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        />  

        </div>
    </div>
    <div className="tab-pane fade tb_grid_aut" id="tb_24">
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
          
            
        <AupGridItem
         image="/images/nft/auction-eight.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        /> 

        <AupGridItem
         image="/images/nft/auction-nine.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        />  

        <AupGridItem
         image="/images/nft/auction-five.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        />  

        <AupGridItem
         image="/images/nft/auction-six.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        />   

        <AupGridItem
         image="/images/nft/auction-seven.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        />  

        <AupGridItem
         image="/images/nft/auction-two.png"
         username="Desmond Eagle"
         title="Abstract Painting"
         price="0.01 ETH"
        />  

        </div>
    </div>
</div>

<div className="more-load-wrap text-center mt-50">
    <a className="load-more-btn varient-2">
        <svg width="18" height="19" fill="none" viewBox="0 0 18 19"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.775 3.61794C11.0224 3.39694 10.192 3.25244 9.27502 3.25244C5.13143 3.25244 1.77502 6.55046 1.77502 10.622C1.77502 14.702 5.13143 18 9.27502 18C13.4186 18 16.775 14.702 16.775 10.6305C16.775 9.11747 16.3079 7.70646 15.512 6.53346"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12.848 3.82201L10.348 1" strokeWidth="1.8" strokeLinecap="round"
                strokeLinejoin="round"></path>
            <path d="M12.8478 3.82202L9.93256 5.91303" strokeWidth="1.8" strokeLinecap="round"
                strokeLinejoin="round"></path>
        </svg>
        View all items
    </a>
</div>
</div>
</div>
</div>
</div>

<FooterOne white={true}/>
</>
)
}
export default AuthorProfilePage