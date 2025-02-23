import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Fullstack Developer',
        1000,
        'Backend Developer',
        1000,
        'Web Developer',
        1000,
      ]}
      speed={40}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;