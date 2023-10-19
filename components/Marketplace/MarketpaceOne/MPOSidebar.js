import { useState , useRef } from "react"

const MPOSidebar=()=>{
const [StatusBar,setStatusBar] = useState(true)
const [PriceBar,setPriceBar] = useState(true)
const [CollectionBar,setCollectionBar] = useState(true)
const [CategoriesBar,setCategoriesBar] = useState(true)

const [StatusFilter,setStatusFilter] = useState(true)
const [PriceFilter,setPriceFilter] = useState(true)
const [CollectionFilter,setCollectionFilter] = useState(true)
const [CategoryFilter,setCategoryFilter] = useState(true)

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

<div className="accordion-item sidebar_status__filter sidebar__filter">
<h2 className="accordion-header sidebar__header" id="filterHeadingOne"
 onClick={e=>StatusFilter?setStatusFilter(false):setStatusFilter(true)}
>
    <button className={`accordion-button ${StatusFilter?'active':''}`} type="button">
    Status
    </button>
</h2>
<div
 className={`according_collapse ${StatusFilter?'show':''}`}
>
    <div className="accordion-body sidebar__body">
        <div className="single__status">
            <label  htmlFor="status1">
                <input  type="radio" name="statusBox" id="status1"/>
                <span></span>
                Buy Now
            </label>
        </div>
        
        <div className="single__status">
            <label  htmlFor="status2">
                <input  type="radio" name="statusBox" id="status2"/>
                <span></span>
                On Auction
            </label>
        </div>
        
        <div className="single__status">
            <label  htmlFor="status3">
                <input  type="radio" name="statusBox" id="status3"/>
                <span></span>
                New Item
            </label>
        </div>
        
        <div className="single__status">
            <label  htmlFor="status4">
                <input  type="radio" name="statusBox" id="status4"/>
                <span></span>
                Hes offers
            </label>
        </div>
        
    </div>
</div>
</div>
<div className="accordion-item sidebar_price__filter sidebar__filter ">
<h2 
onClick={e=>PriceFilter?setPriceFilter(false):setPriceFilter(true)}
className="accordion-header sidebar__header" id="filterHeadingTwo">
    <button className={`accordion-button ${PriceFilter?'active':''}`} type="button" data-bs-toggle="collapse" data-bs-target="#filter-collapseTwo" aria-expanded="true" aria-controls="filter-collapseTwo">
    Price
    </button>
</h2>
<div id="filter-collapseTwo" className={`according_collapse ${PriceFilter?'show':''}`}>
    <div className="accordion-body sidebar__body">
        <span className="currency"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.13867 11.1503C7.13867 12.0641 7.83992 12.8008 8.71117 12.8008H10.4891C11.247 12.8008 11.8633 12.1562 11.8633 11.3628C11.8633 10.4987 11.4878 10.1941 10.9283 9.99576L8.07367 9.0041C7.51409 8.80576 7.13867 8.50118 7.13867 7.63701C7.13867 6.84368 7.75492 6.1991 8.51284 6.1991H10.2908C11.162 6.1991 11.8633 6.93576 11.8633 7.84951" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.49707 5.25V13.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.5 18C14.1944 18 18 14.1944 18 9.5C18 4.80558 14.1944 1 9.5 1C4.80558 1 1 4.80558 1 9.5C1 14.1944 4.80558 18 9.5 18Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
                United States Dollar (USD)</span>

        <div className="price__range">
            <input type="number" value="50" min="50" step="5" onChange={e=>{}}/>
            <span>To</span>
            <input type="number" value="70" min="70" step="5" onChange={e=>{}}/>
        </div>

        <button className="filter__apply">Apply</button>
    </div>
</div>
</div>

<div className="accordion-item sidebar_collections__filter sidebar__filter ">
<h2 
onClick={e=>CollectionFilter?setCollectionFilter(false):setCollectionFilter(true)}
className="accordion-header sidebar__header" id="filterHeadingThree">
    <button className={`accordion-button ${CollectionFilter?'active':''}`} type="button" data-bs-toggle="collapse" data-bs-target="#filter-collapseThree" aria-expanded="true" aria-controls="filter-collapseThree">
    Collections
    </button>
</h2>
<div id="filter-collapseThree" className={`according_collapse ${CollectionFilter?'show':''}`}>
    <div className="accordion-body sidebar__body">
        <form action="#">
        <div className="innner_filter__search mb-3">
            <input type="text" placeholder="Search here"/>
            <button className="submit-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.35992 13.7206C10.8724 13.7206 13.7198 10.873 13.7198 7.36029C13.7198 3.8476 10.8724 1 7.35992 1C3.84743 1 1 3.8476 1 7.36029C1 10.873 3.84743 13.7206 7.35992 13.7206Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.9997 15L11.8516 11.8522" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
        </div>
        </form>
        <ul>
            <li className="single__col">
            <label>
                <span className="col__right">
                    <img src="/images/nft/avater-sm-one.png" alt="" className="col__thumb"/> 
                    <ins className="col__name">Tsuki Genesis 
                    <img src="/images/icons/tick-blue.svg" alt=""/></ins>
                </span>
                <input type="checkbox"/>
                <span className="check__circle"></span>
            </label>
            </li>
            <li className="single__col">
            <label>
                <span className="col__right">
                    <img src="/images/nft/avater-sm-two.png" alt="" className="col__thumb"/> 
                    <ins className="col__name">The Other Side </ins>
                </span>
                <input type="checkbox"/>
                <span className="check__circle"></span>
            </label>
            </li>
            <li className="single__col">
            <label>
                <span className="col__right">
                    <img src="/images/nft/avater-sm-three.png" alt="" className="col__thumb"/> 
                    <ins className="col__name">Pizza Game Chef 
                    <img src="/images/icons/tick-blue.svg" alt=""/></ins>
                </span>
                <input type="checkbox"/>
                <span className="check__circle"></span>
            </label>
            </li>
            <li className="single__col">
            <label>
                <span className="col__right">
                    <img src="/images/nft/avater-sm-two.png" alt="" className="col__thumb"/> 
                    <ins className="col__name">Ida_Chapman </ins>
                </span>
                <input type="checkbox"/>
                <span className="check__circle"></span>
            </label>
            </li>
        </ul>

        
    </div>
</div>
</div>

<div className="accordion-item sidebar_collections__filter sidebar__filter ">
<h2 
onClick={e=>CategoryFilter?setCategoryFilter(false):setCategoryFilter(true)}
className="accordion-header sidebar__header" id="filterHeadingFour">
    <button className={`accordion-button ${CategoryFilter?'active':''}`} type="button">
    Categories
    </button>
</h2>
<div id="filter-collapseFour" className={`according_collapse ${CategoryFilter?'show':''}`}>
    <div className="accordion-body sidebar__body">
        <ul>
            <li className="single__col">
            <label>
                <span className="col__right">
                        <span className="cate_icon">
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.49907 17.0003H9.42618C10.1603 17.0003 10.6345 16.4803 10.4968 15.8455L10.1833 14.4614H6.742L6.42845 15.8455C6.2908 16.442 6.81082 17.0003 7.49907 17.0003Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.1834 14.4537L11.5064 13.276C12.2482 12.6183 12.2788 12.1595 11.6899 11.4177L9.35751 8.45822C8.86809 7.8388 8.06512 7.8388 7.5757 8.45822L5.24328 11.4177C4.65444 12.1595 4.65444 12.6413 5.42681 13.276L6.74979 14.4537" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.46289 8.29736V10.2321" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.80551 3.76259L7.20902 3.16608C6.8496 2.80665 6.8496 2.2255 7.20902 1.86608L7.80551 1.26957C8.16493 0.910145 8.74612 0.910145 9.10554 1.26957L9.70203 1.86608C10.0614 2.2255 10.0614 2.80665 9.70203 3.16608L9.10554 3.76259C8.74612 4.12201 8.16493 4.12201 7.80551 3.76259Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.154 7.29541H14.9952C15.4999 7.29541 15.9129 7.70837 15.9129 8.21309V9.05427C15.9129 9.55899 15.4999 9.972 14.9952 9.972H14.154C13.6493 9.972 13.2363 9.55899 13.2363 9.05427V8.21309C13.2363 7.70837 13.6493 7.29541 14.154 7.29541Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.75888 7.29541H1.91767C1.41295 7.29541 1 7.70837 1 8.21309V9.05427C1 9.55899 1.41295 9.972 1.91767 9.972H2.75888C3.2636 9.972 3.67655 9.55899 3.67655 9.05427V8.21309C3.67655 7.70837 3.2636 7.29541 2.75888 7.29541Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.4564 7.5174L9.40332 3.46436" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.45508 7.5174L7.50814 3.46436" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            
                        </span>
                    <ins className="col__name">Sports</ins>
                </span>
                <input type="checkbox"/>
                <span className="check__circle"></span>
            </label>
            </li>
            <li className="single__col">
            <label>
                <span className="col__right">
                        <span className="cate_icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3956 5.55323L13.3955 5.55437L13.0225 11.3363C13.0225 11.3363 13.0225 11.3363 13.0225 11.3364C12.9818 11.9661 12.7933 12.4701 12.4645 12.813C12.1456 13.1456 11.6243 13.4 10.759 13.4H3.24103C2.37545 13.4 1.85217 13.1454 1.53237 12.8126C1.2032 12.4699 1.01515 11.9667 0.977693 11.3392L0.977508 11.3364L0.604481 5.55437L0.604405 5.55323C0.528084 4.40421 1.4692 3.4 2.69583 3.4C3.35599 3.4 3.96116 3.03194 4.26585 2.45855L4.26593 2.45859L4.27075 2.44912L4.78613 1.43631C4.88894 1.23891 5.09663 1.02353 5.37443 0.855589C5.65237 0.68756 5.94605 0.6 6.18221 0.6H7.82497C8.0566 0.6 8.34823 0.686953 8.62588 0.855235C8.90317 1.0233 9.11102 1.23881 9.21387 1.43633L9.72925 2.44911L9.72916 2.44916L9.73415 2.45855C10.0388 3.03194 10.644 3.4 11.3042 3.4C12.5308 3.4 13.4719 4.40421 13.3956 5.55323Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.9248 4.2002H8.07689" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.00037 11.1999C8.28445 11.1999 9.3318 10.1779 9.3318 8.9249C9.3318 7.6719 8.28445 6.6499 7.00037 6.6499C5.71629 6.6499 4.66895 7.6719 4.66895 8.9249C4.66895 10.1779 5.71629 11.1999 7.00037 11.1999Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    <ins className="col__name">Photography</ins>
                </span>
                <input type="checkbox"/>
                <span className="check__circle"></span>
            </label>
            </li>
            <li className="single__col">
            <label>
                <span className="col__right">
                        <span className="cate_icon">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.62305 5.85568L10.95 3.85742" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <mask id="path-2-inside-1_4162_140" fill="white">
                            <path d="M11.6954 9.02916V1.62351C11.6954 0.0452573 10.4742 -0.17327 9.2379 0.099889L4.56258 1.13182C3.70844 1.32 3.12402 1.86632 3.12402 2.65545V3.97268V4.85893V10.2857"/>
                            </mask>
                            <path d="M10.6954 9.02916C10.6954 9.58145 11.1432 10.0292 11.6954 10.0292C12.2477 10.0292 12.6954 9.58145 12.6954 9.02916H10.6954ZM9.2379 0.099889L9.45343 1.07639L9.45365 1.07634L9.2379 0.099889ZM4.56258 1.13182L4.77773 2.10841L4.77811 2.10832L4.56258 1.13182ZM2.12402 10.2857C2.12402 10.838 2.57174 11.2857 3.12402 11.2857C3.67631 11.2857 4.12402 10.838 4.12402 10.2857H2.12402ZM12.6954 9.02916V1.62351H10.6954V9.02916H12.6954ZM12.6954 1.62351C12.6954 1.10261 12.5946 0.614139 12.3571 0.191374C12.1142 -0.240918 11.7609 -0.545669 11.3583 -0.73636C10.5993 -1.09578 9.71866 -1.03046 9.02215 -0.876559L9.45365 1.07634C9.9934 0.957077 10.3415 0.995081 10.5023 1.0712C10.5595 1.09828 10.5887 1.12701 10.6135 1.17104C10.6436 1.2246 10.6954 1.35528 10.6954 1.62351H12.6954ZM9.02237 -0.876608L4.34705 0.155328L4.77811 2.10832L9.45343 1.07639L9.02237 -0.876608ZM4.34743 0.155243C3.20636 0.406633 2.12402 1.24136 2.12402 2.65545H4.12402C4.12402 2.52839 4.16347 2.44366 4.23817 2.36723C4.32587 2.27749 4.49564 2.17055 4.77773 2.10841L4.34743 0.155243ZM2.12402 2.65545V3.97268H4.12402V2.65545H2.12402ZM2.12402 3.97268V4.85893H4.12402V3.97268H2.12402ZM2.12402 4.85893V10.2857H4.12402V4.85893H2.12402Z" fill="currentColor" mask="url(#path-2-inside-1_4162_140)"/>
                            <path d="M3.39652 10.0017C3.39652 10.7739 2.7705 11.3999 1.99826 11.3999C1.22602 11.3999 0.6 10.7739 0.6 10.0017C0.6 9.22944 1.22602 8.60342 1.99826 8.60342C2.7705 8.60342 3.39652 9.22944 3.39652 10.0017Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.2104 9.71262C11.2104 10.5401 10.5396 11.2109 9.71213 11.2109C8.88466 11.2109 8.21387 10.5401 8.21387 9.71262C8.21387 8.88515 8.88466 8.21436 9.71213 8.21436C10.5396 8.21436 11.2104 8.88515 11.2104 9.71262Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            
                        </span>
                    <ins className="col__name">Music</ins>
                </span>
                <input type="checkbox"/>
                <span className="check__circle"></span>
            </label>
            </li>
            <li className="single__col">
            <label>
                <span className="col__right">
                        <span className="cate_icon">
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.85201 6.58936C8.85201 6.58936 8.71183 7.29025 6.60915 10.0938C4.57655 12.7572 7.52031 14.7197 7.87076 15.0001H7.94085C8.36139 14.6497 13.6882 11.2854 8.85201 6.58936Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.1698 5.04728C7.1698 3.43522 6.539 1.96333 5.90819 1.12226C5.69792 0.911991 5.34747 0.98208 5.27738 1.26244C4.99703 2.31378 4.15595 4.55665 2.12335 7.22005C-0.469963 10.5844 1.91308 14.229 4.36622 14.9299C5.69792 15.2804 4.01577 14.229 3.8055 12.0562C3.59523 9.32274 7.1698 7.29014 7.1698 5.04728Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    <ins className="col__name">Collectibles</ins>
                </span>
                <input type="checkbox"/>
                <span className="check__circle"></span>
            </label>
            </li>
            <li className="single__col">
            <label>
                <span className="col__right">
                        <span className="cate_icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7657 3.1001C10.0974 5.61876 6.88261 7.06354 3.53311 6.80337L1.49902 6.64284" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.23242 14.3C6.74909 11.1516 9.67159 9.34567 12.7166 9.67088L14.5658 9.87154" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    <ins className="col__name">Sports</ins>
                </span>
                <input type="checkbox"/>
                <span className="check__circle"></span>
            </label>
            </li>
        </ul>

        
    </div>
</div>
</div>
</div>
)
}
export default MPOSidebar