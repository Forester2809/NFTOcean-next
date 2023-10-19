import AuctionItem from "./Auction/AutctionItem"

const HTAuction=()=>{
return(
<div className="live_auction_style__two bg-body-2">
<div className="container">
<div className="row gy-4">
    <div className="col-md-7">
        <h2 className="section_title__1 fw-sami-bold">
            Hot Auctions 
        <img src="/images/shapes/fire-svg.svg" alt=""/></h2>
    </div>
    <div className="col-md-5 text-md-end">
        <a href="marketplace-1.html" className="btn-pill-v2"> <span>View all</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6H11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 1L11 6L6 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg></a>
    </div>
</div>

<div className="row gy-4 pt-40 row-cols-lg-4 row-cols-sm-2 row-cols-1">
  
  <AuctionItem
   username="Norman Gordon"
   title="Running Puppets"
   image="/images/nft/auction-eight.png"
   price="0.01"
   endIn={1000000}
  />

  <AuctionItem
   username="Norman Gordon"
   title="Running Puppets"
   image="/images/nft/auction-seven.png"
   price="0.01"
   endIn={1000000}
  />

  <AuctionItem
   username="Norman Gordon"
   title="Running Puppets"
   image="/images/nft/auction-six.png"
   price="0.01"
   endIn={1000000}
  />

  <AuctionItem
   username="Norman Gordon"
   title="Running Puppets"
   image="/images/nft/auction-five.png"
   price="0.01"
   endIn={1000000}
  />

</div>
</div>
</div>
)
}
export default HTAuction