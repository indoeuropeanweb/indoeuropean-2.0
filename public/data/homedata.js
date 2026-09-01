    import { IoBusiness, IoPerson } from "react-icons/io5";
    import { GrUserExpert } from "react-icons/gr";
    import { GiEuropeanFlag } from "react-icons/gi";
    import { FaGlobe, FaBookOpen, FaGraduationCap, FaAward, FaBuilding, FaBullhorn, FaHeadset, FaClipboardCheck, FaRobot, FaBolt, FaLaptopFile, FaUserCheck, FaBookAtlas, FaChartLine, FaHouseLaptop, FaEarthAmericas, FaArrowTrendUp, FaUsers, FaUserGraduate, FaBullseye, FaBriefcase, FaLaptopCode, FaGear, FaUserDoctor, FaPalette, FaScaleBalanced, FaHotel, FaLeaf, FaNewspaper, FaBrain} from "react-icons/fa6";
    import { FaSlidersH, FaUserTie, FaUniversity, FaFileSignature, FaLanguage, FaPassport, FaHandHoldingUsd, FaPlaneDeparture, FaPeopleArrows, FaLightbulb, FaWallet, FaShieldAlt, FaPlaneArrival, FaChalkboardTeacher, FaHandshake, FaMapMarkedAlt, FaHandsHelping } from "react-icons/fa";
    
    export const services = [
      {
        "id": 1,
        "title": "Career Counseling",
        "subtitle": "Get expert career guidance tailored to your academic background, interests, and future goals to make informed study abroad decisions with confidence.",
        "image": "/images/icons/1.svg",
        "link": "/career-counselling"
      },
      {
        "id": 2,
        "title": "Country Selection",
        "subtitle": "Compare top study destinations based on education quality, tuition fees, career opportunities, and lifestyle to choose the country that fits you best.",
        "image": "/images/icons/2.svg",
        "link": "country-selection"
      },
      {
        "id": 3,
        "title": "University Selection",
        "subtitle": "Find the right university that matches your academic profile, budget, preferred course, and long-term career aspirations with expert guidance.",
        "image": "/images/icons/3.svg",
        "link": "university-selection"
      },
      {
        "id": 4,
        "title": "Course Selection",
        "subtitle": "Choose an industry-focused course that aligns with your interests, strengths, and global career opportunities for long-term professional success.",
        "image": "/images/icons/4.svg",
        "link": "course-selection"
      },
      {
        "id": 5,
        "title": "Student Visa Assistance",
        "subtitle": "Our visa experts will assist you with documentation, filing your application, preparing for the interview and all the way to maximizing your chances of visa approval.",
        "image": "/images/icons/5.svg",
        "link": "student-visa-assistance"
      },
      {
        "id": 6,
        "title": "Accommodation Support",
        "subtitle": "Find safe, comfortable, and budget-friendly student accommodation near your university before you arrive in your destination country.",
        "image": "/images/icons/6.svg",
        "link": "accommodation-support"
      },
      {
        "id": 7,
        "title": "Scholarships & Education Loans",
        "subtitle": "Explore scholarships and education loan options with expert support to make your international education more affordable and stress-free.",
        "image": "/images/icons/7.svg",
        "link": "scholarships-and-education-loan"
      },
      {
        "id": 8,
        "title": "Application & Documentation",
        "subtitle": "Receive complete assistance with university applications, document preparation, SOPs, LORs, and every requirement for a smooth admission process.",
        "image": "/images/icons/8.svg",
        "link": "application-documentation"
      }
    ]

    export const flags = [
      {
        id: 1, 
        image: "/images/flags/australia.webp",
        text: "Australia",
        alt:"Study in Australia",
        url: "/destinations/study-in-australia"
      },
      {
        id: 2,
        image: "/images/flags/denmark.webp",
        text: "Denmark",
        alt: "Study in Denmark",
        url: "/destinations/study-in-denmark"
      },
      {
        id: 3,
        image: "/images/flags/germany.webp",
        text:"Germany",
        alt: "Study in Germany",
        url: "/destinations/study-in-germany"
      },
      {
        id: 4,
        image: "/images/flags/lithuania.webp",
        text:"Lithuania",
        alt: "Study in Lithuania",
        url: "/destinations/study-in-lithuania"
      },
      {
        id: 5,
        image: "/images/flags/latvia-flag.webp",
        text:"Latvia",
        alt: "Study in Latvia",
        url: "/destinations/study-in-latvia"
      },
      // {
      //   id: 6,
      //   image: "/images/flags/netherlands-flag.webp",
      //   text:"Netherlands",
      //   alt: "Study in Netherlands",
      //   url: "/destinations/study-in-netherlands"
      // },
      {
        id: 6,
        image: "/images/flags/canada.webp",
        text:"Canada",
        alt: "Study in Canada",
        url: "/destinations/study-in-canada"
      },
      {
        id: 7,
        image: "/images/flags/new-zealand.webp",
        text:"New Zealand",
        alt: "Study in New Zealand",
        url: "/destinations/study-in-new-zealand"
      },
      {
        id: 8,
        image: "/images/flags/singapore.webp",
        text:"Singapore",
        alt: "Study in Singapore",
        url: "/destinations/study-in-singapore"
      },
      {
        id: 9,
        image: "/images/flags/uk.webp",
        text:"United Kingdom",
        alt: "Study in United Kindom",
        url: "/destinations/study-in-united-kingdom"
      },
      {
        id: 10,
        image: "/images/flags/usa.webp",
        text:"United States of America",
        alt: "Study in USA",
        url: "/destinations/study-in-usa"
      },
      {
        id: 11,
        image: "/images/flags/ireland.webp",
        text:"Ireland",
        alt: "Study in Ireland",
        url: "/destinations/study-in-ireland"
      },
      {
        id: 12,
        image: "/images/flags/finland.webp",
        text:"Finland",
        alt: "Study in Finland",
        url: "/destinations/study-in-finland"
      },
      {
        id: 13,
        image: "/images/flags/france.webp",
        text:"France",
        alt: "Study in France",
        url: "/destinations/study-in-france"
      },
      {
        id: 14,
        image: "/images/flags/sweden.webp",
        text:"Sweden",
        alt: "Study in Sweden", 
        url: "/destinations/study-in-sweden"
      },
    ]

    export const universitiesLogos = [
      { "id": 1, "img_url": "/images/universities/logos/1.png" },
      { "id": 2, "img_url": "/images/universities/logos/2.png" },
      { "id": 3, "img_url": "/images/universities/logos/3.png" },
      { "id": 4, "img_url": "/images/universities/logos/4.png" },
      { "id": 5, "img_url": "/images/universities/logos/5.png" },
      { "id": 6, "img_url": "/images/universities/logos/6.png" },
      { "id": 7, "img_url": "/images/universities/logos/7.png" },
      { "id": 8, "img_url": "/images/universities/logos/8.png" },
      { "id": 9, "img_url": "/images/universities/logos/10.png" },
      { "id": 10, "img_url": "/images/universities/logos/11.png" },
      { "id": 11, "img_url": "/images/universities/logos/12.png" },
      { "id": 12, "img_url": "/images/universities/logos/13.png" },
      { "id": 13, "img_url": "/images/universities/logos/14.png" },
      { "id": 14, "img_url": "/images/universities/logos/15.png" },
      { "id": 15, "img_url": "/images/universities/logos/16.png" },
      { "id": 16, "img_url": "/images/universities/logos/17.png" },
      { "id": 17, "img_url": "/images/universities/logos/18.png" },
      { "id": 18, "img_url": "/images/universities/logos/19.png" },
      { "id": 19, "img_url": "/images/universities/logos/20.png" },
      { "id": 20, "img_url": "/images/universities/logos/21.png" },
      { "id": 21, "img_url": "/images/universities/logos/22.png" },
      { "id": 22, "img_url": "/images/universities/logos/23.png" },
      { "id": 23, "img_url": "/images/universities/logos/24.png" },
      { "id": 24, "img_url": "/images/universities/logos/25.png" },
      { "id": 25, "img_url": "/images/universities/logos/26.png" },
      { "id": 26, "img_url": "/images/universities/logos/27.png" },
      { "id": 27, "img_url": "/images/universities/logos/28.png" },
      { "id": 28, "img_url": "/images/universities/logos/29.png" },
      { "id": 29, "img_url": "/images/universities/logos/30.png" }
    ]

    export const blogs = [
      {
        id: 1,
        title: "Study in UK, Canada, USA, Australia & New Zealand",
        description:
          "Discover world-class universities, internationally recognized degrees, and outstanding career opportunities. Whether you dream of studying in the UK, Canada, the USA, Australia, or New Zealand, our expert counselors help you choose the right university, course, and visa pathway to achieve your study abroad goals.",
        date: "July 6, 2026",
        image: "/images/blogs/blog-1.webp",
        slug: "/blogs/study-in-uk-canada-usa-australia-new-zealand",
      },
      {
        id: 2,
        title: "Top IELTS Preparation Tips for a High Band Score",
        description:
          "Learn proven IELTS preparation strategies, practice techniques, and expert guidance to improve your Listening, Reading, Writing, and Speaking scores.",
        date: "July 4, 2026",
        image: "/images/blogs/blog-2.webp",
        slug: "/blogs/ielts-preparation-tips",
      },
      {
        id: 3,
        title: "Student Visa Process Made Simple",
        description:
          "Understand the complete student visa application process, document checklist, interview preparation, and expert tips to maximize your chances of approval.",
        date: "July 1, 2026",
        image: "/images/blogs/blog-3.webp",
        slug: "/blogs/student-visa-process",
      },
    ];

