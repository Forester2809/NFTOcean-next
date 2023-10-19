
const AboutCountItem=(props)=>{
return(
<div className="single_counter__box">
    <span><img src={props.image} alt=""/> Creators earned</span>
    <h2>{props.price}</h2>
</div>
)
}
export default AboutCountItem