import CreatePageBreadcrumb from "../components/Create/CreatePageBreadcrumb"
import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import FooterOne from "../components/Layout/Footers/FooterOne"
import Link from "next/link"

const CreateNftPage=()=>{
return(
<>
<HeaderTwo/>
<CreatePageBreadcrumb title="Create item"/>

<div className="nft_create__style bg-body-2 section_gap_y_top__2 section_gap_y_bottom__2">
<div className="container">
<div className="row justify-content-center">
    <div className="col-lg-8 col-xl-8">
        <div className="create__content text-center px-xxl-5">
            <h2 className="inner-p-title">Create Collectible</h2>
            <p className="disc-text-2">Choose <span>“Single”</span> if you want your collectible to be one of a kind or <span>“Multiple”</span> if you want to sell
            one collectible multiple times.</p>
        </div>
        <div className="row gy-4 pt-40">
            <div className="col-sm-6">
                <div className="create_card__style">
                    <div className="create__thumb">
                        <img src="/images/others/create_one.png" alt=""/>
                    </div>
                    <div className="create__disc">
                        <h5>Sell one time</h5>
                        <p className="disc-text-2">Your collectible want to be one of a kind</p>
                        <Link href="/create-single-nft">
                        <a className="create__btn">Connect Single</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="create_card__style">
                    <div className="create__thumb">
                        <img src="/images/others/create_two.png" alt=""/>
                    </div>
                    <div className="create__disc">
                        <h5>Sell multiple time</h5>
                        <p className="disc-text-2">Your collectible want to be one of a kind</p>
                        <Link href="/create-multiple-nft">
                        <a className="create__btn">Create Multiple</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <p className="create_bottom__text text-center">We do not own your private keys and cannot access your funds
        without <br/> your confirmation.</p>
    </div>
</div>
</div>
</div>

<FooterOne white={true}/>
</>
)
}
export default CreateNftPage