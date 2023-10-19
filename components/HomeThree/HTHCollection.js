import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from "swiper";
import HTHCollectionItem from "./HTHcollection/HTHCollectionItem";
import { useState , useEffect } from 'react';
import { v4 as uuidv4 } from "uuid"
import Link from 'next/link';

const HTHCollection=()=>{
const [Sliders,setSliders] = useState([])

useEffect(()=>{

setSliders([
  {
    image: "/images/collection/col-one.png",
    title: "Photography"
  },
  {
    image: "/images/collection/col-two.png",
    title: "Music"
  },
  {
    image: "/images/collection/col-three.png",
    title: "Digital Arts"
  },
  {
    image: "/images/collection/col-four.png",
    title: "Games"
  },
  {
    image: "/images/collection/col-three.png",
    title: "Movies"
  },
  {
    image: "/images/collection/col-two.png",
    title: "Photography"
  },
  {
    image: "/images/collection/col-one.png",
    title: "Graphic design"
  },
])  

},[])

return(
<div className="collection_style__three bg-body section_gap_y_bottom__1 position-relative z-1">
<div className="container">
    <div className="row gy-4 align-items-end">
        <div className="col-lg-6">
            <span className="sub-header-2">Most Popular</span>
            <h2 className="section_title__2">Popular Collections</h2>
        </div>
        <div className="col-lg-6 d-flex justify-content-lg-end align-items-center">
            <div className="slider__nav d-flex mr-3">
                <div className="collection__three_prev navigation_btn_2 btn__prev mr-1">
                    <i className="bi bi-chevron-left"></i>
                </div>
                <div className="collection__three_next navigation_btn_2 btn__next">
                    <i className="bi bi-chevron-right"></i>
                </div>
            </div>
            <Link href="/">
            <a className="btn-rounded-v3">View all <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 6H11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.25 1L11.25 6L6.25 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
            </Link>
        </div>
    </div>
    <div className="collection_slider__two pt-40">
      <Swiper
       modules={[Navigation]}
       slidesPerView={4}
       speed={1500}
       spaceBetween={30}
       navigation={{
        nextEl: '.collection__three_next',
        prevEl: '.collection__three_prev',
      }}
      breakpoints = {{
        5000: {sliderPerView: 4},
        1200: {slidesPerView: 4},
        1000: {slidesPerView: 3},
        800: {slidesPerView: 2},
        600: {slidesPerView: 1},
        300: {slidesPerView: 1}
      }}
      >
        
      {Sliders.map(item=>{
       return(
        <SwiperSlide key={uuidv4()}>
          <HTHCollectionItem
            image={item.image}
            title={item.title}
          />
        </SwiperSlide>
       )
      })}  

      </Swiper>
    </div>
</div>
</div>
)
}
export default HTHCollection