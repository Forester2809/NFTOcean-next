import HomeMarketplaceGrid from "../components/Home/HomeMarketplaceGrid";
import HomeSeller from "../components/Home/HomeSeller";
import HomeSlider from "../components/Home/HomeSlider";
import HomeTranding from "../components/Home/HomeTranding";
import FooterOne from "../components/Layout/Footers/FooterOne";
import HeaderOne from "../components/Layout/Headers/HeaderOne";
import HomeCollections from "../components/Home/HomeCollections"
import HomeFeature from "../components/Home/HomeFeature";

export default function Home() {
return (
<>
<HeaderOne/>
<HomeSlider/>
<HomeTranding/>
<HomeSeller/>
<HomeMarketplaceGrid/>
<HomeCollections/>
<HomeFeature/>
<FooterOne/>
</>  
)
}
