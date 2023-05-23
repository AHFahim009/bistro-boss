import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import DynamicSectionTitle from "../../../COMPONENTS/SECTION_TITLE/DynamicSectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <DynamicSectionTitle
          subHeading={"From 11.00am to 10.00pm"}
          heading={"ORDER ONLINE"}
        />
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <img src={slider1} />
            <h1 className="uppercase text-center text-4xl -mt-16 hidden lg:block">
              salads
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} />
            <h1 className="uppercase text-center text-4xl -mt-16 hidden lg:block">
              Pizza
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} />
            <h1 className="uppercase text-center text-4xl -mt-16 hidden lg:block">
              soup
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} />
            <h1 className="uppercase text-center text-4xl -mt-16 hidden lg:block">
              desert
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} />
            <h1 className="uppercase text-center text-4xl -mt-16 hidden lg:block">
              salads
            </h1>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
