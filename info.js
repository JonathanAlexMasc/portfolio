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
      "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
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
  portfolio: [
    {
      name: "Sheet Recognizer",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/one.png")
        },
        {
          img: require("./src/assets/portfolio/msr/two.png")
        },
        {
          img: require("./src/assets/portfolio/msr/three.png")
        },
        {
          img: require("./src/assets/portfolio/msr/four.png")
        }
      ],
      technologies: ["Computer Vision", "OpenCV", "AI", "Flask", "Sockets"],
      category: "Algorithm",
      date: "Jan, 2020 - Mar, 2020",
      github:
        "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      description:
        "Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Recognition, this tool is used to detect music notes and rests. It makes use of basic Computer Vision techniques such as Convolution, Edge Detections, Hough Transforms and Template Matching to detect notes and rests on a music sheet. "
    },
    {
      name: "NoQ Job Portal",
      pictures: [
        {
          img: require("./src/assets/portfolio/noq/logo.png")
        },
        {
          img: require("./src/assets/portfolio/noq/one.png")
        },
        {
          img: require("./src/assets/portfolio/noq/two.png")
        },
        {
          img: require("./src/assets/portfolio/noq/three.png")
        },
        {
          img: require("./src/assets/portfolio/noq/four.png")
        }
      ],
      technologies: ["Node", "Vue", "Express", "MongoDB", "Heroku"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://github.com/hrishikeshpaul/noq",
      visit: "https://noq-client.herokuapp.com/",
      description:
        "No Q, is a revolutionary tool which allows for both employers and students to skip the hassle seen in modern day career fairs. For the students, there is an intuitive profile builder where you can add things like education, skills, certifications, honors, and experiences. No Q is not only good for students, but employers as well! A common problem at modern career fairs is the number of unqualified candidates who waste their time when they could be chatting with someone else. With No Q, only the students who meet the positions’ criteria will be able to apply, and from there the recruiter can invite them to talk in more detail at the career fair through our intuitive messaging system."
    },
    {
      name: "POST",
      pictures: [
        {
          img: require("./src/assets/portfolio/post/one.png")
        },
        {
          img: require("./src/assets/portfolio/post/two.png")
        }
      ],
      technologies: [
        "Markov Models",
        "Python",
        "Artificial Intelligence",
        "Vue",
        "Heroku"
      ],
      category: "Algorithm",
      github: "https://github.com/hrishikeshpaul/pos-tagger",
      date: "Oct, 2019 - Nov, 2019",
      visit: "https://post-client.herokuapp.com/",
      description:
        "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling."
    },
    {
      name: "Suicide Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/suicide/suicide-analyzer.png")
        },
        {
          img: require("./src/assets/portfolio/suicide/suicide2-original.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
      category: "Website",
      date: "Oct, 2018 - Nov, 2018",
      github: "https://github.com/hrishikeshpaul/whodata",
      visit: "https://skylarktiral.herokuapp.com/",
      description:
        "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent."
    },
    {
      name: "Sentiment Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/smit/one.png")
        },
        {
          img: require("./src/assets/portfolio/smit/two.png")
        },
        {
          img: require("./src/assets/portfolio/smit/three.png")
        },
        {
          img: require("./src/assets/portfolio/smit/four.png")
        }
      ],
      technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
        "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    },
    {
      name: "Clumpr",
      pictures: [
        {
          img: require("./src/assets/portfolio/clumpr/logo.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/one.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/two.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
    {
      name: "Nutricare",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/one.png")
        },
        {
          img: require("./src/assets/portfolio/nc/two.png")
        },
        {
          img: require("./src/assets/portfolio/nc/three.png")
        },
        {
          img: require("./src/assets/portfolio/nc/four.png")
        },
        {
          img: require("./src/assets/portfolio/nc/five.png")
        },
        {
          img: require("./src/assets/portfolio/nc/six.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;
