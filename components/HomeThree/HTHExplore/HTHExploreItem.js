import Link from "next/link"
import { v4 as uuidv4 } from "uuid"
import Countdown from 'react-countdown';

const HTHExploerItem=(props)=>{
return(
<div className="col">
    <div className="nft_card_style__two">
        <div className="nft__thumb">
            <div className="nft__cover">
                <Link href="/nft-detail">
                <a>
                    <img src={props.image} alt=""/>
                </a>
                </Link>
            </div>

            <div className="nft__actions">
                <button className="actions__btn fav__btn">
                    <img src="/images/icons/red-heart.svg" alt=""/>
                </button>
                <button className="actions__btn info__btn">
                    <i className="bi bi-three-dots"></i>
                </button>

                <div className="avater__group">
                    {props.avatars.map(pic=>{
                      return <img key={uuidv4()} src={pic} alt=""/>
                    })}

                    <img src="/images/icons/tick-yellow-x.svg" alt="" className="user__tick"/>
                </div>
            </div>
        </div>

        <div className="nft__disc">
            <h5 className="nft__title">
                <Link href="/nft-detail">
                <a>{props.title}</a>
                </Link>
            </h5>

            <div className="nft__info">
                <ins> <img src="/images/icons/tri-flash-pink.svg" alt=""/>
                 {props.ETH} ETH</ins>
                <span>1 of 100</span>
            </div>
            <div className="nft__btns">
                <div className="count__down countdown">
                <Countdown date={Date.now(props.end) + props.End} />
                </div>
                <Link href="/nft-detail">
                    <a className="bid-btn">Place a bid</a>
                </Link>
            </div>
        </div>
    </div>
</div>
)
}
export default HTHExploerItem