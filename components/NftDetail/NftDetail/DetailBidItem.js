
const DetailBidItem=(props)=>{
return(
<div className="bidder__history">
    <div className="avater">
        <img src={props.pic} alt="" className="bidder__img"/>
        <img src="/images/icons/tick-blue-m.svg" alt="" className="tick"/>
    </div>
    <div className="bidder__disc">
        <h5>Bid <span>{props.price}</span></h5>
        <p>by <span>{props.username}</span> {props.created_at}</p>
    </div>
</div>
)
}
export default DetailBidItem