
const ConWalletItem=(props)=>{
return(
<div className="col-lg-3 col-md-4 col-sm-6">
    <div className="wallet_card__style">
        <div className="wallet_icon">
            <img src={props.image} alt=""/>
        </div>
        {props.populer?<div className="card__label"><span>Most popular</span></div>:null}
        <h5 className="wallet__title"><a href="#">{props.title}</a></h5>
        <p>{props.desc}</p>
    </div>
</div>
)
}
export default ConWalletItem