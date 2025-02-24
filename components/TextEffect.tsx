import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const TypeAnimation = dynamic(
  () => import("react-type-animation").then(mod => mod.TypeAnimation),
  { ssr: false }
);

const TextEffect = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1); // Change key to force re-render
  }, []);

  return (
    <div key={key}>
      <TypeAnimation
        preRenderFirstString={false}
        sequence={[
          'Software Engineer', 1000,
          'Fullstack Developer', 1000,
          'Backend Developer', 1000,
          'Web Developer', 1000,
        ]}
        speed={40}
        className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
        repeat={Infinity}
      />
    </div>
  );
};

export default TextEffect;
