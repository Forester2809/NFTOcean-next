import { useState } from "react"
import ActivityFilterItem from "./ActivityFilter/ActivityFilterItem"

const ActivityTabFilter=()=>{
const [Tab,setTab] = useState('all')

// change tab

function ChangeTab(tab){
  try{
   let alltabs = document.querySelectorAll('#act_tab_content .act_tab')
   alltabs.forEach(list=>{
     list.classList.remove('show')
     list.classList.remove('active')
   })
   let cu_tab = document.querySelector(`#act_tab_content .${tab}`)
   cu_tab.classList.add('active')
   setTimeout(()=>{
    cu_tab.classList.add('show')
   },100)
   setTab(tab)
  }catch(err){}
}

return(
<div className="activity_grid_style bg-body-2 section_gap_y_bottom__1">
<div className="container">

<div className="row nft_grid__header px-0 align-content-center">
    <div className="col-lg-12">
    <ul className="nav nav-pills pills-default" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation" onClick={e=>ChangeTab('all')}>
            <button className={`nav-link ${Tab==='all'?'active':''} `} id="pills-tab-one" data-bs-toggle="pill" data-bs-target="#pills-one" type="button" role="tab" aria-controls="pills-one" aria-selected="true">All</button>
        </li>
        <li className="nav-item" role="presentation" onClick={e=>ChangeTab('art')}>
            <button className={`nav-link ${Tab==='art'?'active':''} `} id="pills-tab-two" data-bs-toggle="pill" data-bs-target="#pills-two" type="button" role="tab" aria-controls="pills-two" aria-selected="false">Art</button>
        </li>
        <li className="nav-item" role="presentation" onClick={e=>ChangeTab('virtual')}>
            <button className={`nav-link ${Tab==='virtual'?'active':''} `} id="pills-tab-three" data-bs-toggle="pill" data-bs-target="#pills-three" type="button" role="tab" aria-controls="pills-three" aria-selected="false">Virtual Words</button>
        </li>
        <li className="nav-item" role="presentation" onClick={e=>ChangeTab('tranding')}>
            <button className={`nav-link ${Tab==='tranding'?'active':''} `} id="pills-tab-four" data-bs-toggle="pill" data-bs-target="#pills-four" type="button" role="tab" aria-controls="pills-four" aria-selected="false">Trending Cards</button>
        </li>
    </ul>
    </div>
</div>

<div className="row pt-40 gy-4">
    <div className="col-lg-7 gx-lg-5">
        <div className="tab-content" id="act_tab_content">
            <div className="tab-pane fade act_tab all show active">
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="liked by"
                  username="@Pizza Game Chef"
                  image="/images/nft/nf-sm-one.png"
                  icon="/images/icons/status-heart-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="started following"
                  username="@Desmond Eagle"
                  image="/images/nft/nf-sm-two.png"
                  icon="/images/icons/status-tick-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="bid cancelled by"
                  username="@Weir"  
                  image="/images/nft/nf-sm-three.png"
                  icon="/images/icons/status-bid-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="1 edition purchased by"
                  username="Eric Widget"
                  image="/images/nft/nf-sm-four.png"
                  icon="/images/icons/status-cart-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="listed by"
                  username="@Norman Gordon"
                  image="/images/nft/nf-sm-five.png"
                  icon="/images/icons/status-pin-x.svg"
                  time="3 hours ago"
                />
            </div>
            <div className="tab-pane fade act_tab art">
               <ActivityFilterItem
                  title="Sound of Silence"
                  action="bid cancelled by"
                  username="@Weir"  
                  image="/images/nft/nf-sm-three.png"
                  icon="/images/icons/status-bid-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="1 edition purchased by"
                  username="Eric Widget"
                  image="/images/nft/nf-sm-four.png"
                  icon="/images/icons/status-cart-x.svg"
                  time="3 hours ago"
                />
            </div>
            <div className="tab-pane fade act_tab virtual">
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="1 edition purchased by"
                  username="Eric Widget"
                  image="/images/nft/nf-sm-four.png"
                  icon="/images/icons/status-cart-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="listed by"
                  username="@Norman Gordon"
                  image="/images/nft/nf-sm-five.png"
                  icon="/images/icons/status-pin-x.svg"
                  time="3 hours ago"
                /> 
            </div>
            <div className="tab-pane fade act_tab tranding">
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="started following"
                  username="@Desmond Eagle"
                  image="/images/nft/nf-sm-two.png"
                  icon="/images/icons/status-tick-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="bid cancelled by"
                  username="@Weir"  
                  image="/images/nft/nf-sm-three.png"
                  icon="/images/icons/status-bid-x.svg"
                  time="3 hours ago"
                />
            </div>
        </div>
    </div>
    <div className="col-lg-5">
        <div className="filter__wrap px-lg-4">
            <div className="d-flex align-items-center mb-3">
                <h5>Filter</h5>
                <button>Reset filter</button>
            </div>

            <ul className="custom_radio__group">

                <li className="single-radio">
                    <input type="radio" name="custom-check" id="status1" checked onChange={e=>{}}/>
                    <label htmlFor="status1">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.639 7.14369L7.14995 11.6328C7.03365 11.7492 6.89555 11.8415 6.74354 11.9046C6.59153 11.9676 6.42859 12 6.26403 12C6.09947 12 5.93653 11.9676 5.78452 11.9046C5.63251 11.8415 5.49441 11.7492 5.37811 11.6328L0 6.2609V0H6.2609L11.639 5.37811C11.8722 5.61272 12.0031 5.93009 12.0031 6.2609C12.0031 6.59171 11.8722 6.90908 11.639 7.14369Z" fill="currentColor"/>
                            </svg>
                        <span>Listings</span>
                    </label>
                </li>
                <li className="single-radio">
                    <input type="radio" name="custom-check" id="status2"/>
                    <label htmlFor="status2">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3427 2.14922H10.1027L8.07497 0.121484C7.91299 -0.0404948 7.64902 -0.0404948 7.48104 0.121484C7.31906 0.283464 7.31906 0.54743 7.48104 0.715408L8.91486 2.14922H3.0836L4.51742 0.715408C4.6794 0.553429 4.6794 0.289463 4.51742 0.121484C4.35544 -0.0404948 4.09148 -0.0404948 3.9235 0.121484L1.90176 2.14922H1.66179C1.12186 2.14922 0 2.14922 0 3.68503C0 4.26695 0.119985 4.6509 0.371952 4.90287C0.515934 5.05285 0.689912 5.13084 0.875888 5.17284C1.04987 5.21483 1.23584 5.22083 1.41582 5.22083H10.5826C10.7686 5.22083 10.9426 5.20883 11.1106 5.17284C11.6145 5.05285 11.9985 4.6929 11.9985 3.68503C11.9985 2.14922 10.8766 2.14922 10.3427 2.14922Z" fill="currentColor"/>
                            <path d="M10.23 6.00076H1.72309C1.35114 6.00076 1.06917 6.33072 1.12917 6.69667L1.6331 9.78028C1.80108 10.8121 2.25102 12 4.24877 12H7.61434C9.63608 12 9.99603 10.9861 10.212 9.85227L10.8179 6.71467C10.8899 6.34272 10.608 6.00076 10.23 6.00076ZM5.16665 9.87027C5.16665 10.1042 4.98067 10.2902 4.7527 10.2902C4.51873 10.2902 4.33276 10.1042 4.33276 9.87027V7.89052C4.33276 7.66255 4.51873 7.47057 4.7527 7.47057C4.98067 7.47057 5.16665 7.66255 5.16665 7.89052V9.87027ZM7.73432 9.87027C7.73432 10.1042 7.54834 10.2902 7.31437 10.2902C7.0864 10.2902 6.89443 10.1042 6.89443 9.87027V7.89052C6.89443 7.66255 7.0864 7.47057 7.31437 7.47057C7.54834 7.47057 7.73432 7.66255 7.73432 7.89052V9.87027Z" fill="currentColor"/>
                            </svg>
                            
                        <span>Sales</span>
                    </label>
                </li>
                <li className="single-radio">
                    <input type="radio" name="custom-check" id="status3"/>
                    <label htmlFor="status3">
                        <span>Bids</span>
                    </label>
                </li>
                <li className="single-radio">
                    <input type="radio" name="custom-check" id="status4"/>
                    <label htmlFor="status4">
                        <span>Likes</span>
                    </label>
                </li>
                <li className="single-radio">
                    <input type="radio" name="custom-check" id="status5"/>
                    <label htmlFor="status5">
                        <span>Followings</span>
                    </label>
                </li>

                
            </ul>
        </div>
    </div>
</div>
</div>
</div>
)
}
export default ActivityTabFilter