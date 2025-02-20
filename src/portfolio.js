const header = {
  homepage: "https://juin.is-a.dev",
  title: "JT",
}

const about = {
  name: "Juin Tan",
  description:
    "I am an ambitious and versatile software engineer, currently a penultimate computer science student. " + 
    "My expertise includes artificial intelligence and web development, demonstrated through various projects, " + 
    "from AI-driven systems to engaging personal websites and applications. " + 
    "Driven by a thirst for knowledge, I stay updated on cutting-edge technologies to deliver innovative solutions. " + 
    "With a commitment to excellence and a tenacious attitude, I am ready to tackle new challenges and make a lasting impact in the industry!",
  // resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/juin-tan-jt1028/",
    github: "https://github.com/Juin28",
  },
}

const educations = [
  {
    title: "Bachelor of Engineering in Computer Science with an Extended Major in Artificial Intelligence",
    school: "The Hong Kong University of Science and Technology",
    result: "CGPA: 4.027/4.300",
    date: "Sep 2022 - Jun 2026",
    school_logo: "https://logo.ust.hk/img/downloads/ust_c4.svg",
  }, 
  {
    title: "Degree Programme in Computer Science and Engineering (Exchange Programme)",
    school: "KTH Royal Institute of Technology",
    result: "CGPA: 4.027/4.300",
    date: "Jan 2025 - Jun 2025",
    school_logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/KTH_Royal_Institute_of_Technology_logo.svg/380px-KTH_Royal_Institute_of_Technology_logo.svg.png",
  }, 
  {
    title: "GCE Advanced Level",
    school: "Sunway College Kuala Lumpur",
    result: "Mathematics (99% - A*), Chemistry (98% - A*), Physics (96% - A*), Biology (94% - A*)",
    date: "Sep 2020 - June 2022",
    school_logo: "https://cdn.eduadvisor.my/institution/sunway/ea-inst-logo-sunway-college.png",
  },
]

const experiences = [
  {
    id: 1,
    company: "Rabbit Credit Limited",
    role: "Application Developer Intern",
    date: "October 2024 - December 2024",
    details: [
        "Designed and implemented the frontend of the Connect Portal, enabling the operations team to interact with the Credit Reference Platform (CRP) for batch data submissions and inquiries using React.js and Tailwind CSS",
        "Engineered backend services for the Rabbit Loan Management System with Spring Boot, including API endpoints for data submission and inquiry flows, along with comprehensive documentation",
        "Develope an automated test suite using JUnit, enhancing backend code coverage from 46% to 63%"
    ]
  },
  {
    id: 2,
    company: "DualMint",
    role: "Full Stack Engineering Intern",
    date: "June 2024 - August 2024",
    details: [
        "Developed a personalized Soulbound NFT platform for a French art gallery using Solidity smart contracts, providing secure and tamper-proof digital ownership for the gallery’s artwork",
        "Implemented a TypeScript backend solution for NFT minting and deployment processes using Node.js, Express.js, and Ethers.js, enabling the seamless batch minting of 200 art pieces every month and a more streamlined art distribution process",
        "Implemented an automated comprehensive test suite that achieved a 96% code coverage, using Hardhat, Ethers.js, Chai and Mocha, covering critical functionalities such as batch minting, token URI management, burning, and contract upgradability"
    ]
  },
  {
    id: 3,
    company: "HKUST SMART Lab",
    role: "Undergraduate Machine Learning Researcher",
    date: "June 2023 - August 2024",
    details: [
        "Developed an advanced object detection and instance segmentation model with enhanced accuracy and efficiency, aimed to aid in early breast and prostate cancer diagnosis",
        "Focused on detecting the human epidermal growth factor receptor 2 (HER2) gene and centromere of chromosome 17 (CEN17) from Fluorescence in situ hybridization (FISH) images and calculating the HER2/CEN-17 ratio for breast cancer diagnosis",
        "Built a two-step pipeline consisting cell detector and nucleus detector on ISBI dataset and FISH dataset which achieved an accuracy of 90% by utilizing the Detectron2 framework to deploy Faster R-CNN, Fast R-CNN and MASK-RCNN models",
        "Processed the Fluorescence in situ hybridization (FISH) datasets of 169 patients (300GB) using Otsu’s Thresholding with OpenCV and NumPy"
    ]
  },
  {
    id: 4,
    company: "The Hong Kong Malaysian Student Association (HKMSA)",
    role: "Lead Webmaster",
    date: "December 2023 - December 2024",
    details: [
        "Lead a five-member team to deploy and maintain the official website at https://thehkmsa.com",
        "Collaborate with 7 departments to develop tailored software solutions that support the organizational growth of HKMSA"
    ]
  },
  {
    id: 5,
    company: "HKUST Department of Computer Science and Engineering",
    role: "Undergraduate Teaching Assistant",
    date: "January 2024 - December 2024",
    details: [
        "Teaching Assistant for COMP2011 - Programming with C++ and COMP2211 - Exploring Artificial Intelligence",
        "Collaborated with course instructors to develop engaging lab assignments that reinforced core computer science concepts",
        "Guided students through their labs and programming assignments in C++ and Python by identifying logic gaps and bugs"
    ]
  },
]

