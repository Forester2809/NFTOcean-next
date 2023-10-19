import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import BreadCrumbOne from "../components/Global/BreadCrumbOne"
import MPOHeader from "../components/Marketplace/MarketpaceOne/MPOHeader"
import MPOSidebar from "../components/Marketplace/MarketpaceOne/MPOSidebar"
import AuctionGridItem from "../components/Marketplace/Auction/AuctionGridItem"
import FooterOne from "../components/Layout/Footers/FooterOne"

const LiveAuction=()=>{
return(
<>
<HeaderTwo/>
<BreadCrumbOne
 pagename="Live Auction"
 prevPage="Home"
/>

<div className="marketplace_style_one bg-body-2 section_gap_y_bottom__1 ">
<div className="container">

<MPOHeader Tab="auction"/>

<div className="row pt-40 gy-4">

<MPOSidebar/>

<div className="col-lg-9">
<div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
    
<AuctionGridItem
 image="/images/nft/auction-one.png"
 author="Desmond Eagle"
 title="Abstract Painting"
 price="0.01 ETH"
/>

<AuctionGridItem
 image="/images/nft/auction-two.png"
 author="Desmond Eagle"
 title="Abstract Painting"
 price="0.01 ETH"
/>

<AuctionGridItem
 image="/images/nft/auction-three.png"
 author="Desmond Eagle"
 title="Abstract Painting"
 price="0.01 ETH"
/>

<AuctionGridItem
 image="/images/nft/auction-four.png"
 author="Desmond Eagle"
 title="Abstract Painting"
 price="0.01 ETH"
/>

<AuctionGridItem
 image="/images/nft/auction-five.png"
 author="Desmond Eagle"
 title="Abstract Painting"
 price="0.01 ETH"
/>

<AuctionGridItem
 image="/images/nft/auction-six.png"
 author="Desmond Eagle"
 title="Abstract Painting"
 price="0.01 ETH"
/>

<AuctionGridItem
 image="/images/nft/auction-seven.png"
 author="Desmond Eagle"
 title="Abstract Painting"
 price="0.01 ETH"
/>

<AuctionGridItem
 image="/images/nft/auction-eight.png"
 author="Desmond Eagle"
 title="Abstract Painting"
 price="0.01 ETH"
/>

<AuctionGridItem
 image="/images/nft/auction-nine.png"
 author="Desmond Eagle"
 title="Abstract Painting"
 price="0.01 ETH"
/>

</div>

<div className="more-load-wrap text-center mt-50">
    <a href="#" className="load-more-btn varient-2">
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

<FooterOne borderTop={true}/>
</>
)
}
export default LiveAuction