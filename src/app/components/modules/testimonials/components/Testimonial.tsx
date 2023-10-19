import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
type Props = {
  styles: any;
  theme: any;
  review: any;
};

const Testimonial = ({ styles, theme, review }: Props) => {
  return (
    <div className={`${styles.testimonials_card} w-full`}>
      <div
        className={`special_box p-10 rounded-2xl flex flex-col items-center`}
      >
        <Image src={review.image} alt={review.website} width={50} height={50} />
        <h2 className="text-2xl mt-5">{review.name}</h2>
        <h6 className="text-sm mb-2">{review.website}</h6>
        <p className={`mb-8 subtitle-text-${theme} text-center`}>
          {review.description}
        </p>
        <div className="flex gap-2">
          {Array.from(Array(review.rate)).map((i) => (
            <AiFillStar key={i} className="hero-name" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