const projects = [
  {
    name: "Automated Brain Tumor Detection",
    description:
      "This project is an automated system for the detection and segmentation of brain tumors in MRI scans",
    stack: ["TensorFlow", "OpenCV", "Seaborn"],
    category: "Machine Learning",
    sourceCode: "https://github.com/Juin28/Brain_Tumor_Detection_Model",
  },
  {
    name: "Twitter DApp",
    description:
      "The Twitter Decentralized Applications (DApp) is a decentralized social media platform built on Ethereum, providing users control over data and interactions",
    stack: ["Solidity", "React.js", "Web3.js"],
    category: "Web Development",
    sourceCode: "https://github.com/Juin28/Twitter_DApp",
  },
  {
    name: "FoodLink",
    description:
      "FoodLink is a platform for efficient food donation, connecting donors, agencies, and beneficiaries seamlessly",
    stack: ["React.js", "Express.js", "Firebase"],
    category: "Web Development",
    sourceCode: "https://github.com/Juin28/CodeToGiveHackathonAsia",
  },
  {
    name: "Exam Management System",
    description:
      "This project is a web application that allows students to take quizzes and teachers to manage exams easily",
    stack: ["JavaFX", "JUnit", "Mockito"],
    category: "Web Development",
    sourceCode: "https://github.com/Juin28/Exam_Management_System",
  },
  {
    name: "Property Prices Prediction Model",
    description:
      "This property price prediction model aims to predict home sale prices based on features like bedrooms, building age, and location",
    stack: ["Tensorflow", "Keras", "Matplotlib"],
    category: "Machine Learning",
    sourceCode: "https://github.com/Juin28/Property_Prices_Prediction_Model",
  },
  {
    name: "CNN Sketched Character Detection Model",
    description:
      "This project develops a deep learning-based model for detecting sketched characters in images, utilizing the ResNet50 architecture and the Generalized Intersection over Union (GIoU) loss function.",
    stack: ["Tensorflow", "Keras", "Scikit-learn"],
    category: "Machine Learning",
    sourceCode: "https://github.com/Juin28/CNN-Sketched-Character-Detection-Model",
  },
  {
    name: "Simplified Memory Management System",
    description:
      "The Simplified Memory Management project creates a custom memory system that mimics malloc and free, enabling direct memory management without standard C library functions",
    stack: ["C", "MMAP" ],
    category: "Operating Systems",
    sourceCode: "https://github.com/Juin28/Simplified_Memory_Management"
  },
  {
    name: "Simplified Multi-level Feedback Queue Scheduler",
    description:
      "The MLFQ project simulates a multi-level feedback queue scheduling algorithm allowing processes to move between different queues based on their execution history and priorities",
    stack: ["C", "POSIX" ],
    category: "Operating Systems",
    sourceCode: "https://github.com/Juin28/Simplified_Multi-level_Feedback_Queue"
  },
  {
    name: "Simplified Interactive Linux Shell",
    description:
      "The Simplified Interactive Linux Shell project is a custom Linux shell that has the functionalities of process management, input/output redirection, and inter-process communication",
    stack: ["C", "POSIX" ],
    category: "Operating Systems",
    sourceCode: "https://github.com/Juin28/Simplified_Interactive_Linux_Shell"
  }
]

