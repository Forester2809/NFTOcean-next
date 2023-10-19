import Link from "next/link"

const HMgridItem=(props)=>{
return(
<div className="col-lg-3 col-sm-6 mt-30">
    <div className="nft_card_style__one">
        <div className="nft_card__header">
            <div className="creator">
                <div className="avatar">
                    <img src={props.avatar} alt=""/>
                </div>
                <span>
                    <Link href="/author-profile"><a>{props.username}</a></Link>
                </span>
            </div>
            <div className="info__icon">
                <i className="bi bi-three-dots"></i>
            </div>
        </div>
        <div className="nft__thumb">
            <Link href="/nft-detail">
            <a>
                <img src={props.Img} alt=""/>
            </a>
            </Link>
        </div>
        <div className="nft__info">
            <div className="collection_body">
                <div className="collection">
                    <div className="avater">
                        <img src={props.Icon} alt=""/>
                    </div>
                    <Link href="/collection">
                    <a className="col_name">
                        {props.name}
                    </a>
                    </Link>
                </div>
                <div className="like__icon">
                    <img src="/images/icons/red-heart.svg" alt=""/>
                </div>
            </div>
            <h5 className="nft-title">
                <Link href="/nft-detail">
                <a>
                  {props.title}
                </a>
                </Link>
            </h5>
        </div>
        <div className="nft_card__bottom">
            <div className="current__bid">
                <span>Current bid</span>
                <h6>
                    <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37809 7.63893L4.69099 0V5.54493L8.79457 7.37837L4.69099 5.54603V10.3602L9.37809 7.63908L9.37824 7.63913L9.37819 7.63903L9.37824 7.63898L9.37809 7.63893ZM4.68974 5.54493V0L0.00324032 7.63893L0.00314064 7.63898L0.00319024 7.63903L0.00314064 7.63913L0.0032904 7.63908L4.68974 10.3602V5.54603L0.586715 7.37837L4.68974 5.54493ZM4.68974 11.2323V15L0 8.51177L4.68974 11.2323ZM4.69099 11.2317V15L9.37824 8.51177L4.69099 11.2317Z" fill="currentColor"/>
                    </svg>
                    <ins>{props.price}</ins></h6>
            </div>
            <Link href="nft-detail">
                <a className="bid_btn">Place a bid</a>
                
            </Link>
        </div>
    </div>
</div>
)
}

export default HMgridItem