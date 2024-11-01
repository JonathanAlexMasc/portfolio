let info = {
  name: "Jonathan Mascarenhas",
  logo_name: "mascarenhas",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "A senior year computer science major at the South Dakota School of Mines and Technology, looking for entry level roles in software engineering, quality assurance, project management, or similar.<br><br> I've worked as a Quality Assurance Engineer Intern at Amazon (summer '24), and Software Engineer Intern at Blackboard (summer '23). When I'm not working on homework or projects, you can find me at the soccer field or playing the acoustic guitar!",
  links: {
    linkedin: "https://www.linkedin.com/in/jonathanmascarenhas/",
    github: "https://github.com/JonathanAlexMasc",
    resume:
      "https://github.com/JonathanAlexMasc/portfolio/blob/main/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "South Dakota School of Mines and Technology",
      place: "United States",
      date: "Aug, 2021 - May, 2025",
      degree: "B.S. Computer Science",
      gpa: "3.6/4.0",
      description:
        "Bachelors of Science degree in Computer Science.",
      skills: [
        "Software Engineering",
        "Quality Assurance",
        "Project Management"
      ]
    }
  ],
  experience: [
    {
      name: "Amazon",
      place: "Boston, Massachusetts",
      date: "June 2024 - August 2024",
      position: "Quality Assurance Engineer Intern",
      description:
        "Automated manual tests for the Blink-Alexa integration using the Kotest framework. Built a performance report generator using Python and AWS tools for reporting Blink-Alexa load testing results to stakeholders.",
      skills: ["Kotlin", "Python", "AWS Lambda", "AWS SES (Simple Email Service)", "AWS S3 (Simple Storage Service)"]
    },
    {
      name: "Blackboard Inc.",
      place: "Remote",
      date: "June 2023 - August 2023",
      position: "Software Engineer Intern",
      description:
        "Migrated features from Blackboard's legacy angular codebase to their latest Ultra frontend built using React + Redux. Worked on bilding items such as datetime pickers, and fixed a client side bug associated with bulk deleting student data. Performed unit/feature/integration testing using JUnit, UI/UX testing using Selenium, and API testing using TestNG and Postman.",
      skills: ["React", "Angular", "Redux", "Java", "Docker", "Jenkins", "Kuberenetes"]
    }

  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "Javascript",
        "TypeScript",
        "Java",
        "C",
        "C++",
        "SQL",
        "NoSQL",
        "Kotlin"
      ],
      icon: "fa fa-code"
    },
    {
      title: "web technologies",
      info: ["Vue", "Angular", "React", "Node", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MySQL", "SQLite", "PostgreSQL", "Firebase"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Android"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "cloud tools",
      info: [
        "AWS S3",
        "AWS Lambda",
        "AWS SES",
        "Netlify",
      ],
      icon: "fas fa-tools"
    },
    {
      title: "project management",
      info: [
        "Agile",
        "Scrum",
        "JIRA",
        "Confluence"
      ],
      icon: "fas fa-tools"
    },

  ],
  // portfolio: [
  //   {
  //     name: "Report Generator",
  //     pictures: [
  //       {
  //         img: require("./src/assets/portfolio/zon/one.png")
  //       }
  //     ],
  //     technologies: ["Load Testing", "Kotest", "Python", "AWS Lambda", "AWS S3", "AWS SES"],
  //     category: "Software Testing",
  //     date: "July, 2024 - Aug, 2024",
  //     visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
  //     description:
  //       "The performance report generator is a python + AWS based tool that I built during my internship at Amazon. The tool extracts results from running load tests on the Blink-Alexa integration test suite. <br><br>For example, after running a live view test a hundred times, the tool would extract information such as pass/fail rates in addition to minimum time, maximum time, and average time required for running the commands. <br><br> This data gets processed using a lambda function with dependencies such as matplotlib to generate two reports - an html report containing a summary of the latest load test and a graph showing the failure rate of each command for the last ten runs. <br><br> The results of the load tests are stored in an S3 container as objects, and I used AWS SES (Simple Email Service) to send an email containing the aforementioned report and graphs."
  //   },
  //   {
  //     name: "RecruitLab",
  //     pictures: [
  //       {
  //         img: require("./src/assets/portfolio/rct/logo.png")
  //       },
  //       {
  //         img: require("./src/assets/portfolio/rct/one.png")
  //       },
  //       {
  //         img: require("./src/assets/portfolio/rct/two.png")
  //       },
  //       {
  //         img: require("./src/assets/portfolio/rct/three.png")
  //       },
  //       {
  //         img: require("./src/assets/portfolio/rct/four.png")
  //       }
  //     ],
  //     technologies: ["Node", "Vue", "Express", "MongoDB", "Heroku"],
  //     category: "Website",
  //     date: "Sep, 2019 - Dec  , 2019",
  //     github: "https://github.com/hrishikeshpaul/noq",
  //     visit: "https://noq-client.herokuapp.com/",
  //     description:
  //       "No Q, is a revolutionary tool which allows for both employers and students to skip the hassle seen in modern day career fairs. For the students, there is an intuitive profile builder where you can add things like education, skills, certifications, honors, and experiences. No Q is not only good for students, but employers as well! A common problem at modern career fairs is the number of unqualified candidates who waste their time when they could be chatting with someone else. With No Q, only the students who meet the positions’ criteria will be able to apply, and from there the recruiter can invite them to talk in more detail at the career fair through our intuitive messaging system."
  //   },
  //   {
  //     name: "Auto Grading Tool",
  //     pictures: [
  //       {
  //         img: require("./src/assets/portfolio/agt/one.png")
  //       },
  //       {
  //         img: require("./src/assets/portfolio/agt/two.png")
  //       }
  //     ],
  //     technologies: [
  //       "React",
  //       "Python",
  //       "HTML",
  //       "TailwindCSS",
  //       "JavaScript"
  //     ],
  //     category: "UI/UX",
  //     github: "https://github.com/hrishikeshpaul/pos-tagger",
  //     date: "Oct, 2019 - Nov, 2019",
  //     visit: "https://post-client.herokuapp.com/",
  //     description:
  //       "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling."
  //   },
  // ],
  recommendations: [
    {
      title:
        "I got the opportunity to work with and manage Jonathan during the summer of 2023. during that time he easily proved himself to a bright young man, willing to take on difficult tasks , which ranged from both backend to front fixes. But the real question is do I want him to come back next summer , absolutely !!",
      author: "Tim Riley",
      position: "Director of Software Engineering",
      company: "Anthology Inc.",
      location: "Remote"
    },
  ]
};

export default info;
