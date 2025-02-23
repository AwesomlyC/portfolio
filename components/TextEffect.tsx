import dynamic from "next/dynamic";

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false } // Ensures it only renders on the client
);

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Fullstack Developer',
        1500,
        'Backend Developer',
        1500,
        'Web Developer',
        1500,
        'Coder',
        1500,
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;