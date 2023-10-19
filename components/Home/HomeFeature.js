import HomeFeatureItem from "./HomeFeature/HomeFeatureItem"

const HomeFeature=()=>{
return(
<div className="feature_style__one bg-body  section_gap_y_top__1 position-relative z-1">
    <img src="/images/shapes/feature-bg.svg" alt="" 
    className="position-absolute feature-bg z-neg-1 for-dark"/>
    <img src="/images/shapes/feature-bg-d.svg" alt=""
        className="position-absolute feature-bg z-neg-1 for-light not-blend"/>
    <div className="container">
        <div className="row justify-content-center pb-80">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
                <h2 className="section_title__1 fw-bold text-center">
                    Mint, buy and sell <br/>or
                    just launch your own NFT Store
                </h2>
            </div>
        </div>
        <div className="row g-4 align-items-center g-lg-0 ">

            <HomeFeatureItem
             desc="Explore beautiful digital art by talented artists around the world."
            />

            <HomeFeatureItem
             desc="Explore beautiful digital art by talented artists around the world."
             featured={true}
            />

            <HomeFeatureItem
             desc="Explore beautiful digital art by talented artists around the world."
            />

        </div>
    </div>
</div>
)
}
export default HomeFeature