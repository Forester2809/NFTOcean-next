import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import "./styles.css";
import SliderHorizontalItem from './HomeSlider/SliderHorizontalItem';
import SliderVerticalItem from './HomeSlider/SliderVerticalItem';
import { Autoplay , FreeMode , Thumbs } from 'swiper';
import { Navigation } from 'swiper';
import { useState , useRef , useEffect } from 'react';
import { v4 as uuidv4 } from "uuid"



const HomeTwoSlider=()=>{
const [thumbsSwiper, setThumbsSwiper] = useState(null);
const [Sliders,setSliders] = useState([
  {
    by: "Cris Cyborg",
    title: "Crypto Monkey Starpleade",
    image: "/images/hero/hero-two-featured.png",
    thumbImg: "/images/hero/thumb-sm-two.png",
    price: 0.074
  },
  {
    by: "Cris Cyborg",
    title: "Crypto Monkey Starpleade",
    image: "/images/hero/hero-two-featured2.jpg",
    thumbImg: "/images/hero/thumb-sm-one.png",
    price: 0.074
  },
  {
    by: "Cris Cyborg",
    title: "Crypto Monkey Starpleade",
    image: "/images/hero/hero-two-featured3.jpg",
    thumbImg: "/images/hero/thumb-sm-three.png",
    price: 0.074
  },
  {
    by: "Cris Cyborg",
    title: "Crypto Monkey Starpleade",
    image: "/images/hero/hero-two-featured4.jpg",
    thumbImg: "/images/hero/thumb-sm-four.png",
    price: 0.074
  },
  {
    by: "Cris Cyborg",
    title: "Crypto Monkey Starpleade",
    image: "/images/hero/hero-two-featured5.jpg",
    thumbImg: "/images/hero/thumb-sm-five.png",
    price: 0.074
  }
])

useEffect(()=>{

  let all_thumb = document.querySelectorAll('#sws_thumb .spr_slide')
  all_thumb[0].classList.add("swiper-slide-active")

},[])

function ThumbIndexChange(e){
  let all_thumb = document.querySelectorAll('#sws_thumb .spr_slide')
  all_thumb.forEach(sld=>{
    sld.classList.remove("swiper-slide-active")
    all_thumb[e.activeIndex].classList.add("swiper-slide-active")
  })
}


return(
<div className="hero_style__two bg-body-2 pt-60 pb-60">
<div className="container">
<div className="row gy-4">
<div className="col-lg-9 mx-0">

<div className="hero_slider__two">
    <Swiper
    spaceBetween={0}
    modules={[Autoplay]}
    centeredSlides={true}
    speed={10}
    autoplay = {{
      delay: 3000,
    }}
    onActiveIndexChange={ThumbIndexChange}
    >
  
    {Sliders.map(item=>{
     return (
      <SwiperSlide key={uuidv4()}>
        <SliderHorizontalItem
         by={item.by}
         title={item.title}
         image={item.image}
         price={0.074}
        />
      </SwiperSlide>
     )
    })}
 
  </Swiper>
</div>
</div>


<div className="col-lg-3">
<div className="swiper hero_thumbs__two" id="sws_thumb">
  {/* <button onClick={TestState}>Test</button> */}

  {Sliders.map(slide=>{
    return (
    <div className="swiper-slide spr_slide" key={uuidv4()}>
        <SliderVerticalItem
         image={slide.thumbImg}
         username={slide.by}
         title={slide.title}
         price={slide.price}
        />
    </div>   
    )
  })}

</div>
</div>

</div>
</div>
</div>  
)
}
export default HomeTwoSlider