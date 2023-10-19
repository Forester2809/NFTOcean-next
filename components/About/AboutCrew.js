import AboutCrewItem from "./AboutCrew/AboutCrewItem"

const AboutCrew=()=>{
return(
<div className="crew_style__start bg-body-2 section_gap_y_top__3">
<div className="container">
    <div className="row justify-content-center ">
        <div className="col-lg-5 text-center">
            <h2 className="inner-p-title">Our Creative Crew</h2>
            <p className="disc-text-2 pt-1">Meet some of the main faces behind the flowbase products!</p>
        </div>
    </div>

    <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-4 pt-50">
        
        <AboutCrewItem
          image="/images/crews/crew-one.png"
          username="Archibald"
          position="CO-FOUNDER & CEO"
          twitter="/"
          instagram="/"
          discord="/"
        />
        <AboutCrewItem
          image="/images/crews/crew-two.png"
          username="Pelican"
          position="CO-FOUNDER & CEO"
        />
        <AboutCrewItem
          image="/images/crews/crew-three.png"
          username="Bogrol"
          position="COORDINATOR"
        />
        <AboutCrewItem
          image="/images/crews/crew-four.png"
          username="Danny Vee"
          position="EXECUTIVE EDITOR"
        />
        <AboutCrewItem
          image="/images/crews/crew-five.png"
          username="Archibald"
          position="CO-FOUNDER & CEO"
        />
        <AboutCrewItem
          image="/images/crews/crew-six.png"
          username="Nass diba"
          position="VP Product"
        />
        <AboutCrewItem
          image="/images/crews/crew-seven.png"
          username="Dylan Meringue"
          position="Designer"
        />
        <AboutCrewItem
          image="/images/crews/crew-eight.png"
          username="Jim Séchen"
          position="Developers"
        />

       
        <div className="col">
            <div className="join_crew__card">
                <button className="join__btn">Join us!</button>
            </div>
        </div>
    </div>
</div>
</div>
)
}
export default AboutCrew