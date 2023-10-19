import HTHSellerItem from "./HTHSeller/HTHSellerItem"

const HTHSellers=()=>{
return(
<div className="seller_style__three bg-body section_gap_y_bottom__1">
<div className="container">
<div className="row justify-content-center pb-5">
    <div className="col-lg-6 text-center">
        <h2 className="section_title__2">Best Sellers</h2>
        <p className="disc-text pt-2">Most popular gaming digital nft market place</p>
    </div>
</div>
<div className="row">
    <div className="col-lg-12 order-0">
        <div className="row gy-xl-0 gy-3">
            
            <HTHSellerItem
              image="/images/sellers/seller-one.png"
              username="Millie_Yate"
              price="$1,954"
            />

            <HTHSellerItem
              image="/images/sellers/seller-two.png"
              username="Ravi_O'Leigh"
              price="$1,954"
            />

            <HTHSellerItem
              image="/images/sellers/seller-three.png"
              username="Gon_Freecs"
              price="$1,954"
            />

            <HTHSellerItem
              image="/images/sellers/seller-four.png"
              username="Ida_Chapman"
              price="$1,954"
            />

        </div>
    </div>
    <div className="col-lg-12 order-2 order-lg-1">
        <div className="row pt-3 pt-xl-5 gy-xl-0 gy-3 justify-content-lg-center has_border__top">
            
            <HTHSellerItem
              image="/images/sellers/seller-five.png"
              username="Ida_Chapman"
              price="$1,954"
            />
            <HTHSellerItem
              image="/images/sellers/seller-six.png"
              username="Ida_Chapman"
              price="$1,954"
            />
            <HTHSellerItem
              image="/images/sellers/seller-seven.png"
              username="Ida_Chapman"
              price="$1,954"
            />

        </div>
    </div>
    <div className="col-lg-12 order-1 order-lg-2">
        <div className="row pt-3 gy-xl-0 pt-xl-5 gy-3 has_border__top">

           <HTHSellerItem
              image="/images/sellers/seller-five.png"
              username="Gon_Freecs"
              price="$1,954"
            />
            <HTHSellerItem
              image="/images/sellers/seller-six.png"
              username="Ida_Chapman"
              price="$1,954"
            />
            <HTHSellerItem
              image="/images/sellers/seller-seven.png"
              username="Millie_Yate"
              price="$1,954"
            /> 
            <HTHSellerItem
              image="/images/sellers/seller-eight.png"
              username="Ravi_O'Leigh"
              price="$1,954"
            />
           
        </div>
    </div>
</div>



</div>
</div>
)
}
export default HTHSellers