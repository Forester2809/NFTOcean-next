import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from "swiper";
import { useState , useEffect } from 'react';
import { v4 as uuidv4 } from "uuid"
import Link from 'next/link';
import HTHArtistItem from './HTMArtist/HTHArtistItem';


const HTHArtist=()=>{
const [Artists,setArtists] = useState([])

useEffect(()=>{

setArtists([
    {
     image:"/images/artists/sc-one.png",
     avatar:"/images/artists/sa-one.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-two.png",
     avatar:"/images/artists/sa-two.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-three.png",
     avatar:"/images/artists/sa-three.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-four.png",
     avatar:"/images/artists/sa-four.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-five.png",
     avatar:"/images/artists/sa-five.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-six.png",
     avatar:"/images/artists/sa-six.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-seven.png",
     avatar:"/images/artists/sa-seven.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-eight.png",
     avatar:"/images/artists/sa-eight.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-two.png",
     avatar:"/images/artists/sa-two.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-one.png",
     avatar:"/images/artists/sa-one.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-five.png",
     avatar:"/images/artists/sa-five.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-four.png",
     avatar:"/images/artists/sa-four.png",
     username:"Jim Séchen",
    },
    {
     image:"/images/artists/sc-six.png",
     avatar:"/images/artists/sa-six.png",
     username:"Jim Séchen",
    }
])    

},[])

return(
<div className="artists_style__one bg-body section_gap_y_bottom__1">
<div className="container">
<div className="row gy-4 align-items-end">
    <div className="col-lg-6">
        <h2 className="section_title__2">Featured Artists</h2>
        <p className="disc-text pt-2">Most popular gaming digital nft market place</p>
    </div>
    <div className="col-lg-6 d-flex justify-content-lg-end align-items-center">
        <div className="slider__nav d-flex mr-3">
            <div className="artist__prev navigation_btn_2 btn__prev mr-1">
                <i className="bi bi-chevron-left"></i>
            </div>
            <div className="artist__next navigation_btn_2 btn__next">
                <i className="bi bi-chevron-right"></i>
            </div>
        </div>
        <Link href="/">
        <a className="btn-rounded-v3">View all <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25 6H11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M6.25 1L11.25 6L6.25 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        </a>
        </Link>
    </div>
</div>
<div className="row pt-50">
<div className="artist_slider__one">
    <Swiper
     modules={[Navigation]}
     slidesPerView={6}
     speed={1000}
     spaceBetween={30}
     navigation={{
      nextEl: '.artist__next',
      prevEl: '.artist__prev',
    }}
    breakpoints = {{
      5000: {sliderPerView: 6},
      1200: {slidesPerView: 6},
      1000: {slidesPerView: 4},
      800: {slidesPerView: 3},
      600: {slidesPerView: 2},
      300: {slidesPerView: 1}
    }}
    >

     {Artists.map(list=>{
      return (
       <SwiperSlide key={uuidv4()}>
        <HTHArtistItem
         image={list.image}
         avatar={list.avatar}
         username={list.username}
        />
      </SwiperSlide>
      )
     })}
        
    </Swiper>
</div>
    
</div>
</div>
</div>
)
}
export default HTHArtist