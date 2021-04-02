module.exports = {
  siteTitle: "Hi, I'm Luis!",
  siteDescription: `My CV and Portfolio site`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Luis Cajigas',
  twitterUsername: 'luisinder',
  githubUsername: 'luisinder',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />
    In 2012 I started working as a support technician and I approached the developers.
    In 2015, I started to study C # and started to contribute with the team giving maintenance in an application in C # and .NET. <br />
    I currently work as a frontend developer and mainly work with <strong>Javascript, NodeJS e React.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Insparya Hair Medical Clinic",
      begin: {
        month: 'jan',
        year: '2019'
      },
      duration: null,
      occupation: "CTO",
      description: "As head of the IT department, my role is the technological conversion of the company on an international level. I also coordinate and participate in all company developments."
  
    }, {
      company: "Kona Quen K",
      begin: {
        month: 'may',
        year: '2018'
      },
      duration: '9 months',
      occupation: "CTO",
      description: "Technical director, responsible for the functional definition of the product and its complete development (fullstack)."
    }, {
      company: "Muba.com",
      begin: {
        month: 'mar',
        year: '2016'
      },
      duration: '1 year and 5 months',
      occupation: "Web Dev / Sysadmin",
      description: "Assembly, configuration and maintenance of high availability servers for the company's different websites. Backend/API development."
  
    },{
      company: "Get Glocal S.L.",
      begin: {
        month: 'sep',
        year: '2015'
      },
      duration: '7 months',
      occupation: "Web Dev / Sysadmin",
      description: "Administration of servers and monitoring systems. Web development (fullstack)."
  
    },{
      company: "Groopify",
      begin: {
        month: 'nov',
        year: '2014'
      },
      duration: '8 months',
      occupation: "Android Dev / Sysadmin",
      description: "App development (Android), web development (Ruby on Rails) and setup/configuration/maintenance of all servers."
  
    },{
      company: "Innovega",
      begin: {
        month: 'jun',
        year: '2014'
      },
      duration: '6 months',
      occupation: "Web developer",
      description: "Ruby on Rails application development."
  
    },{
      company: "A.R.S.A.",
      begin: {
        month: 'sep',
        year: '2009'
      },
      duration: '2 years and 10 months',
      occupation: "Sysadmin / teacher",
      description: "Computer teacher for the association's patients (at different levels). I am also in charge of the design, programming and maintenance of the centre's website."
  
    },
  ],
  portfolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portfolio items here */
  ],
  social: {
    twitter: "https://twitter.com/luisinder",
    linkedin: "https://www.linkedin.com/in/luis-cajigas-mart%C3%ADnez-8a440025/",
    github: "https://github.com/luisinder",
    email: "luis@luisinder.com"
  },
  siteUrl: 'https://luisinder.com',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    }
  ]
}