import Link from "next/link"

const HTHSellerItem=(props)=>{
return(
<div className="col-lg-3 col-md-6 col-sm-6">
    <div className="seller_card_style__three">
        <div className="seller__thumb">
            <img src={props.image} alt=""/>
        </div>
        <div className="seller__disc">
            <h5 className="seller__name"><Link href="/nft-detail"><a>Millie_Yate</a></Link></h5>
            <span className="total__spend">$1,954</span>
        </div>
    </div>
</div>
)
}
export default HTHSellerItem