export const servicesData = [
  {
    id: 1,
    title: "Free Study Abroad Counselling",
    description:
      "Our experienced counselors help students identify the best country, university, and course based on their academic profile, career aspirations, and budget.",
    image: "/images/aboutus/services/free-counselling.webp",
    slug: "free-counselling",
    alt: "Free Study Abroad Counselling",
  },
  {
    id: 2,
    title: "University Selection",
    description:
      "Choosing the right university is one of the biggest decisions for any student. We help shortlist universities that match your academic qualifications, future goals, and preferred study destination.",
    image: "/images/aboutus/services/university-selection.webp",
    slug: "university-selection",
    alt: "University Selection",
  },
  {
    id: 3,
    title: "Admission Assistance",
    description:
      "Our admission experts assist students throughout the application process, ensuring that every document is prepared accurately and submitted within university deadlines.",
    image: "/images/aboutus/services/admission-assistance.webp",
    slug: "admission-assistance",
    alt: "Admission Assistance",
  },
  {
    id: 4,
    title: "SOP, LOR & Documentation Support",
    description:
      "A strong application can significantly improve admission chances. Our experts guide students in preparing impactful Statements of Purpose (SOP), Letters of Recommendation (LOR), resumes, and other required documents.",
    image: "/images/aboutus/services/sop-lor-documentation.webp",
    slug: "sop-lor-documentation-support",
    alt: "SOP, LOR & Documentation Support",
  },
  {
    id: 5,
    title: "Student Visa Assistance",
    description:
      "Visa approval is a crucial part of studying abroad. Our visa specialists help students prepare the required documents, complete applications accurately, and confidently attend visa interviews.",
    image: "/images/aboutus/services/student-visa-assistance.webp",
    slug: "student-visa-assistance",
    alt: "Student Visa Assistance",
  },
  {
    id: 6,
    title: "Scholarship & Education Loan Guidance",
    description:
      "We help students explore scholarship opportunities and education loan options to make overseas education more affordable.",
    image: "/images/aboutus/services/scholarship-education-loan.webp",
    slug: "scholarship-education-loan-guidance",
    alt: "Scholarship & Education Loan Guidance",
  },
  {
    id: 7,
    title: "IELTS & Interview Guidance",
    description:
      "Students receive complete support for English language requirements and university interviews through expert guidance and preparation sessions.",
    image: "/images/aboutus/services/ielts-interview-guidance.webp",
    slug: "ielts-interview-guidance",
    alt: "IELTS & Interview Guidance",
  },
  {
    id: 8,
    title: "Accommodation & Pre-Departure Support",
    description:
      "From accommodation guidance to travel planning and pre-departure sessions, we ensure students are well prepared before beginning their international education journey.",
    image: "/images/aboutus/services/accommodation-pre-departure.webp",
    slug: "accommodation-pre-departure-support",
    alt: "Accommodation & Pre-Departure Support",
  },
];

