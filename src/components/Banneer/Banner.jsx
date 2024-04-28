import heroImg1 from "../../assets/Hero/Jute Home Deco.jpg";
import heroImg2 from "../../assets/Hero/Wooden Utensils and Kitchenware.jpeg";
import heroImg3 from "../../assets/Hero/wooden-furniture.jpg";
import heroImg4 from "../../assets/Hero/Jute and wooden jewellery.jpg";
import heroImg5 from "../../assets/Hero/Jute Kitchenware & utensils.jpg";
import heroImg6 from "../../assets/Hero/Wooden Furniture & Sculptures.jpg";
import { EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const Banner = () => {
  return (
    <div className="gadgetContainer lg:h-[600px]  ]">
      <Swiper
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {/* slide 1 */}
        <SwiperSlide>
        <div className="md:h-[500px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between items-center md:gap-2 gap-10">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto ml-8">
                <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
                  <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                    <i className="bx bxs-hot"></i>
                  </span>
                  Top Brands
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Jute Home
                  <br /> Deco
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Stay ahead with the latest trends and innovations.
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
              <div className="w-[400px] mx-auto md:w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0 mr-0 md:mr-8">
                <img
                  className="md:h-full rounded-2xl  h-[250px] object-cover w-[300px] mx-auto md:w-full"
                  src={heroImg1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div className="md:h-[550px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto ml-8">
                <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
                  <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                    <i className="bx bxs-hot"></i>
                  </span>
                  Top Brands
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Wooden Utensils & 
                  <br /> Kitchenware
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Explore a wide range of cutting-edge Arts Craft
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
              <div className="w-[400px] mx-auto md:w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0 mr-0 md:mr-8">
                <img
                  className="md:h-full rounded-2xl  h-[250px] object-cover w-[300px] mx-auto md:w-full"
                  src={heroImg2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div className="md:h-[500px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto ml-8">
                <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
                  <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                    <i className="bx bxs-hot"></i>
                  </span>
                  Top Brands
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                Wooden Home <br /> Decor
                
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                Find the perfect solutions for your lifestyle.
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
              <div className="w-[400px] mx-auto md:w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0 mr-0 md:mr-8">
                <img
                  className="md:h-full rounded-2xl  h-[250px] object-cover w-[300px] mx-auto md:w-full"
                  src={heroImg3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 4 */}
        <SwiperSlide>
          <div className="md:h-[500px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto ml-8">
                <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
                  <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                    <i className="bx bxs-hot"></i>
                  </span>
                  Top Brands
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                Jute and wooden
                  <br /> jewellery
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                Explore a wide range of cutting-edge Arts Craft
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
              <div className="w-[400px] mx-auto md:w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0 mr-0 md:mr-8">
                <img
                  className="md:h-full rounded-2xl  h-[250px] object-cover w-[300px] mx-auto md:w-full"
                  src={heroImg4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 5 */}
        <SwiperSlide>
          <div className="md:h-[500px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto ml-8">
                <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left ">
                  <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                    <i className="bx bxs-hot"></i>
                  </span>
                  Top Brands
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                Jute Kitchenware & 
                  <br /> utensils
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                Explore a wide range of cutting-edge Arts Craft
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
              <div className="w-[400px] mx-auto md:w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0 mr-0 md:mr-8">
                <img
                  className="md:h-full rounded-2xl  h-[250px] object-cover w-[300px] mx-auto md:w-full"
                  src={heroImg5}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 6 */}
        <SwiperSlide>
          <div className="md:h-[500px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto ml-10">
                <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
                  <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                    <i className="bx bxs-hot"></i>
                  </span>
                  Top Brands
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                Wooden Furniture &
                  <br /> Sculptures
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                Explore a wide range of cutting-edge Arts Craft
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
              <div className="w-[400px] mx-auto md:w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0 mr-0 md:mr-8">
                <img
                  className="md:h-full rounded-2xl  h-[250px] object-cover w-[300px] mx-auto md:w-full"
                  src={heroImg6}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default Banner;
