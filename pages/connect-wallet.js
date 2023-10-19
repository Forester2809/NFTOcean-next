import CWalletBreadcrumb from "../components/ConnectWallet/BreadCrumb"
import ConWallets from "../components/ConnectWallet/Wallets"
import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import FooterOne from "../components/Layout/Footers/FooterOne"

const ConnectWallet=()=>{
return(
<>
<HeaderTwo/>
<CWalletBreadcrumb/>
<ConWallets/>
<FooterOne white={true}/>
</>
)
}
export default ConnectWallet