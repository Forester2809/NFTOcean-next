import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from "swiper";
import SellerSlide from './HomeSeller/SellerSlide';
import { useState , useEffect } from 'react';
import { v4 as uuidv4 } from "uuid"
import HomeCollectionSlide from "./HomeCollection/HomeCollectionSlide"


const HomeCollections=()=>{
const [Collections,setCollections] = useState([])

useEffect(()=>{

setCollections([
    {
        coverImg:"/images/nft/coll-xl-one.png",
        thumbOne:"/images/nft/coll-sm-two.png",
        avatar:"/images/nft/coll-avater-one.png",
        thumbTwo:"/images/nft/coll-sm-two.png"
    },
    {
        coverImg:"/images/nft/coll-xl-two.png",
        thumbOne:"/images/nft/coll-sm-three.png",
        avatar:"/images/nft/coll-avater-two.png",
        thumbTwo:"/images/nft/coll-sm-three.png"
    },
    {
        coverImg:"/images/nft/coll-xl-three.png",
        thumbOne:"/images/nft/coll-sm-four.png",
        avatar:"/images/nft/coll-avater-three.png",
        thumbTwo:"/images/nft/coll-sm-four.png"
    },
    {
        coverImg:"/images/nft/coll-xl-one.png",
        thumbOne:"/images/nft/coll-sm-two.png",
        avatar:"/images/nft/coll-avater-one.png",
        thumbTwo:"/images/nft/coll-sm-one.png"
    },
    {
        coverImg:"/images/nft/coll-xl-two.png",
        thumbOne:"/images/nft/coll-sm-two.png",
        avatar:"/images/nft/coll-avater-two.png",
        thumbTwo:"/images/nft/coll-sm-one.png"
    }
])

},[])

return(
<div className="collection_style__one bg-body position-relative section_gap_y_top__2 z-1">
<div className="container">
<div className="row pb-30">
    <div
        className="col-lg-12 d-flex align-items-center justify-content-between gap-18 flex-wrap flex-lg-nowrap ">
        <h2 className="section_title__1 fw-bold">
            <span className="text-nowrap"> Hot Collections</span>
        </h2>
        <div className="section__line d-lg-block d-none"></div>
        <div className="section__actions d-flex gap-4">

            <div className="slider__navigation d-flex gap-2">
                <div className="collection__prev navigation__btn btn__prev">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.75 13.1677L1.81066 8.22739C1.22734 7.64395 1.22734 6.68924 1.81066 6.1058L6.75 1.16553"
                            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="collection__next navigation__btn btn__next">
                    <svg width="7" fill="none" height="14" viewBox="0 0 7 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.75 13.1677L5.68934 8.22739C6.27266 7.64395 6.27266 6.68924 5.68934 6.1058L0.75 1.16553"
                            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <div className="btn-rounded-v1 varient-2">
                <span className="text-nowrap">View all</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 6H11.25" strokeWidth="1.2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M6.25 1L11.25 6L6.25 11" strokeWidth="1.2" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    </div>
</div>
<div className="collection_slider__one">

 <Swiper
  modules={[Navigation]}
  speed={1000}
  spaceBetween={20}
  loop={true}
  roundLengths={true}
  centeredSlides={false}
  breakpoints = {{
    1200:{slidesPerView: 3},
    1000: {slidesPerView: 2},
    800: {slidesPerView: 1},
  }}
  navigation = {{
     nextEl: '.collection__next',
     prevEl: '.collection__prev',
 }}
 >

 {
   Collections.map(item=>{
    return (
      <SwiperSlide key={uuidv4()}>
        <HomeCollectionSlide
         coverImg={item.coverImg}
         thumbOne={item.thumbOne}
         avatar={item.avatar}
         thumbTwo={item.thumbTwo}
        />
      </SwiperSlide>
    )
   })
 }
   

 </Swiper>   
    
</div>

</div>
</div>
)
}
export default HomeCollections