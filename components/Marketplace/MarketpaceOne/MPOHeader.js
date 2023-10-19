import DropdownSelect from "../../Global/DropdownSelect"
import Link from "next/link"

const MPOHeader=(props)=>{
return(
<div className="row nft_grid__header px-0">
<div className="col-lg-7">
    <ul className="grid__tabs">
        <li>
          <Link href="/marketplace-1">
            <a className={`${props.Tab==='nft'?'active_nft__grid':''}`}>NFTs  62,952</a>
          </Link>
        </li>
        <li><Link href="/collection">
          <a className={`${props.Tab==='collection'?'active_nft__grid':''}`}>Collections  12,846</a>
        </Link></li>
        <li><Link href="/live-auction">
          <a className={`${props.Tab==='auction'?'active_nft__grid':''}`}>Auctions  54,629</a>
        </Link></li>
    </ul>
</div>
<div className="col-lg-5 d-flex justify-content-lg-end mt-lg-0 mt-3">
    
  <DropdownSelect
   options={[
    "Recently Listed",
    "Recently Created",
    "Recently Sold",
    "Eanding Soon",
    "Price: Low to High",
    "Price: High to Low",
    "Oldest"
   ]}
  />  

</div>
</div>
)
}
export default MPOHeader