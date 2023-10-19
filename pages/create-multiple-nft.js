import CreatePageBreadcrumb from "../components/Create/CreatePageBreadcrumb"
import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import FooterOne from "../components/Layout/Footers/FooterOne"
import Link from "next/link"
import MultipleNftform from "../components/Create/multiple-nft-form"

const CreateMultipleNft=()=>{
return(
<>
<HeaderTwo/>
<CreatePageBreadcrumb title="Create Multiple" />
<MultipleNftform/>
<FooterOne/>
</>
)
}
export default CreateMultipleNft