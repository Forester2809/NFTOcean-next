import { useState } from "react"
import HTHExploerItem from "./HTHExplore/HTHExploreItem"
import Link from "next/link"
import DropdownSelect from "../../components/Global/DropdownSelect"

const HTHExploer=()=>{
const [Tab,setTab] = useState('All')

// change tab
function ChangeTab(tab){
    try{
    let tabs = document.querySelectorAll('.tab_panel_HTH')
    tabs.forEach(tb=>{
        tb.classList.remove("active")
        tb.classList.remove("show")
    })
    let cu_tab = document.getElementById(tab)
    cu_tab.classList.add("active")
    setTimeout(()=>{
        cu_tab.classList.add("show")
    },100)
    setTab(tab)
    }catch(err){}
}

return(
<div className="nft_grid_style__three bg-body section_gap_y_bottom__1">
<div className="container">
<div className="row gy-4 align-items-end">
    <div className="col-xl-2 col-lg-3 d-flex justify-content-between ">
        <div className="nft_grid__title">
            <span className="sub-header-2">Exclusive Assets</span>
            <h2 className="section_title__2">Explore NFTs</h2>
        </div>
    </div>

    <div className="col-xl-10 col-lg-9 d-flex justify-content-between flex-wrap gap-3">
        <div className="select_style__one varient-4">
            <DropdownSelect
             options={[
                "Following",
                "Followrs",
                "New Added",
                "All",
                "Oldest"
             ]}
             selected_design="selector_three"
            />
        </div>

        <ul className="nft_nav_pills__two nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button 
                onClick={e=>ChangeTab('All')}
                className={`nav-link ${Tab==='All'?'active':''}`} id="nft_pill_1" data-bs-toggle="pill" data-bs-target="#nft_tab_1"
                    type="button" role="tab" aria-controls="nft_tab_1" aria-selected="true">
                    <span>All</span>
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button 
                onClick={e=>ChangeTab('Art')}
                className={`nav-link ${Tab==='Art'?'active':''}`} id="nft_pill_2" data-bs-toggle="pill" data-bs-target="#nft_tab_2"
                    type="button" role="tab" aria-controls="nft_tab_2" aria-selected="true">
                    <span>Art</span>
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button  
                onClick={e=>ChangeTab('Photography')}
                className={`nav-link ${Tab==='Photography'?'active':''}`} id="nft_pill_3" data-bs-toggle="pill" data-bs-target="#nft_tab_3"
                    type="button" role="tab" aria-controls="nft_tab_3" aria-selected="true">
                    <span>Photography</span>
                </button>
            </li>
            <li 
            onClick={e=>ChangeTab('Games')}
            className="nav-item" role="presentation">
                <button  className={`nav-link ${Tab==='Games'?'active':''}`} id="nft_pill_4" data-bs-toggle="pill" data-bs-target="#nft_tab_4"
                    type="button" role="tab" aria-controls="nft_tab_4" aria-selected="true">
                    <span>Games</span>
                </button>
            </li>
            <li 
            onClick={e=>ChangeTab('Collectibles')}
            className="nav-item" role="presentation">
                <button  className={`nav-link ${Tab==='Collectibles'?'active':''}`} id="nft_pill_5" data-bs-toggle="pill" data-bs-target="#nft_tab_5"
                    type="button" role="tab" aria-controls="nft_tab_5" aria-selected="true">
                    <span>Collectibles</span>
                </button>
            </li>
            <li 
            onClick={e=>ChangeTab('Trading')}
            className="nav-item" role="presentation">
                <button  className={`nav-link ${Tab==='Trading'?'active':''}`} id="nft_pill_6" data-bs-toggle="pill" data-bs-target="#nft_tab_6"
                    type="button" role="tab" aria-controls="nft_tab_6" aria-selected="true">
                    <span>Trading Cards</span>
                </button>
            </li>
            

        </ul>
    </div>
</div>
<div className="tab-content pt-50" id="pills-tabContent">
    <div className="tab-pane tab_panel_HTH fade show active" id="All" role="tabpanel" aria-labelledby="nft_pill_1">
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-4">

          <HTHExploerItem 
           image="/images/nft/ns-one.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

          <HTHExploerItem 
           image="/images/nft/ns-two.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

         <HTHExploerItem 
           image="/images/nft/ns-three.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

         <HTHExploerItem 
           image="/images/nft/ns-four.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

         <HTHExploerItem 
           image="/images/nft/ns-five.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

         <HTHExploerItem 
           image="/images/nft/ns-six.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

        <HTHExploerItem 
           image="/images/nft/ns-seven.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

         <HTHExploerItem 
           image="/images/nft/ns-eight.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />
          
            
        </div>
    </div>
    <div className="tab-pane tab_panel_HTH fade" id="Art">
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-4">
           
         <HTHExploerItem 
           image="/images/nft/ns-two.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

        <HTHExploerItem 
           image="/images/nft/ns-four.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

        <HTHExploerItem 
           image="/images/nft/ns-five.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

        <HTHExploerItem 
           image="/images/nft/ns-eight.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

        </div>
    </div>
    <div className="tab-pane tab_panel_HTH fade" id="Photography">
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-4">
            
        <HTHExploerItem 
           image="/images/nft/ns-six.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

        <HTHExploerItem 
           image="/images/nft/ns-three.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />
            
        </div>
    </div>
    <div className="tab-pane tab_panel_HTH fade" id="Games">
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-4">

          <HTHExploerItem 
           image="/images/nft/ns-one.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

        <HTHExploerItem 
           image="/images/nft/ns-three.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

          <HTHExploerItem 
           image="/images/nft/ns-four.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

        <HTHExploerItem 
           image="/images/nft/ns-five.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />  
           
        </div>
    </div>

    <div className="tab-pane tab_panel_HTH fade" id="Collectibles">
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-4">
            
        <HTHExploerItem 
           image="/images/nft/ns-six.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

        <HTHExploerItem 
           image="/images/nft/ns-two.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />  

        <HTHExploerItem 
           image="/images/nft/ns-eight.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />

        </div>
    </div>

    <div className="tab-pane tab_panel_HTH fade" id="Trading">
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-4">
        
        <HTHExploerItem 
           image="/images/nft/ns-five.png"
           avatars={[
               "/images/nft/ag-one.png",
               "/images/nft/ag-two.png",
               "/images/nft/ag-three.png"
           ]}
           title="Robot Generation"
           ETH={0.01}
           End={100000000}
          />
            
        </div>
    </div>
</div>
</div>
</div>
)
}
export default HTHExploer