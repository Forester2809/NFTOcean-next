import Link from "next/link"
import HTHCommunityItem from "./HTHCommunity/HTHCommunnityItem"

const HTHCommunity=()=>{
return(
<div className="community_style_one section_gap_y_bottom__1 section_gap_y_top__1">
<div className="container">
<div className="row justify-content-center">
    <div className="col-lg-6 text-center">
        <h2 className="section_title__2">Join the Community</h2>
        <p className="disc-text pt-2">Learn more about Maker, chat with the team, others in the community,
            and have your sa y in shaping.</p>

            <ul className="community_social__links d-flex flex-wrap justify-content-center">
                <li><Link href="/"><a><i className="bi bi-twitter"></i></a></Link></li>
                <li><Link href="/"><a><i className="bi bi-linkedin"></i></a></Link></li>
                <li><Link href="/"><a><i className="bi bi-youtube"></i></a></Link></li>
                <li><Link href="/"><a><i className="bi bi-github"></i></a></Link></li>
                <li><Link href="/"><a><i className="bi bi-discord"></i></a></Link></li>
            </ul>
    </div>
</div>

<div className="row section_gap_y_top__1 nft_process__wrap justify-content-center gy-4">
    
    <HTHCommunityItem
      image="/images/icons/process-doc.svg"
      title="Create your collection"
      desc="Add new, trending and rare artwork to your collection."
    />

    <HTHCommunityItem
      image="/images/icons/process-card.svg"
      title="Set Up Your Wallet"
      desc="Sed ut perspiciatis unde omnste natus error sit voluptatem"
    />

    <HTHCommunityItem
      image="/images/icons/process-sell.svg"
      title="List Them For Sale"
      desc="I throw myself down among the tall grass by the stream"
    />

    <HTHCommunityItem
      image="/images/icons/process-add.svg"
      title="Add Your NFTs"
      desc="Sed ut perspiciatis unde omnste natus error sit voluptatem"
    />


</div>
</div>
</div>
)
}
export default HTHCommunity