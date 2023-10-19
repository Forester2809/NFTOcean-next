import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import BreadCrumbOne from "../components/Global/BreadCrumbOne"
import FooterOne from "../components/Layout/Footers/FooterOne"
import MPOHeader from "../components/Marketplace/MarketpaceOne/MPOHeader"
import MPOSidebar from "../components/Marketplace/MarketpaceOne/MPOSidebar"
import CollectionGridItem from "../components/Marketplace/collection/CollectionGridItem"

const Collection=()=>{
return(
<>
<HeaderTwo/>
<BreadCrumbOne pagename="Collection" prevPage="Home" />

<div className="marketplace_style_one bg-body-2 section_gap_y_bottom__1 ">
<div className="container">

<MPOHeader Tab="collection"/>

<div className="row pt-40 gy-4">
    
<MPOSidebar/>

<div className="col-lg-9">
    <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">

    <CollectionGridItem
     coverImage="/images/collection/col-x1.png"
     img1="/images/collection/col-m1.png"
     img2="/images/collection/col-m2.png"
     title="Modern Art Collection"
     pic="/images/nft/avater-sm-three.png"
     author="Barry tone"
     in_collection={602}
     total_heart={5}
    />  

    <CollectionGridItem
     coverImage="/images/collection/col-x2.png"
     img1="/images/collection/col-m3.png"
     img2="/images/collection/col-m4.png"
     title="Running Puppets"
     pic="/images/nft/avater-sm-four.png"
     author="Alan Fresco"
     in_collection={602}
     total_heart={5}
    /> 

    <CollectionGridItem
     coverImage="/images/collection/col-x3.png"
     img1="/images/collection/col-m5.png"
     img2="/images/collection/col-m6.png"
     title="Pizza Game Chef"
     pic="/images/nft/avater-sm-three.png"
     author="Weir Doe"
     in_collection={602}
     total_heart={5}
    /> 

    <CollectionGridItem
     coverImage="/images/collection/col-x4.png"
     img1="/images/collection/col-m7.png"
     img2="/images/collection/col-m8.png"
     title="Sound of Silence"
     pic="/images/nft/avater-sm-four.png"
     author="Axie_Chat"
     in_collection={602}
     total_heart={5}
    /> 

    <CollectionGridItem
     coverImage="/images/collection/col-x5.png"
     img1="/images/collection/col-m9.png"
     img2="/images/collection/col-m10.png"
     title="CatBloxGenesis"
     pic="/images/nft/avater-sm-two.png"
     author="Miles Tone"
     in_collection={602}
     total_heart={5}
    /> 

    <CollectionGridItem
     coverImage="/images/collection/col-x6.png"
     img1="/images/collection/col-m11.png"
     img2="/images/collection/col-m12.png"
     title="Tsuki Genesis"
     pic="/images/nft/avater-sm-one.png"
     author="Barry tone"
     in_collection={602}
     total_heart={5}
    /> 

    <CollectionGridItem
     coverImage="/images/collection/col-x7.png"
     img1="/images/collection/col-m12.png"
     img2="/images/collection/col-m13.png"
     title="Abstract Figure"
     pic="/images/nft/avater-sm-four.png"
     author="Ruüd van"
     in_collection={602}
     total_heart={5}
    /> 

    <CollectionGridItem
     coverImage="/images/collection/col-x8.png"
     img1="/images/collection/col-m14.png"
     img2="/images/collection/col-m15.png"
     title="Modern Art Collection"
     pic="/images/nft/avater-sm-one.png"
     author="Barry tone"
     in_collection={602}
     total_heart={5}
    /> 

    <CollectionGridItem
     coverImage="/images/collection/col-x9.png"
     img1="/images/collection/col-m9.png"
     img2="/images/collection/col-m5.png"
     title="Tsuki Genesis"
     pic="/images/nft/avater-sm-two.png"
     author="Barry tone"
     in_collection={602}
     total_heart={5}
    />       
        
    </div>

    <div className="more-load-wrap text-center mt-50">
        <a className="load-more-btn varient-2">
            <svg width="18" height="19" fill="none" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.775 3.61794C11.0224 3.39694 10.192 3.25244 9.27502 3.25244C5.13143 3.25244 1.77502 6.55046 1.77502 10.622C1.77502 14.702 5.13143 18 9.27502 18C13.4186 18 16.775 14.702 16.775 10.6305C16.775 9.11747 16.3079 7.70646 15.512 6.53346" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12.848 3.82201L10.348 1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12.8478 3.82202L9.93256 5.91303" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            View all items
        </a>
    </div>
</div>
</div>
</div>
</div>

<FooterOne white={true}/>
</>
)
}
export default Collection