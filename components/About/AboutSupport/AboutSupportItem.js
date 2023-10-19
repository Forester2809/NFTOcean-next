
const AboutSupportItem=(props)=>{
return(
<div className="col-lg-4 col-md-6">
<div className="support_card__style">
    <div className="support__icon">
        <img src={props.image} alt=""/>
    </div>
    <div className="support__disc">
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
    </div>
</div>
</div>
)
}
export default AboutSupportItem