export const whyChooseUsData = [
  {
    id: 1,
    title: "More Than 20 Years of Experience",
    description:
      "Our international education counselling experience ensures reliable guidance based on evolving admission trends, visa policies, and university requirements worldwide.",
    icon: IoBusiness,
  },
  {
    id: 2,
    title: "Personalized Counselling",
    description:
      "Every student's journey is different. We recommend universities and courses based on individual goals instead of using a one-size-fits-all approach.",
    icon: IoPerson,
  },
  {
    id: 3,
    title: "Expert Counsellors",
    description:
      "Our knowledgeable counsellors stay updated with the latest admission requirements, scholarships, and visa regulations to provide accurate guidance.",
    icon: GrUserExpert,
  },
  {
    id: 4,
    title: "Complete End-to-End Support",
    description:
      "From your first counselling session until you reach your destination country, our team remains available to support you throughout your study abroad journey.",
    icon: FaPeopleArrows,
  },
  {
    id: 5,
    title: "Transparent & Ethical Guidance",
    description:
      "We provide transparent guidance on admissions, tuition fees, living costs, scholarships, and visa procedures, helping students make informed decisions.",
    icon: FaLightbulb,
  },
  {
    id: 6,
    title: "European Education Specialists",
    description:
      "We help students secure admission to leading European universities with expert guidance on admissions, visas, and post-study career opportunities.",
    icon: GiEuropeanFlag,
  },
];


  export const ielts = [
      {
    id: 1,
    icon: FaGlobe,
    title: "International Recognition",
    description:
      "IELTS is accepted by thousands of universities, colleges, and immigration authorities across the globe. It is one of the most preferred English language tests for students planning to study abroad.",
  },
  {
    id: 2,
    icon: FaBookOpen,
    title: "Complete Skill Development",
    description:
      "Our coaching focuses on all four language skills—Listening, Reading, Writing, and Speaking—through structured lessons, practice exercises, and personalised feedback.",
  },
  {
    id: 3,
    icon: FaGraduationCap,
    title: "Expert Faculty",
    description:
      "Learn from experienced trainers who understand the latest IELTS exam pattern and provide practical strategies to improve your performance.",
  },
  {
    id: 4,
    icon: FaClipboardCheck,
    title: "Regular Practice Tests",
    description:
      "Attend mock exams and practice sessions designed to build confidence, improve time management, and prepare you for the actual test environment.",
  },
  ]

  export const pte  = [
  {
    id: 1,
    icon: FaRobot,
    title: "AI-Based Assessment",
    description:
      "PTE Academic uses computer-based testing with AI scoring, offering a fair and accurate evaluation of your English language skills.",
  },
  {
    id: 2,
    icon: FaBolt,
    title: "Faster Results",
    description:
      "Receive your results quickly, allowing you to proceed with university applications and visa processes without unnecessary delays.",
  },
  {
    id: 3,
    icon: FaLaptopFile,
    title: "Practical Learning Approach",
    description:
      "Our trainers help you master every section of the exam through guided practice, speaking drills, writing exercises, and mock tests.",
  },
  {
    id: 4,
    icon: FaUserCheck,
    title: "Personalised Support",
    description:
      "Every student receives individual attention, helping identify strengths and improve weaker areas before the exam.",
  },
];

