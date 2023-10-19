import AboutCountItem from "./AboutCount/AboutCountItem"

const AboutCount=()=>{
return(
<div className="success_counter__style bg-body-2 section_gap_y_top__3 section_gap_y_bottom__2">
<div className="container">
    <div className="counter_card__wrap d-flex flex-wrap justify-content-center align-items-center gap-3">
        <AboutCountItem
         image="/images/icons/doller-blue.svg"
         price="44,740 ETH"
        />
        <AboutCountItem
         image="/images/icons/flash-blue.svg"
         price="$207M"
        />
        <AboutCountItem
         image="/images/icons/flash-blue.svg"
         price="462k"
        />
        <AboutCountItem
         image="/images/icons/people-blue.svg"
         price="1.5M"
        />
    </div>
</div>
</div>
)
}
export default AboutCount