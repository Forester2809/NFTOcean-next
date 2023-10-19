import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import BreadCrumbOne from "../components/Global/BreadCrumbOne"
import ActivityTabFilter from "../components/Activity/ActivityTabfilter"
import FooterOne from "../components/Layout/Footers/FooterOne"

const Activity=()=>{
return(
<>
<HeaderTwo/>
<BreadCrumbOne
  pagename="Activity"
  prevPage="Home"
/>
<ActivityTabFilter/>
<FooterOne white={true}/>
</>
)
}
export default Activity