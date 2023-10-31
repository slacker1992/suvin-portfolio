"use client";
import React, { useContext } from "react";
import { LiaStreamSolid } from "react-icons/lia";
import { BsChevronLeft } from "react-icons/bs";
import styles from "./testimonials.module.scss";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import Testimonial from "./components/Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import sandamal from "@/images/chamara.png";
import chubby from "@/images/chubby.png";
import bad_black from "@/images/bad_black.png";
const reviews = [
  {
    name: "Chamara Sandamal",
    website: "livon textile - owner",
    description:
      "I had the pleasure of working with Suvin Chandula to create the website for my clothing store, Livon Textiles. Suvin's expertise and dedication were evident throughout the process. The website he developed is not just visually appealing but also user-friendly, reflecting the essence of Livon Textiles. Suvin's attention to detail and commitment to client satisfaction make him an outstanding website developer. I highly recommend Suvin Chandula for anyone seeking a skilled professional to bring their online vision to life.",
    rate: 5,
    image: sandamal,
  },

  {
    name: "Sachith Fernando",
    website: "Chubby beats recordings - owner",
    description:
      "It was truly excellent collaborating with the web designer Suvin Chandula. Thanks to his profound knowledge and unwavering determination, our website not only looks fantastic but also operates seamlessly. I highly recommend anyone in search of a custom website to reach out to Suvin. He will expertly guide you in the right direction.",
    rate: 5,
    image: chubby,
  },
  {
    name: "Shanika",
    website: "Bad Black Fashion - owner",
    description:
      "Our Company has been working with Suvin since 2020. Suvin has evolved in a very positive way through the years. We recently worked with him to update our website. We have been mainly working with Suvin. We are beyond pleased with Suvin's impeccable service. He is extremely helpful in guiding us through the whole process. He is very knowledgeable. He pays close attention to details. Overall, we are very pleased with Suvin.",
    rate: 5,
    image: bad_black,
  },
];
const Testimonials = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`flex flex-col w-full ${styles.testimonials_section}`}
      data-aos="fade-up"
    >
      <div
        className={`flex flex-row gap-2 items-center w-fit border-scheme px-4 py-2 rounded-full font-medium uppercase text-sm mb-10`}
      >
        <LiaStreamSolid className="font-medium" />
        <h5>Testimonials</h5>
      </div>
      <h1 className={styles.testimonials_title}>
        Trusted by <span className="hero-name">Hundred Clients</span>
      </h1>
      <div className="w-full">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <Testimonial key={i} {...{ styles, theme, review }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
