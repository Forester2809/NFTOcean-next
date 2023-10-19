import Link from "next/link"

const HTHHomeSection=()=>{
return(
<div className="hero_style__three section_gap_y_bottom__1 position-relative">
<img src="/images/shapes/hero-shape-three.png" alt="" className="d-lg-block d-none hero_bg__shape blend-overlay position-absolute top-0 end-0 z-neg-1"/>
<img src="/images/shapes/hero-star.svg" alt="" className="hero_star__shape position-absolute start-0 top-50"/>
<div className="container">
    <div className="row align-items-center gy-4">
        <div className="col-lg-7">
            <div className="hero__content">
                <h1 className="text__outlined">Nft Marketplace</h1>
                <h1 className="text__gradient">Based ON Bsc And Polygon</h1>

                <div className="hero__actions">
                    <Link href="/collection"><a className="btn-rounded-v2">Explore NFTs</a></Link>
                    <Link href="/create-single-nft"><a className="btn-rounded-v3 varient-2">Create NFT</a></Link>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-none d-lg-block text-lg-end">
            <div className="hero__featured">+
                <img src="/images/hero/hero-three-feat.png" alt=""/>
                <img src="/images/hero/hero-batch.png" alt="" className="hero__batch"/>
            </div>
        </div>
    </div>
</div>
</div>
)
}
export default HTHHomeSection