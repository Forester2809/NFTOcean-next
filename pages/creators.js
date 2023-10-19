import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import FooterOne from "../components/Layout/Footers/FooterOne"
import BreadCrumbOne from "../components/Global/BreadCrumbOne"
import CreatorGridItem from "../components/Creators/CreatorgridItem"
import CreatorPageSidebar from "../components/Creators/PageSidebar"
import DropdownSelect from "../components/Global/DropdownSelect"

const CreatorsPage=()=>{
return(
<>
<HeaderTwo/>
<BreadCrumbOne prevPage="Home"  pagename="Creators"/>

<div className="creators_grid_style__one bg-body-2 section_gap_y_bottom__1">
<div className="container">
<div className="row nft_grid__header px-0 align-content-center">
    <div className="col-md-6 d-flex align-items-center">
        <span className="creators__count">Profiles 4,592</span>
    </div>
    <div className="col-md-6 d-flex justify-content-md-end mt-lg-0 mt-3">
        <div className="select_style__one">
           
            <DropdownSelect
              options={[
                 "Recently Listed",
                 "Recently Created",
                 "Another option",
                 "Recently Sold",
                 "Price: Low to High",
                 "Price: High to Low",
                 "Oldest"
              ]}
            />
        </div>
    </div>
</div>


<div className="row pt-40 gy-4">
        <CreatorPageSidebar/>

        <div className="col-lg-9">
            <div className="row gy-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
               
              <CreatorGridItem
               image="/images/artists/sc-one.png"
               avatar="/images/artists/sa-one.png"
               username="Sue Shei07"
               price="246.24 ETH"
              /> 
              <CreatorGridItem
               image="/images/artists/sc-two.png"
               avatar="/images/artists/sa-two.png"
               username="Sue Shei07"
               price="246.24 ETH"
              /> 
              <CreatorGridItem
               image="/images/artists/sc-three.png"
               avatar="/images/artists/sa-three.png"
               username="Sue Shei07"
               price="246.24 ETH"
              /> 
              <CreatorGridItem
               image="/images/artists/sc-four.png"
               avatar="/images/artists/sa-four.png"
               username="Sue Shei07"
               price="246.24 ETH"
              /> 
              <CreatorGridItem
               image="/images/artists/sc-five.png"
               avatar="/images/artists/sa-five.png"
               username="Sue Shei07"
               price="246.24 ETH"
              /> 
              <CreatorGridItem
               image="/images/artists/sc-six.png"
               avatar="/images/artists/sa-six.png"
               username="Sue Shei07"
               price="246.24 ETH"
              /> 
              <CreatorGridItem
               image="/images/artists/sc-seven.png"
               avatar="/images/artists/sa-seven.png"
               username="Sue Shei07"
               price="246.24 ETH"
              /> 
              <CreatorGridItem
               image="/images/artists/sc-eight.png"
               avatar="/images/artists/sa-eight.png"
               username="Sue Shei07"
               price="246.24 ETH"
              /> 

            </div>
            <div className="more-load-wrap text-center mt-50">
            <a className="load-more-btn varient-2">
                <svg width="18" height="19" fill="none" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.775 3.61794C11.0224 3.39694 10.192 3.25244 9.27502 3.25244C5.13143 3.25244 1.77502 6.55046 1.77502 10.622C1.77502 14.702 5.13143 18 9.27502 18C13.4186 18 16.775 14.702 16.775 10.6305C16.775 9.11747 16.3079 7.70646 15.512 6.53346" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12.848 3.82201L10.348 1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12.8478 3.82202L9.93256 5.91303" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                View all items</a>
        </div>
        </div>
</div>
</div>
</div>

<FooterOne white={true}/>
</>
)
}
export default CreatorsPage