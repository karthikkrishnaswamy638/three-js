import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    aa,
    birthday,
    certificate,
    elearning,
    encryptus,
    petAdoption,
    quiz,
    tribeone,
    campusvita,
    logistics,
    antaha,
    ecommerce,
    questionPaper,
    systemPerformance,
    Result,
    resultAnalysis,
    munnarexp
} from "../../public/assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: creator,
    },
    {
        title: "SQL Developer",
        icon: backend,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Mobile Application Developer",
        icon: mobile,
    },
];

const technologies = [
    /* {
        name: "HTML 5",
        icon: '/assets/tech/html.png', 
     },
     {
         name: "CSS 3",
         icon: '/assets/tech/css.png',
     },*/
    {
        name: "JavaScript",
        icon: '/assets/tech/javascript.png',
    },
    {
        name: "TypeScript",
        icon: '/assets/tech/typescript.png',
    },
    {
        name: "React JS",
        icon: '/assets/tech/reactjs.png',
    },
    {
        name: "Next JS",
        icon: '/assets/tech/nextjs.png',
    },
   /*  {
         name: "Redux Toolkit",
        icon: '/assets/tech/redux.png',
     },*/
    {
        name: "Tailwind CSS",
        icon: '/assets/tech/tailwind.png',
    },
    {
        name: "Node JS",
        icon: '/assets/tech/nodejs.png',
    },
    {
        name: "MongoDB",
        icon: '/assets/tech/mongodb.png',
    },
    {
        name: "Three JS",
        icon: '/assets/tech/threejs.svg',
    },
    {
        name: "git",
        icon: '/assets/tech/git.png',
    },
    {
        name: "github",
        icon: '/assets/tech/github.png',
     },
    {
        name: "docker",
        icon: '/assets/tech/docker.png',
    },
    // {
    //     name: "Automation Anywhere",
    //     icon: '/assets/tech/aa.jpg',
    // },
    /*{
        name: "Go",
        icon: '/assets/tech/go.png',
    },*/
    {
        name: "flutter",
        icon: '/assets/tech/flutter.jpg',
    },
    // {
    //     name: "mocha",
    //     icon: '/assets/tech/mocha.svg',
    // },
   /* {
        name: "nestjs",
        icon: '/assets/tech/nestjs.svg',
    },*/
     {
         name: "SASS",
        icon: '/assets/tech/sass.png',
     },
];

