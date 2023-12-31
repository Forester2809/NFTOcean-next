import { useState } from "react"
import DropdownSelect from "../Global/DropdownSelect"
import HTExploreItem from "./HomeExplore/HTExploreItem"

const HTExplore=()=>{
const [FlowMenu,setFlowmenu] = useState(false)
const [CatMenu,setCatmenu] = useState(false)
const [CollectionMenu,setCollectionmenu] = useState(false)
const [PriceMenu,setPricemenu] = useState(false)

return(
<div className="nft_grid_style__two bg-body-2 section_gap_y_top__1 overflow-hidden">
<div className="container">
<div className="row align-items-end gy-4 ">
    <div className="col-lg-3">
        <div className="section-title">
            <h2 className="section_title__1 fw-sami-bold">Explore NFTs</h2>
        </div>
    </div>
    <div className="col-lg-6">
        <ul className="filter-list d-flex flex-wrap style_two">
            <li className="single-filter">
                <button 
                onClick={e=>FlowMenu?setFlowmenu(false):setFlowmenu(true)}
                className="has__dropdown"> <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_317_183" fill="currentColor">
                    <path d="M0.507324 3.53796L6.24862 6.8605L11.9509 3.55747"/>
                    </mask>
                    <path d="M1.00821 2.67245C0.530195 2.39582 -0.0815622 2.55907 -0.358192 3.03708C-0.634821 3.51509 -0.471569 4.12685 0.00644249 4.40348L1.00821 2.67245ZM6.24862 6.8605L5.74773 7.72602C6.05771 7.9054 6.43995 7.90532 6.74985 7.72581L6.24862 6.8605ZM12.4521 4.42278C12.93 4.14596 13.093 3.53414 12.8162 3.05624C12.5394 2.57834 11.9276 2.41533 11.4497 2.69216L12.4521 4.42278ZM0.00644249 4.40348L5.74773 7.72602L6.7495 5.99499L1.00821 2.67245L0.00644249 4.40348ZM6.74985 7.72581L12.4521 4.42278L11.4497 2.69216L5.74739 5.99519L6.74985 7.72581Z" fill="currentColor" />
                    <path d="M6.24854 12.7512V6.85388" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.14493 0.750225L5.14494 0.750232L5.1473 0.748907C5.42478 0.593127 5.82282 0.500715 6.25009 0.500004C6.67645 0.499295 7.07713 0.590005 7.35934 0.74421C7.35978 0.744448 7.36021 0.744685 7.36064 0.744923L10.8299 2.67448L10.8307 2.67493C11.1274 2.83921 11.4264 3.1475 11.6525 3.53099C11.8787 3.91453 12.0034 4.32484 12.0034 4.66277V8.33642C12.0034 8.67435 11.8787 9.08466 11.6525 9.4682C11.4264 9.85169 11.1274 10.16 10.8307 10.3243L10.8299 10.3247L7.35903 12.2552C7.35885 12.2553 7.35867 12.2554 7.35849 12.2555C7.08065 12.4088 6.68043 12.5 6.2517 12.5C5.82297 12.5 5.42275 12.4088 5.14491 12.2555C5.14473 12.2554 5.14455 12.2553 5.14437 12.2552L1.67348 10.3247L1.67265 10.3243C1.37597 10.16 1.07702 9.85169 0.850894 9.4682C0.624742 9.08466 0.5 8.67435 0.5 8.33642V4.66277C0.5 4.32484 0.624742 3.91453 0.850895 3.53099C1.07702 3.1475 1.37597 2.83921 1.67265 2.67493L1.67285 2.67483L5.14493 0.750225Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> <span>Flow</span>
                </button>

                <div className={`custom__dropdown style__one ${FlowMenu?'dropdown-active':''} `}>
                    <ul>
                        <li className="dropdown__item">
                            <input type="radio" id="flw1" name="flwBox" checked onChange={e=>{}}/>
                                <label htmlFor="flw1">Random</label>
                        </li>
                        <li className="dropdown__item">
                            <input type="radio" id="flw2" name="flwBox"/>
                            <label htmlFor="flw2">New Items</label>
                        </li>

                        <li className="dropdown__item">
                            <input type="radio" id="flw3" name="flwBox"/>
                            <label htmlFor="flw3">Old Items</label>
                        </li>
                        <li className="dropdown__item">
                            <input type="radio" id="flw4" name="flwBox"/>
                                <label htmlFor="flw4">Best Seller</label>
                        </li>
                        <li className="dropdown__item">
                            <input type="radio" id="flw5" name="flwBox"/>
                                <label htmlFor="flw5">Highest Rated</label>
                        </li>
                        
                    </ul>
                </div>
            </li>
            <li className="single-filter">
                <button className="has__dropdown"
                onClick={e=>CatMenu?setCatmenu(false):setCatmenu(true)}
                >  
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.83333 7.83333C5.546 7.83333 5.66667 8.75333 5.66667 10.6667C5.66667 11.6253 5.66667 12.3073 5.264 12.8067C4.80067 13.382 3.95733 13.5 2.83333 13.5C1.70933 13.5 0.866 13.382 0.402667 12.8067C0 12.3073 0 11.626 0 10.6833L0.5 10.6667H0C0 8.75333 0.120667 7.83333 2.83333 7.83333ZM10.1667 7.83333C12.8793 7.83333 13 8.75333 13 10.6667C13 11.6253 13 12.3073 12.5973 12.8067C12.134 13.382 11.2907 13.5 10.1667 13.5C9.04267 13.5 8.19933 13.382 7.736 12.8067C7.33333 12.3073 7.33333 11.626 7.33333 10.6833L7.83333 10.6667H7.33333C7.33333 8.75333 7.454 7.83333 10.1667 7.83333ZM2.97077 8.83363L2.83333 8.83333C1.09402 8.83333 1.00482 8.95814 1.00025 10.418L1.00053 10.9868C1.00369 11.5674 1.02581 11.9869 1.18067 12.18C1.35733 12.3987 1.882 12.5 2.83333 12.5C3.78467 12.5 4.30933 12.398 4.486 12.1793C4.66667 11.9547 4.66667 11.4213 4.66667 10.6827C4.66667 9.01586 4.66667 8.84148 2.97077 8.83363ZM10.3041 8.83363L10.1667 8.83333C8.42735 8.83333 8.33815 8.95814 8.33358 10.418L8.33386 10.9868C8.33702 11.5674 8.35914 11.9869 8.514 12.18C8.69067 12.3987 9.21533 12.5 10.1667 12.5C11.118 12.5 11.6427 12.398 11.8193 12.1793C12 11.9547 12 11.4213 12 10.6827C12 9.01586 12 8.84148 10.3041 8.83363ZM2.83333 0.5C5.546 0.5 5.66667 1.42 5.66667 3.33333C5.66667 4.292 5.66667 4.974 5.264 5.47333C4.80067 6.04867 3.95733 6.16667 2.83333 6.16667C1.70933 6.16667 0.866 6.04867 0.402667 5.47333C0 4.974 0 4.29267 0 3.35L0.5 3.33333H0C0 1.42 0.120667 0.5 2.83333 0.5ZM10.1667 0.5C12.8793 0.5 13 1.42 13 3.33333C13 4.292 13 4.974 12.5973 5.47333C12.134 6.04867 11.2907 6.16667 10.1667 6.16667C9.04267 6.16667 8.19933 6.04867 7.736 5.47333C7.33333 4.974 7.33333 4.29267 7.33333 3.35L7.83333 3.33333H7.33333C7.33333 1.42 7.454 0.5 10.1667 0.5ZM2.97077 1.5003L2.83333 1.5C1.09402 1.5 1.00482 1.62481 1.00025 3.0847L1.00053 3.65345C1.00369 4.2341 1.02581 4.65352 1.18067 4.84667C1.35733 5.06533 1.882 5.16667 2.83333 5.16667C3.78467 5.16667 4.30933 5.06467 4.486 4.846C4.66667 4.62133 4.66667 4.088 4.66667 3.34933C4.66667 1.68253 4.66667 1.50814 2.97077 1.5003ZM10.3041 1.5003L10.1667 1.5C8.42735 1.5 8.33815 1.62481 8.33358 3.0847L8.33386 3.65345C8.33702 4.2341 8.35914 4.65352 8.514 4.84667C8.69067 5.06533 9.21533 5.16667 10.1667 5.16667C11.118 5.16667 11.6427 5.06467 11.8193 4.846C12 4.62133 12 4.088 12 3.34933C12 1.68253 12 1.50814 10.3041 1.5003Z" fill="currentColor"/>
                    </svg> <span> Category</span></button>

                    <div className={`custom__dropdown style__one ${CatMenu?'dropdown-active':''} `}>
                        <ul>
                            <li className="dropdown__item">
                                <input type="radio" id="cate1" name="cateBox" checked onChange={e=>{}}/>
                                <label htmlFor="cate1">
                                    <img src="/images/icons/all-color.svg" alt=""/> All</label>
                            </li>

                            <li className="dropdown__item">
                                <input type="radio" id="cate2" name="cateBox"/>
                                <label htmlFor="cate2"><img src="/images/icons/art-color.svg" alt=""/> Art</label>
                            </li>
                            <li className="dropdown__item">
                                <input type="radio" id="cate3" name="cateBox"/>
                                    <label htmlFor="cate3">
                                        <img src="/images/icons/camara-color.svg" alt=""/>Photography</label>
                            </li>
                            <li className="dropdown__item">
                                <input type="radio" id="cate4" name="cateBox"/>
                                    <label htmlFor="cate4">
                                        <img src="/images/icons/games-color.svg" alt=""/>Games</label>
                            </li>
                            <li className="dropdown__item">
                                <input type="radio" id="cate5" name="cateBox"/>
                                    <label htmlFor="cate5">
                                        <img src="/images/icons/sport-color.svg" alt=""/>Sports</label>
                            </li>
                        </ul>
                    </div>
            </li>
            <li className="single-filter">
                <button className="has__dropdown"
                onClick={e=>CollectionMenu?setCollectionmenu(false):setCollectionmenu(true)}
                >  
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1 8.08502V10.815C10.1 13.09 9.19 14 6.915 14H4.185C1.91 14 1 13.09 1 10.815V8.08502C1 5.81002 1.91 4.90002 4.185 4.90002H6.915C9.19 4.90002 10.1 5.81002 10.1 8.08502Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.9999 4.185V6.915C13.9999 9.19 13.0899 10.1 10.8149 10.1H10.0999V8.085C10.0999 5.81 9.1899 4.9 6.9149 4.9H4.8999V4.185C4.8999 1.91 5.8099 1 8.0849 1H10.8149C13.0899 1 13.9999 1.91 13.9999 4.185Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> <span>Collections</span></button>
                    <div className={`custom__dropdown style__one ${CollectionMenu?'dropdown-active':''} `}>
                        <ul>
                            <li className="dropdown__item">
                                <input type="radio" id="coll1" name="collBox" checked onChange={e=>{}}/>
                                    <label htmlFor="coll1">Collection Name</label>
                            </li>
                            <li className="dropdown__item">
                                <input type="radio" id="coll2" name="collBox"/>
                                <label htmlFor="coll2">Collection Name</label>
                            </li>

                            <li className="dropdown__item">
                                <input type="radio" id="coll3" name="collBox"/>
                                <label htmlFor="coll3">Collection Name</label>
                            </li>
                            <li className="dropdown__item">
                                <input type="radio" id="coll4" name="collBox"/>
                                    <label htmlFor="coll4">Collection Name</label>
                            </li>
                            
                        </ul>
                    </div>
            </li>
            <li className="single-filter">
                  <button className="has__dropdown"
                  onClick={e=>PriceMenu?setPricemenu(false):setPricemenu(true)}
                  > 
                  <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.99902 1V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.33333 3.36377H3.33333C2.71449 3.36377 2.121 3.58167 1.68342 3.96953C1.24583 4.35739 1 4.88344 1 5.43195C1 5.98047 1.24583 6.50652 1.68342 6.89438C2.121 7.28224 2.71449 7.50013 3.33333 7.50013H6.66667C7.28551 7.50013 7.879 7.71803 8.31658 8.10589C8.75417 8.49375 9 9.0198 9 9.56831C9 10.1168 8.75417 10.6429 8.31658 11.0307C7.879 11.4186 7.28551 11.6365 6.66667 11.6365H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg><span>Price range</span>
                    </button>

                    <div className={`custom__dropdown style__one ${PriceMenu?'dropdown-active':''} `}>
                        <ul>
                            <li className="dropdown__item">
                                <input type="radio" id="price1" name="priceBox"/>
                                    <label htmlFor="price1">Below 100$</label>
                            </li>
                            <li className="dropdown__item">
                                <input type="radio" id="price2" name="priceBox"/>
                                <label htmlFor="price2">100$ - 1000$ </label>
                            </li>

                            <li className="dropdown__item">
                                <input type="radio" id="price3" name="priceBox"/>
                                <label htmlFor="price3">1000$ - 10,000$</label>
                            </li>
                            <li className="dropdown__item">
                                <input type="radio" id="price4" name="priceBox"/>
                                    <label htmlFor="price4">Upto 10,000$</label>
                            </li>
                            <li className="dropdown__item">
                                <input type="radio" id="price5" name="priceBox" checked onChange={e=>{}}/>
                                    <label htmlFor="price5">Any</label>
                            </li>
                            
                        </ul>
                    </div>
            </li>
        </ul>
    </div>
    <div className="col-lg-3 d-flex justify-content-lg-end">
        <div className="select_style__one varient-5">
            <DropdownSelect
             options={[
                "Recently Listed",
                "Recently Created",
                "Recently Sold",
                "Ending Soon",
                "Price: Low to High",
                "Price: High to Low",
                "Oldest"
             ]}
             selected_design="selector_three"
            />
        </div>
    </div>
</div>
<div className="row gy-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 pt-30">
    
   <HTExploreItem
     image="/images/nft/auction-five.png"
     username="Desmond Eagle"
     title="Abstract Painting"
     price={0.01}
     endIn={1000000}
   /> 

   <HTExploreItem
     image="/images/nft/auction-four.png"
     username="Desmond Eagle"
     title="Abstract Painting"
     price={0.01}
     endIn={1000000}
   /> 

   <HTExploreItem
     image="/images/nft/auction-three.png"
     username="Desmond Eagle"
     title="Abstract Painting"
     price={0.01}
     endIn={1000000}
   /> 

   <HTExploreItem
     image="/images/nft/auction-two.png"
     username="Desmond Eagle"
     title="Abstract Painting"
     price={0.01}
     endIn={1000000}
   /> 

   <HTExploreItem
     image="/images/nft/auction-one.png"
     username="Desmond Eagle"
     title="Abstract Painting"
     price={0.01}
     endIn={1000000}
   /> 

   <HTExploreItem
     image="/images/nft/auction-six.png"
     username="Desmond Eagle"
     title="Abstract Painting"
     price={0.01}
     endIn={1000000}
   /> 

   <HTExploreItem
     image="/images/nft/auction-seven.png"
     username="Desmond Eagle"
     title="Abstract Painting"
     price={0.01}
     endIn={1000000}
   /> 

   <HTExploreItem
     image="/images/nft/auction-eight.png"
     username="Desmond Eagle"
     title="Abstract Painting"
     price={0.01}
     endIn={1000000}
   />

</div>
<div className="more-load-wrap text-center mt-50">
    <a className="load-more-btn varient-2">
        <svg width="18" height="19" fill="none" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.775 3.61794C11.0224 3.39694 10.192 3.25244 9.27502 3.25244C5.13143 3.25244 1.77502 6.55046 1.77502 10.622C1.77502 14.702 5.13143 18 9.27502 18C13.4186 18 16.775 14.702 16.775 10.6305C16.775 9.11747 16.3079 7.70646 15.512 6.53346" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12.848 3.82201L10.348 1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12.8478 3.82202L9.93256 5.91303" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        View all items
    </a>
</div>
</div>
</div>
)
}

export default HTExplore