export const toefl = [
  {
    id: 1,
    icon: FaGraduationCap,
    title: "Designed for Academic Success",
    description:
      "TOEFL measures the English skills required for studying in an international academic environment and is accepted by leading universities worldwide.",
  },
  {
    id: 2,
    icon: FaBookOpen,
    title: "Skill-Focused Training",
    description:
      "Develop confidence in reading academic passages, listening to lectures, writing structured responses, and speaking fluently.",
  },
  {
    id: 3,
    icon: FaBookAtlas,
    title: "Updated Study Resources",
    description:
      "Access comprehensive learning materials, practice papers, and expert guidance based on the latest TOEFL exam format.",
  },
  {
    id: 4,
    icon: FaChartLine,
    title: "Performance Evaluation",
    description:
      "Track your progress through regular assessments and receive constructive feedback to improve your overall score.",
  },
];

export const duolingo = [
  {
    id: 1,
    icon: FaHouseLaptop,
    title: "Convenient Online Exam",
    description:
      "Prepare for a modern English language test that can be taken from the comfort of your home with flexible scheduling.",
  },
  {
    id: 2,
    icon: FaEarthAmericas,
    title: "Growing Global Acceptance",
    description:
      "Many universities now accept Duolingo English Test scores for admissions, making it a popular choice for international students.",
  },
  {
    id: 3,
    icon: FaLightbulb,
    title: "Smart Preparation",
    description:
      "Our coaching combines interactive practice, vocabulary building, grammar improvement, and mock tests to maximise your performance.",
  },
  {
    id: 4,
    icon: FaArrowTrendUp,
    title: "Quick Score Improvement",
    description:
      "With personalised mentoring and focused preparation, students gain the confidence needed to achieve competitive results.",
  },
];


export const coachingPoints = [
  {
    icon: FaGraduationCap,
    title: "Experienced Trainers",
    description:
      "Learn from qualified instructors with years of experience in English language coaching and study abroad guidance.",
  },
  {
    icon: FaUsers,
    title: "Interactive Learning",
    description:
      "Our classroom sessions encourage active participation, helping students improve communication skills naturally.",
  },
  {
    icon: FaBookOpen,
    title: "Comprehensive Study Material",
    description:
      "Receive updated learning resources, practice papers, and mock tests aligned with the latest exam formats.",
  },
  {
    icon: FaUserGraduate,
    title: "Individual Attention",
    description:
      "We understand that every student learns differently, which is why we provide personalised feedback and one-to-one guidance whenever needed.",
  },
];


