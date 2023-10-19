import Link from "next/link"
import DropdownSelect from "../Global/DropdownSelect"
import HTCollectionItem from "./HomeCollection/HTCollectionItem"

const HTCollections=()=>{
return(
<div className="seller_style__two bg-body-2 section_gap_y_top__2">
<div className="container">
<div className="row gy-4 mb-40">
    <div className="col-lg-5">
        <h2 className="section_title__1 fw-sami-bold">
            Top Seller 
        <img src="/images/shapes/fire-flash.svg" alt=""/>
        </h2>
    </div>
    <div className="col-lg-7 d-flex justify-content-lg-end gap-3 flex-wrap">
        <div className="select_style__one varient-3 mr-3">
            <DropdownSelect
             options={[
               "30 days",
               "60 days",
               "Last Year",
               "Last 24h"
             ]}
             selected_design="selector_three"
            />    
        </div>
       
       <Link href="/">
        <a className="btn-pill-v2"> <span>View all</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6H11"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 1L11 6L6 11"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
        </Link>
    </div>
</div>
<div className="row seller_style_two__row row-cols-lg-4 row-cols-sm-2 pt-0 no__border">

    <HTCollectionItem
      index="1"
      image="/images/stars/avater-i.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
    <HTCollectionItem
      index="2"
      image="/images/stars/avater-ii.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
    <HTCollectionItem
      index="3"
      image="/images/stars/avater-iii.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
    <HTCollectionItem
      index="4"
      image="/images/stars/avater-iv.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
</div>
<div className="row seller_style_two__row row-cols-lg-4  row-cols-sm-2">
    <HTCollectionItem
      index="5"
      image="/images/stars/avater-v.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
    <HTCollectionItem
      index="6"
      image="/images/stars/avater-vi.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
    <HTCollectionItem
      index="7"
      image="/images/stars/avater-vii.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
    <HTCollectionItem
      index="8"
      image="/images/stars/avater-viii.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
</div>
<div className="row seller_style_two__row row-cols-lg-4  row-cols-sm-2 pb-0">
    <HTCollectionItem
      index="9"
      image="/images/stars/avater-ix.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
    <HTCollectionItem
      index="10"
      image="/images/stars/avater-x.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
    <HTCollectionItem
      index="11"
      image="/images/stars/avater-iii.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
    <HTCollectionItem
      index="12"
      image="/images/stars/avater-iv.png"
      title="Rat Pack Mafia"
      price="$4,286,149"
    />
</div>
</div>
</div>
)
}
export default HTCollections