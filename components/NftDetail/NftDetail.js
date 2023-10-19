import Link from "next/link"
import { useState } from "react"
import Countdown from "react-countdown"
import NftDetailBid from "./NftDetail/NftDetailBid"
import NftDetailHistory from "./NftDetail/NftDetailHistory"
import NftDetailStatus from "./NftDetail/NftDetailStatus"

const NftDetail=()=>{
const [Bids,setBids] = useState([
    { 
      pic: "/images/nft/nd-a-one.png",
      price: '0.83 ETH' , 
      username: 'Tsuki Genesis' , 
      create_at: '1 hours ago' 
    },
    { 
      pic: "/images/nft/nd-a-two.png",
      price: '0.83 ETH' , 
      username: 'Tsuki Genesis' , 
      create_at: '1 hours ago' 
    },
    { 
      pic: "/images/nft/nd-a-three.png",
      price: '0.83 ETH' , 
      username: 'Tsuki Genesis' , 
      create_at: '1 hours ago' 
    },
    {
      pic: "/images/nft/nd-a-four.png",
      price: '0.83 ETH' , 
      username: 'Tsuki Genesis' , 
      create_at: '1 hours ago' 
    }
])

const [Histories,setHistories] = useState([
    { 
      pic: "/images/nft/nd-a-one.png",
      price: '0.83 ETH' , 
      username: 'Tsuki Genesis' , 
      create_at: '1 hours ago' 
    },
    { 
      pic: "/images/nft/nd-a-two.png",
      price: '0.83 ETH' , 
      username: 'Tsuki Genesis' , 
      create_at: '1 hours ago' 
    },
    { 
      pic: "/images/nft/nd-a-three.png",
      price: '0.83 ETH' , 
      username: 'Tsuki Genesis' , 
      create_at: '1 hours ago' 
    },
    {
      pic: "/images/nft/nd-a-four.png",
      price: '0.83 ETH' , 
      username: 'Tsuki Genesis' , 
      create_at: '1 hours ago' 
    }
])

return(
<div className="nft_details__style pt-60 bg-body-2 section_gap_y_bottom__1">
<div className="container">
    <div className="row gx-7 gy-4 position-relative justify-content-between">
        <div className="col-lg-7 col-sm-10 col-12">
            <div className="nft_details__img">
                <img src="/images/nft/nft-d-img.png" alt=""/>
            </div>
        </div>
        <div className="col-lg-5">
            <div className="nft__details">
                <div className="nd__header">
                    <div className="nd__title">
                        <span>Pizza Game Chef</span>
                        <h3 className="nft__title">Running Puppets <span>Collectibles</span></h3>
                    </div>
                    <ul className="nd_header__actions">
                        <li className="like__btn">
                            <button>
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.6985 1.99765L6.99742 2.1692L7.2962 1.99743C7.50862 1.8753 7.71506 1.74828 7.92068 1.62176C8.31313 1.38029 8.70258 1.14066 9.12479 0.940522C9.75536 0.641607 10.2727 0.531212 10.6931 0.653546C13.0724 1.35159 13.8419 3.69978 13.1616 5.63257L13.1605 5.63569C12.6276 7.17674 11.1864 8.58658 9.76123 9.65606C8.42346 10.66 7.1915 11.297 6.99824 11.3948C6.80116 11.2956 5.58162 10.6685 4.25227 9.67217C2.83358 8.60886 1.38872 7.19725 0.835968 5.63284C0.154704 3.69814 0.922572 1.34971 3.29816 0.653425L3.29875 0.653253C3.73433 0.525103 4.24488 0.633423 4.86272 0.928388C5.27058 1.1231 5.64246 1.35367 6.02504 1.59088C6.24316 1.72612 6.46476 1.86351 6.6985 1.99765Z"
                                        stroke="currentColor" strokeWidth="1.2" />
                                </svg> <span>52</span>
                            </button>
                        </li>
                        <li>
                            <button><svg width="14" height="4" viewBox="0 0 14 4" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 2.25C7.34518 2.25 7.625 1.97018 7.625 1.625C7.625 1.27982 7.34518 1 7 1C6.65482 1 6.375 1.27982 6.375 1.625C6.375 1.97018 6.65482 2.25 7 2.25Z"
                                        fill="currentColor" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M12.375 2.25C12.7202 2.25 13 1.97018 13 1.625C13 1.27982 12.7202 1 12.375 1C12.0298 1 11.75 1.27982 11.75 1.625C11.75 1.97018 12.0298 2.25 12.375 2.25Z"
                                        fill="currentColor" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M1.625 2.25C1.97018 2.25 2.25 1.97018 2.25 1.625C2.25 1.27982 1.97018 1 1.625 1C1.27982 1 1 1.27982 1 1.625C1 1.97018 1.27982 2.25 1.625 2.25Z"
                                        fill="currentColor" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
                <ul className="collections">
                    <li className="creator">
                        <div className="thumb">
                            <img src="/images/nft/avater-sm-one.png" alt=""/>
                        </div>
                        <div className="disc">
                            <span>Creator</span>
                            <h5>Geometrical Figure</h5>
                        </div>
                    </li>
                    <li className="creator">
                        <div className="thumb">
                            <img src="/images/nft/avater-sm-four.png" alt=""/>
                        </div>
                        <div className="disc">
                            <span>Collection</span>
                            <h5>Running Puppets</h5>
                        </div>
                    </li>
                </ul>

                <div className="nd_disc__text">
                    <p>
                        The image and metadata above are from its official website or on-chain data, cached by
                        Running Puppets. It’s our best effort, and we don’t take any responsibility for any
                        incorrectness.
                    </p>
                </div>
                <div className="nd__status">

                    <div className="nft__price">
                        <span>Current Bid</span>
                        <div className="d-flex align-items-center">
                            <span className="eth__icon">
                                <img src="/images/icons/tri-flash-blue.svg" alt=""/>
                            </span>
                            <h4>2.40ETH <span>/ $4769.88</span></h4>
                        </div>
                    </div>

                    <div className="nft__countdown text-end">
                        <span>Auction ends in</span> <br/>
                        <div className="nft_detail_countdown">
                        <Countdown date={Date.now() + 10000000} />
                        </div>
                    </div>


                </div>
                <div className="bid__btn pt-20">
                    <Link href="/">
                        <a className="btn-rounded-v6">Place a Bid</a>
                    </Link>
                </div>
               
                <NftDetailStatus/>

                <NftDetailBid
                 items={Bids}
                />
                
                <NftDetailHistory
                 items={Histories}
                />
            </div>
        </div>
    </div>
</div>
</div>    
)
}
export default NftDetail