const awards = [
  {
    title: "Award Winner of IET Prize 2024",
    organization: "The Institution of Engineering and Technology",
  },
  {
    title: "Ranked 4th in the 2022-23 cohort of Bachelor of Engineering in Computer Science at HKUST",
    organization: "Department of Computer Science and Engineering, HKUST",
  },
  {
    title: "Top 1% of the 2022-23 cohort at HKUST",
    organization: "The Hong Kong University of Science and Technology",
  },
  {
    title: "Finalist of Morgan Stanley Code to Give Hackathon 2024",
    organization: "Morgan Stanley",
  },
  {
    title: "Finalist of UBS Coding Challenge 2024",
    organization: "UBS",
  },
  {
    title: "Dean’s List for the School of Engineering of The Hong Kong University of Science and Technology (Fall 2024) (Fall 2023) (Spring 2023) (Fall 2022)",
    organization: "HKUST School of Engineering",
  },
  {
    title: "Top In The World for Mathematics in GCEAS",
    organization: "Cambridge Assessment International Education",
  },
  {
    title: "Champion of Taekwondo Open Championship 2015 and 2017",
    organization: "Malaysian Taekwondo Association (CHITF)",
  }
]

const certificates = [
  {
    title: "Mensa Member",
    organization: "Mensa Society",
  },
  {
    title: "J.P. Morgan Software Engineering Virtual Experience",
    organization: "Forage",
  },
  {
    title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithm",
    organization: "Stanford University",
  },
  {
    title: "Neural Networks and Deep Learning",
    organization: "DeepLearning.AI",
  },
  {
    title: "HTML and CSS in depth",
    organization: "Meta",
  },
  {
    title: "Problem Solving (Basic)",
    organization: "HackerRank",
  },
  {
    title: "Python (Basic)",
    organization: "HackerRank",
  },
  {
    title: "CSS (Basic)",
    organization: "HackerRank",
  },
  {
    title: "Distinction in Pearson LCCI Level 2 Certificate in Book-keeping & Accounts",
    organization: "Pearson",
  },
  {
    title: "Umpire Classification B of Chan Hun International Taekwondo Federation",
    organization: "Chan Hun International Taekwondo Federation (CHITF)",
  },
  {
    title: "Taekowndo 2nd Dan (2nd Degree) Black Belt in International Taekwon-Do Federation",
    organization: "International Taekwon-Do Federation (ITF)",
  }

]

const skills = {
  programmingLanguages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "C",
    "C#",
    "SQL",
    "Solidity",
    "MIPS Assembly",
    "Arduino",
    "R",
    "SQL",
    "HTML5",
    "CSS3/Tailwind CSS",
  ],
  developerTools: [
    "Spring Boot",
    "React.js",
    "React Native",
    "Node.js",
    "Express.js",
    "Ethers.js",
    "Hardhat",
    "Detectron2",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "OpenCV",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Mocha",
    "Chai",
    "Figma",
    "Git",
  ],
  technicalSkills: [
    "Front End Development",
    "Back End Development",
    "Machine Learning",
    "Computer Vision",
    "Data Processing",
    "Blockchain Development",
    "Smart Contract Development"
  ]
}

const contact = {
  email: "juintan28@gmail.com",
}

export { header, about, educations, experiences, projects, awards, certificates, skills, contact }
