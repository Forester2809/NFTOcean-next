
const HomeFeatureItem=(props)=>{
return(
<div className="col-lg-4 col-md-6">
    <div className={`feature_card_style__one ${props.featured?'feature__active':''}`}>
        <div className="feature__icon">
            <img src="/images/icons/feature-custom-one.svg" alt="" 
            className="for-dark"/>
            <img src="/images/icons/feature-custom-one-d.svg" alt="" 
            className="for-light"/>
        </div>
        <div className="feature__disc">
            <h3>
                Buy and sell your <br/> NFTs
            </h3>
            <p>{props.desc}</p>
        </div>
    </div>
</div>
)
}
export default HomeFeatureItem