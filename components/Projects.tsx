// import Image from 'next/image'
import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem] h-[100%]"
      id="projects"
    >
      <h1 className="heading">
        Pro<span className="text-yellow-400">jects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] pb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] ">
          <ProjectItem
            title="Portfolio"
            description={`My own Personal Portfolio! Thank you for looking at my Portfolio!`}
            skills={[
              "React",
              "Typescript",
              "Next.js",
              "Tailwind CSS",
              "Netlify",
            ]}
            githublink="https://github.com/AwesomlyC/portfolio"
            websitelink="https://victorchhun.netlify.app"
          />
          <ProjectItem
            title="Job Tech Stack"
            description={`Full-stack application that enables users to input job details, 
              extract and analyze technical keywords (Java, SQL, and React) from job 
              descriptions. It visualizes this data using pie and line charts, 
              allowing users to track job application trends and gain insights over time`}
            skills={[
              "React",
              "Javascript",
              "Express.js",
              "Node.js",
              "MongoDB",
              "Chart.js",
              "Axios",
              "Vercel",
              "Clerk",
            ]}
            githublink="https://github.com/AwesomlyC/JobTechStack"
            websitelink="https://jobtechstack.vercel.app"
          />
        <ProjectItem
          title="Django Blog Page"
          description={`Mini project to explore Django Framework to build a blog application.`}
          skills={[
            "Python",
            "Django",
            "SQLite3",
            "HTML",
            "Bootstrap",
            "PythonAnywhere",
          ]}
          githublink="https://github.com/AwesomlyC/djangoBlog"
          websitelink="https://awesomly.pythonanywhere.com"
        />

        <ProjectItem
          title="WhatsLN"
          description={`Full stack application to display thousands of Light Novels/Mangas 
              in order to find recommendations. Additionally, allow users to sign into their MyAnimeList 
              account via OAuth 2.0 from the official MyAnimeList API.`}
          skills={[
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "Axios",
            "MyAnimeList API",
            "Jikan API",
          ]}
          githublink="https://github.com/AwesomlyC/WhatsLN"
          websitelink=""
        />
          <ProjectItem
            title="WhatsOnTheList"
            description="Robust to-do list application to allow users to create a list without 
            creating an account. Capable of CRUD operations utilizing Spring Boot to perform such actions"
            skills={[
              "Java",
              "Javascript",
              "React",
              "Node.js",
              "MongoDB",
              "Spring Boot",
            ]}
            githublink="https://github.com/AwesomlyC/To_Do_Application"
            websitelink=""
          />
          <ProjectItem
            title="Fabflix Movie Database Web Application"
            description="Fully build architecture from end-to-end that is capable of performing all features
            under 500 milliseconds. Coordinated with a colleague to deploy this application on AWS EC2. Application that displays
            a catalog of 1000s of movies and allow users to 'checkout' those movies."
            skills={["Java", "Javascript", "AWS", "jQuery"]}
            githublink=""
            websitelink=""
          />
          <ProjectItem
            title="Ranked Search Engine"
            description="Search Engine capable of parsing a corpus comprising 56,000 documents from UCI ICS servers.
            Integrated an inverted index matrix for efficient document retrieval and arranged a TF-IDF scoring mechanism for
            document relevancy. Additionally, deployed the application with Flask capable of displaying top search results in 
            under 300 milliseconds."
            skills={["Python", "Flask"]}
            githublink="https://github.com/AwesomlyC/Ranked-Search-Engine"
            websitelink=""
          />
          <ProjectItem
            title="Petr Run"
            description={`Hackathon 2023 project at Hack@UCI and won Best Beginner's Hack. Fully functional video game to showcase the 
              culture of UCI for incoming undergraduates. Engineered the backend infrastructure to enable scalability 
              across multiple scenes and support additional features.`}
            skills={["Godot", "GDScript"]}
            githublink="https://github.com/munizaa/HACK-AT-UCI-2023"
            websitelink="https://devpost.com/software/petr-run"
          />

          <ProjectItem
            title="DieDiabetes"
            description={`Hackathon 2024 at IrvineHacks2024 in which built a mobile application for users to track their 
              carbohydrate intake and the amount of insulin required.`}
            skills={["Java", "Kotlin"]}
            githublink="https://github.com/AwesomlyC/IrvineHacks2024"
          />
      </div>
    </div>
  );
};

export default Projects;
