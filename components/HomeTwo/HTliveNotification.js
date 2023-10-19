
const HTLiveNotification=()=>{
return(
<div className="live_notification__style bg-body-2 section_gap_y_bottom__3">
<div className="container ">
<div className="row live_notification__row">
    <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
        <div className="noti__left flex-sm-nowrap flex-wrap gap-3">
            <span className="noti__lavel h-100">Sale</span>
            <div className="noti__disc">
                <div className="avater">
                    <img src="/images/nft/avater-sm-one.png" alt=""/>
                </div>
                <p><span>Oasis Doodles</span> sold to <span>0xAB2D…7f26</span> from <span>UnusDao</span> for <span>4 AVAX</span></p>
            </div>
        </div>
        <span className="nofi__timing">26 secs age </span>
    </div>
</div>
</div>
</div>
)
}
export default HTLiveNotification