export const servicesPage = [
  {
    id: 1,
    title: "Career Counselling",
    icon: FaUserTie,
    img: "/images/services/service/1.webp",
    description:
      "Every successful study abroad journey begins with the right guidance. Our expert counsellors understand your academic background, career goals, interests, and budget before recommending the most suitable study options. We help you make confident decisions that support your long-term career aspirations.",
  },
  {
    id: 2,
    title: "University & Programme Selection",
    icon: FaUniversity,
    img: "/images/services/service/2.webp",
    description:
      "Choosing the right university is one of the most important decisions you'll make. We help you shortlist universities and programmes that match your qualifications, preferences, and future goals. Our team ensures you explore the best academic opportunities based on your profile.",
  },
  {
    id: 3,
    title: "Admission Application Assistance",
    icon: FaFileSignature,
    img: "/images/services/service/3.webp",
    description:
      "Applying to international universities requires accuracy and proper documentation. Our admission experts assist you with application preparation, document verification, university submissions, and follow-ups, ensuring your application is completed correctly and submitted on time.",
  },
  {
    id: 4,
    title: "English Language Test Preparation",
    icon: FaLanguage,
    img: "/images/services/service/4.webp",
    description:
      "A good language test score strengthens your university application. We provide expert coaching and preparation support for IELTS, PTE Academic, and Duolingo English Test, helping students improve their confidence and achieve their target scores.",
  },
  {
    id: 5,
    title: "Student Visa Assistance",
    icon: FaPassport,
    img: "/images/services/service/5.webp",
    description:
      "Our visa specialists guide you through every step of the student visa process. From preparing documents and completing application forms to interview guidance and submission support, we ensure your visa application is organised, accurate, and stress-free.",
  },
  {
    id: 6,
    title: "Education Loan Assistance",
    icon: FaHandHoldingUsd,
    img: "/images/services/service/6.webp",
    description:
      "Financial planning is an important part of studying abroad. We assist students in understanding available education loan options and guide them through the documentation process, helping them secure funding for tuition fees and living expenses.",
  },
  {
    id: 7,
    title: "Pre-Departure Guidance",
    icon: FaPlaneDeparture,
    img: "/images/services/service/7.webp",
    description:
      "Before you leave for your destination, we prepare you for your international journey through our pre-departure sessions. We provide useful information on accommodation, travel, student life, local culture, essential documents, and other important aspects to help you settle comfortably.",
  },
];

 export const franchiseBenefits = [
  {
    id: 1,
    title: "A Trusted Brand with Industry Experience",
    img: "/images/partner-franchise/content/1.webp",
    description:
      "Build your business under a recognised name in overseas education. Backed by years of industry expertise, international university partnerships, and a student-first approach, Indo European helps you establish credibility from the very beginning.",
    icon: FaAward,
  },
  {
    id: 2,
    title: "Complete Business Setup Assistance",
    img: "/images/partner-franchise/content/2.webp",
    description:
      "From office setup guidance to operational planning, we help you build a strong foundation for your franchise. Our experts provide practical support so you can focus on delivering quality counselling and growing your business.",
    icon: FaBuilding,
  },
  {
    id: 3,
    title: "University Partnerships & Admission Support",
    img: "/images/partner-franchise/content/3.webp",
    description:
      "Gain access to a wide network of leading universities across Europe and other popular study destinations. Our dedicated admissions team assists with university applications, documentation, and student processing, making it easier to provide professional services to your clients.",
    icon: FaUniversity,
  },
  {
    id: 4,
    title: "Training That Builds Confidence",
    img: "/images/partner-franchise/content/4.webp",
    description:
      "Knowledge is the key to success in overseas education. We provide regular training sessions covering university updates, admission procedures, visa requirements, counselling techniques, and industry trends, ensuring your team stays ahead in a competitive market.",
    icon: FaGraduationCap,
  },
  {
    id: 5,
    title: "Marketing & Brand Development",
    img: "/images/partner-franchise/content/5.webp",
    description:
      "Growing a business requires visibility. As our franchise partner, you'll receive marketing support, promotional resources, branding guidance, and campaign assistance to help you attract more students and strengthen your presence in your local market.",
    icon: FaBullhorn,
  },
  {
    id: 6,
    title: "Operational Support at Every Stage",
    img: "/images/partner-franchise/content/6.webp",
    description:
      "Running a consultancy involves more than admissions. Our dedicated support team assists you with student applications, documentation, process management, and operational queries, allowing you to deliver a smooth and professional experience.",
    icon: FaHeadset,
  },
];

