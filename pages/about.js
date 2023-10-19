import AboutCount from "../components/About/AboutCount"
import AboutCrew from "../components/About/AboutCrew"
import AboutHome from "../components/About/AboutHome"
import AboutMission from "../components/About/AboutMission"
import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import FooterOne from "../components/Layout/Footers/FooterOne"
import AboutClientLogos from "../components/About/AboutClientLogos"
import AboutSupport from "../components/About/AboutSupport"

const About=()=>{
return(
<>
<HeaderTwo/>
<AboutHome/>
<AboutCount/>
<AboutMission/>
<AboutCrew/>
<AboutClientLogos/>
<AboutSupport/>
<FooterOne white={true}/>
</>
)
}
export default About