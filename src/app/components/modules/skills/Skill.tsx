import Image from "next/image";
import React from "react";

type Props = {
  percentage: string;
  image_name: string;
  animation?: string;
  title?: string;
};

const Skill = ({
  percentage,
  image_name,
  animation = "slide-up",
  title,
}: Props) => {
  return (
    <div className="skill_box" data-aos={animation}>
      <div className="w-20 h-20">
        <Image
          width={500}
          height={500}
          src={`/images/tech/${image_name}.png`}
          alt={image_name}
        />
      </div>
      <h2 className="hero-name text-center text-xl">{title}</h2>
      <h3 className="muted-text text-center text-lg">{percentage}%</h3>
    </div>
  );
};

export default Skill;
