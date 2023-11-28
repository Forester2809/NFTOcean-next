
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideItem from './Homeslider/SlideItem';
import { Pagination } from "swiper";


const HomeSlider = () => {

// initital slide per view
function InitialSlide(){
 try{
  if(window.innerWidth > 1000){
    return 3
  }else if(window.innerWidth < 800 && window.innerWidth > 600){
    return 2
  }else if(window.innerWidth < 600 ){
    return 1
  }
 }catch(err){}
}


return(
<div className="hero_style__one pt-20 bg-body">
<div className="container-fluid px-4">
    <div className="swiper hero_slider__one">
        <Swiper
         slidesPerView={InitialSlide()}
         speed={1000}
         spaceBetween={30}
         loop={false}
         roundLengths={true}
         centeredSlides={false}
         breakpoints = {{
            1000: {slidesPerView: 3},
            800: {slidesPerView: 2},
            600: {slidesPerView: 1},
            300: {slidesPerView: 1}
         }}
         modules={[Pagination]}
         pagination={{
            el: '.hero_pagination__one',
            clickable: true,
        }}
        >

        <SwiperSlide>
            <SlideItem
             image="/images/my_images/img.png"
             name="Slide 2"
             title="Cointop"
            />
        </SwiperSlide>

        <SwiperSlide>
            <SlideItem
             image="/images/hero/hero-one-ii.png"
             name="Ave avatars 1.0"
             title="Blazing Futures ꜩ"
            />
        </SwiperSlide>

        <SwiperSlide>
            <SlideItem
             image="/images/hero/hero-one-iii.png"
             name="Ave avatars 1.0"
             title="Blazing Futures ꜩ"
            />
        </SwiperSlide>

        <SwiperSlide>
            <SlideItem
             image="/images/hero/hero-one-iii.png"
             name="Ave avatars 1.0"
             title="Blazing Futures ꜩ"
            />
        </SwiperSlide>

        </Swiper>

    </div>

    <div className="row">
        <div className="col-lg-12 text-center">
            <div className="hero_pagination__one mt-40"></div>
        </div>
    </div>
</div>
</div>
)
}
export default HomeSlider