export const courseCategories = [
  {
    id: 1,
    title: "Business & Management",
    icon: FaBriefcase,
    description:
      "Develop leadership, strategic thinking, and management skills through globally recognised business programmes designed for future entrepreneurs and professionals.",
  },
  {
    id: 2,
    title: "Computer Science & Information Technology",
    icon: FaLaptopCode,
    description:
      "Build expertise in software development, cybersecurity, artificial intelligence, cloud computing, and emerging technologies with industry-focused programmes.",
  },
  {
    id: 3,
    title: "Engineering & Technology",
    icon: FaGear,
    description:
      "Choose from Mechanical, Civil, Electrical, Electronics, Automotive, and other specialised engineering programmes offered by top international universities.",
  },
  {
    id: 4,
    title: "Medicine & Healthcare",
    icon: FaUserDoctor,
    description:
      "Explore rewarding careers in healthcare through programmes in Nursing, Public Health, Pharmacy, Biomedical Sciences, Healthcare Management, and more.",
  },
  {
    id: 5,
    title: "Arts, Design & Humanities",
    icon: FaPalette,
    description:
      "Turn creativity into a profession with programmes in Fine Arts, Graphic Design, Literature, History, Fashion, Interior Design, and related disciplines.",
  },
  {
    id: 6,
    title: "Law & Legal Studies",
    icon: FaScaleBalanced,
    description:
      "Gain a strong understanding of international law, corporate law, human rights, and legal systems while preparing for a global legal career.",
  },
  {
    id: 7,
    title: "Hospitality & Tourism Management",
    icon: FaHotel,
    description:
      "Learn the skills required for careers in hotel management, tourism, event management, and the global hospitality industry.",
  },
  {
    id: 8,
    title: "Environmental Science & Sustainability",
    icon: FaLeaf,
    description:
      "Study climate change, environmental management, renewable energy, and sustainable development through future-focused academic programmes.",
  },
  {
    id: 9,
    title: "Data Science & Artificial Intelligence",
    icon: FaChartLine,
    description:
      "Prepare for high-demand careers by gaining knowledge in data analytics, machine learning, artificial intelligence, and business intelligence.",
  },
  {
    id: 10,
    title: "Media, Communication & Journalism",
    icon: FaNewspaper,
    description:
      "Develop practical communication, digital media, content creation, public relations, and journalism skills for today's fast-changing media landscape.",
  },
  {
    id: 11,
    title: "Education & Teaching",
    icon: FaGraduationCap,
    description:
      "Prepare for careers in education with internationally recognised programmes focused on teaching methodologies, educational leadership, and child development.",
  },
  {
    id: 12,
    title: "Psychology & Social Sciences",
    icon: FaBrain,
    description:
      "Understand human behaviour, mental health, counselling, sociology, and social research through comprehensive academic programmes.",
  },
];


export const courseSelectionPoints = [
  {
    id: 1,
    title: "Understand Your Career Goals",
    icon: FaBullseye,
    description:
      "Our counselors begin by understanding your interests, academic achievements, strengths, and future career plans to recommend the most suitable study options.",
  },
  {
    id: 2,
    title: "Compare Universities & Programmes",
    icon: FaUniversity,
    description:
      "We help you evaluate universities based on curriculum, global rankings, tuition fees, internship opportunities, career prospects, and overall student experience.",
  },
  {
    id: 3,
    title: "Explore Future Career Opportunities",
    icon: FaBriefcase,
    description:
      "Choosing a course isn't just about studying—it’s about building a successful future. We help you select programmes with strong industry demand and excellent employment opportunities.",
  },
  {
    id: 4,
    title: "Review Eligibility Requirements",
    icon: FaClipboardCheck,
    description:
      "Every university has different admission criteria. We guide you through academic requirements, language proficiency, documentation, and application deadlines to ensure you're fully prepared.",
  },
  {
    id: 5,
    title: "Receive Personalised Expert Guidance",
    icon: FaUserTie,
    description:
      "With years of experience in overseas education, our counsellors provide one-to-one support, helping you make confident decisions throughout your admission journey.",
  },
];