const experiences = [
   /* {
        title: "Full Stack Developer",
        company_name: "Best-Enlist",
        icon: '/assets/company/nonceblox.jpg',
        iconBg: "#383E56",
        date: "Feb 2022 - Present",
        points: [
            "Develop NFT Marketplace using MERN Stack and web3.0 technologies",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Develop crypto exchange marketplace",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Lead a small team and manage timelines"
        ],
    },
    {
        title: "Full Stack Developer ()",
        company_name: "Klenty",
        icon: '/assets/company/klenty.jpg',
        iconBg: "#E6DEDD",
        date: "Aug 2021 - Dec 2021",
        points: [
            "Integrate payment gateway for users/customers to subscribe to the product.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Allocate features according to the user subscription.",
            "Develop product by following industry best practices.",
        ],
    },
    {
        title: "Full Stack Developer (Intern)",
        company_name: "Appglide",
        icon: '/assets/company/appglide.jpg',
        iconBg: "#383E56",
        date: "Jun 2021 - Aug 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },*/
    {
        title: "Full Stack Developer (Intern)",
        company_name: "Best Enlist",
        icon: '/assets/company/best_enlist.jpg',
        iconBg: "#E6DEDD",
        date: "Nov 2021 - May 2023",
        points: [
            "Developing and maintaining web applications using MERN Stack, Flutter and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Deploy and maintain the product.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Develop product according to customer feedback",
        ],
    },
   /* {
        title: "Full Stack Developer (Intern)",
        company_name: "Excelcult",
        icon: '/assets/company/excelcult.png',
        iconBg: "#383E56",
        date: "Sept 2020 - April 2021",
        points: [
            "Developing web application using MERN Stack and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Providing constructive feedback to other developers.",
        ],
    },*/
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Placement Filtration",
        description:
            "Software bot built using Automation Anywhere v11.x to filter college students for different companies who are reaching for campus interview as per the Job description. These eligible students are notifed through email.",
        tags: [
            {
                name: "rpa",
                color: "blue-text-gradient",
            },
            {
                name: "automationanywhere",
                color: "green-text-gradient",
            },
            {
                name: "collegecampus",
                color: "pink-text-gradient",
            },
        ],
        image: munnarexp,
        source_code_link: "https://github.com/",
    },
    {
        name: "Monitoring System Performance",
        description:
            "Software bot that keeps monitoring the system performance and usage of RAM and CPU.It notifies network administrator through email if a threshold is reached.",
        tags: [
            {
                name: "rpa",
                color: "blue-text-gradient",
            },
            {
                name: "automationanywhere",
                color: "green-text-gradient",
            },
            {
                name: "network",
                color: "pink-text-gradient",
            },
        ],
        image: systemPerformance,
        source_code_link: "https://github.com/",
    },
    {
        name: "Automated Question Paper",
        description:
            "Software bot that auto generates a question paper by having a list of possible questions has an input. No staff will know what question will be coming up.",
        tags: [
            {
                name: "rpa",
                color: "blue-text-gradient",
            },
            {
                name: "automationanywhere",
                color: "green-text-gradient",
            },
            {
                name: "exam",
                color: "pink-text-gradient",
            },
        ],
        image: questionPaper,
        source_code_link: "https://github.com/",
    },
    {
        name: "Result Analysis",
        description:
            "Software bot that analysis the exam results of a class and generates a report with all necessary details. It will give class percentage, subject wise percentage, ranks etc.",
        tags: [
            {
                name: "rpa",
                color: "blue-text-gradient",
            },
            {
                name: "automationanywhere",
                color: "green-text-gradient",
            },
            {
                name: "examresult",
                color: "pink-text-gradient",
            },
        ],
        image: resultAnalysis,
        source_code_link: "https://github.com/",
    },
    {
        name: "Greetings",
        description:
            "Software bot that wishes employees on their birthday, anniversary etc. Never miss to wish any employee in your organization. Even a small gesture makes people happy.",
        tags: [
            {
                name: "rpa",
                color: "blue-text-gradient",
            },
            {
                name: "automationanywhere",
                color: "green-text-gradient",
            },
            {
                name: "wishes",
                color: "pink-text-gradient",
            },
        ],
        image: birthday,
        source_code_link: "https://github.com/",
    },
    {
        name: "Result Management System",
        description:
            "Result Management System is a comprehensive software solution designed to streamline and automate the process of managing academic results within educational institutions.",
        tags: [
            {
                name: "PHP",
                color: "blue-text-gradient",
            },
            {
                name: "My-SQL",
                color: "green-text-gradient",
            },
            {
                name: "Management",
                color: "pink-text-gradient",
            },
        ],
        image: Result,
        source_code_link: "https://github.com/",
    },
    {
        name: "RPA Ocean",
        description:
            "A MERN Stack application which brings all RPA Developers and RPA Community to share their ideas and knowledge. Once place to connect with many RPA Developers and brign in more ideas.",
        tags: [
            {
                name: "rpa",
                color: "blue-text-gradient",
            },
            {
                name: "automationanywhere",
                color: "green-text-gradient",
            },
            {
                name: "community",
                color: "pink-text-gradient",
            },
        ],
        image: aa,
        source_code_link: "https://github.com/",
    },
    {
        name: "Campusvita",
        description:
            "A mobile application which is for college students and job seekers. College students can prepare for interviews in various domains. Students will get notifications of latest openings.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "students",
                color: "green-text-gradient",
            },
            {
                name: "job",
                color: "pink-text-gradient",
            },
        ],
        image: campusvita,
        source_code_link: "https://github.com/",
    },
    {
        name: "Logistics",
        description:
            "A mobile application for godown and warehouses. People can keep track of goods that are in and out of godown. Simply update the status of goods delivery details.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "warehouses",
                color: "green-text-gradient",
            },
            {
                name: "logistics",
                color: "pink-text-gradient",
            },
        ],
        image: logistics,
        source_code_link: "https://github.com/",
    },
    {
        name: "Quiz App",
        description:
            "MERN Stack application. Admin will post a chapter of MCQ quiz. Users can attempt the quiz any number of times. They can only see their final score but not the correct answers. There will be a leaderboard.",
        tags: [
            {
                name: "mern",
                color: "blue-text-gradient",
            },
            {
                name: "quiz",
                color: "green-text-gradient",
            },
            {
                name: "knowledge",
                color: "pink-text-gradient",
            },
        ],
        image: quiz,
        source_code_link: "https://github.com/",
    },
    {
        name: "Pet Adoption",
        description:
            "MERN Stack application where users can post the images of the pets and details along with it. Whoever wants to adopt a pet can check all the posts and reach out to the person. Adoption is completely free of cost and more user-friendly. There are also additional features like likes, comments etc are available.",
        tags: [
            {
                name: "mern",
                color: "blue-text-gradient",
            },
            {
                name: "adoption",
                color: "green-text-gradient",
            },
            {
                name: "saveanimals",
                color: "pink-text-gradient",
            },
        ],
        image: petAdoption,
        source_code_link: "https://github.com/",
    },
    {
        name: "E-learning",
        description:
            "E-learning platform for college students mostly. Users can subscribe courses for free and go through the chapters. Chapters are embedded videos. Once they complete the video, they have to take a quiz. If they score good, next chapter will unlock. Else they have to re-attempt.",
        tags: [
            {
                name: "mern",
                color: "blue-text-gradient",
            },
            {
                name: "elearning",
                color: "green-text-gradient",
            },
            {
                name: "gainskills",
                color: "pink-text-gradient",
            },
        ],
        image: elearning,
        source_code_link: "https://github.com/",
    },
    {
        name: "E-Commerce",
        description:
            "It is an harwares selling platform. Hardware shops can signup and list their products for sale. People can order the products and pay via payment gateway. COD is not available. Delivery is taken care by the shop who listed the product.",
        tags: [
            {
                name: "mern",
                color: "blue-text-gradient",
            },
            {
                name: "ecommerce",
                color: "green-text-gradient",
            },
            {
                name: "hardwares",
                color: "pink-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "https://github.com/",
    },
    // {
    //     name: "Antaha",
    //     description:
    //         "Notify users what's new with the product in a much better and faster way. This is a product updates application. This is visible directly in the client's website. Just add a script to connect.",
    //     tags: [
    //         {
    //             name: "mern",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "productupdates",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "notification",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: antaha,
    //     source_code_link: "https://github.com/",
    // },
    {
        name: "Tribeone NFT Marketplace",
        description:
            "NFT Markeplace for people to buy and sell NFT's. They can connect via Metamask and use HAKA tokens to sell and buy NFT's. More user friendly and has a better user experience.",
        tags: [
            {
                name: "web3.0",
                color: "blue-text-gradient",
            },
            {
                name: "blockchain",
                color: "green-text-gradient",
            },
            {
                name: "nft",
                color: "pink-text-gradient",
            },
        ],
        image: tribeone,
        source_code_link: "https://github.com/",
    },
    {
        name: "Encryptus",
        description:
            "More interested in trading crypto? You are at the right place. It is a crypto exchange marketplace for users to buy and sell crypto using fiat currencies like USD, AED etc. Transactions are more secure. It has 3FA enabled for all transactions.",
        tags: [
            {
                name: "cryptotrading",
                color: "blue-text-gradient",
            },
            {
                name: "blockchain",
                color: "green-text-gradient",
            },
            {
                name: "fiat<>crypto",
                color: "pink-text-gradient",
            },
        ],
        image: encryptus,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };