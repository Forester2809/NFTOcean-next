import AboutSupportItem from "./AboutSupport/AboutSupportItem"

const AboutSupport=()=>{
return(
<div className="support__style bg-body-2 section_gap_y_top__3 section_gap_y_bottom__1">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
            <h4 className="support__title">Still, have questions? <br/>
            We’re here to help.</h4>
        
        </div>
    </div>

    <div className="row gy-4 pt-50">
        <AboutSupportItem
          image="/images/icons/helpman-3d.png"
          title="Help Room"
          desc="Search in our support center
          with your query."
        />

        <AboutSupportItem
          image="/images/icons/chat-3d.png"
          title="Help Room"
          desc="Search in our support center
          with your query."
        />

        <AboutSupportItem
          image="/images/icons/mail-3d.png"
          title="Help Room"
          desc="Search in our support center
          with your query."
        />
    

    </div>
</div>
</div>
)
}
export default AboutSupport