export const accommodationCards = [
        {
            id: 1,
            title: "University Accommodation",
            icon: FaUniversity,
            image: "/images/accommodation/content/university-accommodation.webp",
            description:
            "Many international universities offer on-campus or university-managed housing that provides a secure and student-friendly environment. We help you explore available accommodation options, understand the application process, and complete bookings within the required timelines. Living on campus also gives students easy access to university facilities and a vibrant student community.",
        },
        {
            id: 2,
            title: "Private Student Accommodation",
            icon: FaBuilding,
            image: "/images/accommodation/content/private-student-accommodation.webp",
            description:
            "For students looking for greater independence, private accommodation offers flexibility and a wider range of living options. We assist you in finding reliable student apartments, shared housing, studio rooms, and private residences located near your university. Our goal is to help you choose accommodation that matches both your lifestyle and budget.",
        },
        {
            id: 3,
            title: "Accommodation Booking Guidance",
            icon: FaClipboardCheck,
            image: "/images/accommodation/content/accommodation-booking-guidance.webp",
            description:
            "Booking accommodation in another country can be confusing, especially if you're unfamiliar with local rental procedures. Our team provides step-by-step assistance with accommodation booking, helping you understand rental agreements, payment terms, booking requirements, and other important formalities before you confirm your stay.",
        },
        {
            id: 4,
            title: "Budget-Friendly Housing Solutions",
            icon: FaWallet,
            image: "/images/accommodation/content/budget-friendly-housing-solutions.webp",
            description:
            "Every student has different financial priorities. We help you compare accommodation options based on rent, facilities, travel convenience, and overall living expenses. Our personalized recommendations ensure you find quality accommodation that offers both comfort and value.",
        },
        {
            id: 5,
            title: "Safe & Convenient Locations",
            icon: FaShieldAlt,
            image: "/images/accommodation/content/safe-and-convenient-locations.webp",
            description:
            "Safety is one of the most important factors when choosing student accommodation. We guide you towards trusted housing options located close to universities or well-connected through public transportation. Easy access to supermarkets, healthcare services, restaurants, and daily essentials ensures a comfortable student experience abroad.",
        },
        {
            id: 6,
            title: "Pre-Arrival Support",
            icon: FaPlaneArrival,
            image: "/images/accommodation/content/pre-arrival-support.webp",
            description:
            "Our support doesn't stop once your accommodation is booked. Before your departure, we provide useful guidance on what to expect after arrival, essential documents to carry, accommodation rules, local regulations, and practical tips that help you settle into your new home quickly and confidently.",
        },
    ];

  export const accommodationFeatures = [
  {
    id: 1,
    title: "Personalised Recommendations",
    icon: FaUserCheck,
    image: "/images/accommodation/personalised-recommendations.webp",
    description:
      "We understand that every student has unique preferences. Our team recommends accommodation based on your budget, location preferences, and lifestyle requirements.",
  },
  {
    id: 2,
    title: "Trusted Housing Options",
    icon: FaShieldAlt,
    image: "/images/accommodation/trusted-housing.webp",
    description:
      "We guide students towards reliable accommodation choices that offer a safe, comfortable, and welcoming environment.",
  },
  {
    id: 3,
    title: "Complete Booking Support",
    icon: FaClipboardCheck,
    image: "/images/accommodation/booking-support.webp",
    description:
      "From selecting accommodation to understanding rental procedures and documentation, we provide assistance throughout the booking process.",
  },
  {
    id: 4,
    title: "Student-Focused Guidance",
    icon: FaUserGraduate,
    image: "/images/accommodation/student-guidance.webp",
    description:
      "Our experienced counsellors help you make informed decisions, ensuring your accommodation complements your overall study abroad experience.",
  },
];


export const coachingPartnerBenefits = [
  {
    id: 1,
    title: "Strengthen Your Test Preparation Programs",
    description:
      "Offer students comprehensive preparation for internationally recognised English language tests, including IELTS, PTE, TOEFL, and Duolingo English Test. With updated learning resources and expert support, your coaching centre can provide quality training that builds student confidence and improves results.",
    image: "/images/coaching-centres/content/1.webp",
    icon: FaGraduationCap,
  },
  {
    id: 2,
    title: "Curriculum & Academic Support",
    description:
      "Deliver structured learning with professionally designed study materials and updated curriculum support. We help you maintain high academic standards by providing guidance that aligns with current exam patterns and international education requirements.",
    image: "/images/coaching-centres/content/2.webp",
    icon: FaBookOpen,
  },
  {
    id: 3,
    title: "Faculty Training & Skill Development",
    description:
      "Great educators create successful students. Our training sessions help your teaching staff stay updated with modern teaching methods, exam trends, and classroom strategies, enabling them to deliver a more engaging and effective learning experience.",
    image: "/images/coaching-centres/content/3.webp",
    icon: FaChalkboardTeacher,
  },
  {
    id: 4,
    title: "Expand Your Student Reach",
    description:
      "Adding study abroad services to your coaching centre creates new opportunities for student engagement. From language preparation to overseas admissions and visa guidance, you can offer complete solutions under one roof, attracting more students and increasing long-term enrolments.",
    image: "/images/coaching-centres/content/4.webp",
    icon: FaUsers,
  },
  {
    id: 5,
    title: "Marketing & Brand Support",
    description:
      "As our coaching partner, you'll benefit from promotional support, marketing resources, and co-branding opportunities that help strengthen your local presence. Our team works with you to build awareness, generate quality enquiries, and support your business growth.",
    image: "/images/coaching-centres/content/5.webp",
    icon: FaBullhorn,
  },
];

