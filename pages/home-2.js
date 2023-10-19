import HomeTwoSlider from "../components/HomeTwo/HomeTwoSlider"
import HTAuction from "../components/HomeTwo/HTAuction"
import HTCollections from "../components/HomeTwo/HTCollections"
import HTDownloadSection from "../components/HomeTwo/HTDownloadSection"
import HTExplore from "../components/HomeTwo/HTExplore"
import HTLiveNotification from "../components/HomeTwo/HTliveNotification"
import HTSellers from "../components/HomeTwo/HTSellers"
import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import FooterOne from "../components/Layout/Footers/FooterOne";

const HomeTwo=()=>{
return(
<>
<HeaderTwo/>
<HomeTwoSlider/>
<HTLiveNotification/>
<HTAuction/>
<HTCollections/>
<HTExplore/>
<HTSellers/>
<HTDownloadSection/>
<FooterOne/>
</>
)
}
export default HomeTwo