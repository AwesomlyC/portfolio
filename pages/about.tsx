import React, { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillsList from "@/components/SkillsList";
const About = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div>
      <title> About</title>
      <MobileNavbar nav={nav} closeNav={closeNav} />
      <Navbar openNav={openNav} />
      <div className="pt-[2rem] md:pt-[4rem] pb-[5rem] bg-[#09101a] text-white">
        <h1 className="heading">
          ABOUT <span className="text-yellow-400">ME</span>
        </h1>
        <section
          className="flex items-center justify-center 
          pt-[2rem] pb-[2rem]  w-[100%]"
        >
          <div className="space-y-6 text-left max-w-2xl">
            <p>
              I graduated with a <text className='text-semibold text-blue-400 shadow-lg'>Bachelor&apos;s degree</text> in Computer Science from the University of California, Irvine, 
              in June 2024, achieving a <text className='text-semibold text-blue-400 shadow-lg'>cumulative GPA</text> of <text className='text-semibold text-blue-400 shadow-lg'>3.698</text>. Throughout my academic journey, 
              I developed a strong foundation in key areas such as Data Structures & Algorithms, 
              Database Management Systems, and more. I have had the opportunity to showcase my skills 
              by building a variety of <text className='text-semibold text-blue-400 shadow-lg'>projects</text>, including Job Tech Stack, Fabflix, and Petr Run, which have 
              allowed me to apply my learning in real-world scenarios.
            </p>

            <p>
              Since <text className='text-semibold text-blue-400 shadow-lg'>graduation</text>, I have continued to expand my expertise by exploring new technologies and frameworks.
              Over the past few months, I&apos;ve focused on developing small-scale applications using tools like 
              React, Node.js, Express.js, MongoDB, and Django, among others. I am <text className='text-semibold text-blue-400 shadow-lg'>passionate</text> about learning and
              experimenting with new technologies, and I thrive on discovering the endless possibilities for creating 
              innovative solutions.
            </p>

            <p>
              What excites me most about <text className='text-semibold text-blue-400 shadow-lg'>Computer Science</text> is the opportunity to solve complex problems
              and build impactful solutions. I&apos;m particularly interested in how technology can be used to address real-world 
              challenges, whether it&apos;s through improving user interfaces, streamlining back-end systems, or optimizing performance. {''}
              <text className='text-semibold text-blue-400 shadow-lg'>However</text>, what truly drives my passion for software development is its ability to solve even the most 
              basic challenges that indivuals face in their <text className='text-semibold text-blue-400 shadow-lg'>day-to-day</text> lives. Software has the power to simplify tasks 
              and enhance lives, and that&apos;s a <text className='text-semibold text-blue-400 shadow-lg'>key motivator</text> for me.
            </p>

            <p>
              In addition, the <text className='text-semibold text-blue-400 shadow-lg'>collaborative</text> nature of software development -- working with others, exchanging ideas, 
              and building solutions together -- is a trait I <text className='text-semibold text-blue-400 shadow-lg'>deeply value</text>. It&apos;s this dynamic that pushes the boundaries
              of what&apos;s possible and continues to drive the evolution of the field.
            </p>

          </div>
        </section>

        <section className='flex flex-col justify-center items-center
          pt-[2rem] pb-[2rem]  w-[100%] '>
            <h1 className='heading'>Ski<span className='text-yellow-400'>lls</span></h1>
           <div className='space-y-12 max-w-2xl'>
            <SkillsList
              skillTitleFirst="Lanaguages &"
              skillTitleSecond="Databases"
              skills={["Java", "Python", "JavaScript", "TypeScript", "MySQL", "PostgreSQL", 
                "MongoDB", "NoSQL", "SQLite3", "Cassandra", "Couchbase"]}
            />
            <SkillsList
              skillTitleFirst="Web"
              skillTitleSecond="Development"
              skills={["React", "Express.js", "Node.js", "Next.js", "JDBC", "jQuery", 
                "Axios", "Django", "Tailwind CSS"]}
            />
            <SkillsList
              skillTitleFirst="DevOps &"
              skillTitleSecond="Tools"
              skills={["Git", "GitHub", "Maven", "AWS", "Tomcat", "JMeter", "JUnit", "Postman", "Selenium"]}
            />
            <SkillsList
              skillTitleFirst="APIs &"
              skillTitleSecond="Architecture"
              skills={["RESTFul APIs", "Microservices", "Clerk", "Vercel", "Netlify"]}
            />
          </div>
        </section>

        <div>
          <h1 className="heading">
            CONTACT <span className="text-yellow-400">ME</span>
          </h1>
          <section
            className="flex items-center justify-center 
          pt-[2rem] pb-[2rem]  w-[100%]"
          >
            <div className="space-y-6 text-left max-w-2xl">
              <p>
                Want to ask me a question or to just say hello? Feel free to
                reach me via email at{" "}
                <a
                  href="mailto:victorchhun55@gmail.com"
                  className="external-links text-blue-400"
                >
                  victorchhun55@gmail.com
                </a>
                . I&apos;d be delighted to hear from you!
              </p>
              <p>
                Additionally, you might find me on <a href="https://www.linkedin.com/in/victor-chhun123/"
                className='external-links text-blue-400'>
                  LinkedIn
                </a>{" "}
                or <a href="https://github.com/AwesomlyC/"
                className='external-links text-blue-400'>Github</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