export const corporatePartnerBenefits = [
  {
    id: 1,
    title: "Unlock New Business Opportunities",
    description:
      "Partnering with Indo European gives your business access to a growing market of students and families seeking trusted overseas education solutions. Together, we can introduce value-added services that strengthen customer relationships while creating new revenue opportunities.",
    image: "/images/other-businesses/content/1.webp",
    icon: FaChartLine,
  },
  {
    id: 2,
    title: "Expand Your Service Portfolio",
    description:
      "Different businesses serve different customer needs, but many clients also seek guidance for international education. Through our partnership, you can offer services such as overseas education counselling, university admissions, student visa guidance, scholarship support, and pre-departure assistance without developing these services from scratch.",
    image: "/images/other-businesses/content/2.webp",
    icon: FaBriefcase,
  },
  {
    id: 3,
    title: "Co-Marketing & Brand Visibility",
    description:
      "Increase your brand presence through collaborative campaigns, educational events, seminars, workshops, and digital promotions. Our marketing initiatives help partners reach a wider audience while building credibility through association with a trusted study abroad consultancy.",
    image: "/images/other-businesses/content/3.webp",
    icon: FaBullhorn,
  },
  {
    id: 4,
    title: "Business Support That Drives Growth",
    description:
      "Every partnership is backed by our experienced team. From onboarding and operational guidance to promotional support and ongoing coordination, we work closely with our partners to ensure a smooth and productive collaboration.",
    image: "/images/other-businesses/content/4.webp",
    icon: FaHandshake,
  },
];

export const partnershipBenefits = [
  {
    id: 1,
    title: "Trusted Industry Experience",
    description:
      "With years of expertise in overseas education and a strong international university network, we help businesses build credibility while delivering quality services to their customers.",
    image: "/images/other-businesses/content/5.webp",
    icon: FaAward,
  },
  {
    id: 2,
    title: "Flexible Partnership Model",
    description:
      "Every business has different objectives. Our partnership approach is flexible and designed to align with your business model, target audience, and long-term goals.",
    image: "/images/other-businesses/content/6.webp",
    icon: FaSlidersH,
  },
  {
    id: 3,
    title: "Dedicated Relationship Support",
    description:
      "Our team remains connected throughout the partnership, ensuring timely communication, operational assistance, and continuous support whenever required.",
    image: "/images/other-businesses/content/7.webp",
    icon: FaHeadset,
  },
  {
    id: 4,
    title: "Long-Term Growth Focus",
    description:
      "We don't believe in short-term collaborations. Our objective is to build lasting business relationships that generate mutual success and deliver consistent value over time.",
    image: "/images/other-businesses/content/8.webp",
    icon: FaChartLine,
  },
];

export const institutionalPartnerBenefits = [
  {
    id: 1,
    title: "Reach the Right Students",
    description:
      "Our extensive network allows your institution to connect with students from different academic backgrounds who are actively exploring international education opportunities. We promote your programmes through counselling sessions, educational events, digital campaigns, and student engagement activities, helping you reach the right audience at the right time.",
    image: "/images/overseas-institutes/content/1.webp",
    icon: FaUsers,
  },
  {
    id: 2,
    title: "Professional Student Recruitment",
    description:
      "We believe successful recruitment starts with quality counselling. Every student receives personalized guidance based on their academic qualifications, career goals, financial planning, and preferred destination. This helps institutions receive genuine and well-informed applications, improving overall admission outcomes.",
    image: "/images/overseas-institutes/content/2.webp",
    icon: FaUserGraduate,
  },
  {
    id: 3,
    title: "End-to-End Admission Coordination",
    description:
      "Our dedicated admissions team manages every stage of the application process with accuracy and efficiency. From document verification and application submission to offer letters and visa guidance, we ensure a seamless experience for both students and partner institutions.",
    image: "/images/overseas-institutes/content/3.webp",
    icon: FaClipboardCheck,
  },
  {
    id: 4,
    title: "Strengthen Your Presence in the Indian Market",
    description:
      "Building visibility in a competitive education market takes time and local knowledge. Through seminars, webinars, education fairs, school outreach programmes, and targeted marketing initiatives, we help overseas institutes increase brand awareness and strengthen their presence across India.",
    image: "/images/overseas-institutes/content/4.webp",
    icon: FaMapMarkedAlt,
  },
  {
    id: 5,
    title: "Dedicated Institutional Support",
    description:
      "Every collaboration should receive individualized care, in our opinion. Throughout the admissions cycle, our staff keeps in constant contact with partner universities, discusses student feedback, offers market insights, and assists with recruiting plans. This cooperative strategy fosters enduring connections based on openness and trust.",
    image: "/images/overseas-institutes/content/5.webp",
    icon: FaHandsHelping,
  },
];

