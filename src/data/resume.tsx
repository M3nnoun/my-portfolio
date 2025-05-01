import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdelfatah MENNOUN",
  initials: "AM",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "From Raw Data to Smart Decisions — Data Scientist & Full Stack Problem Solver",
  summary:
    "I’m **Abdelfatah**, a passionate **Data Scientist** from Morocco 🇲🇦 with a strong background in **data extraction**, **web scraping**, **data analysis**, and **visualization**, combined with solid experience in **full stack web development** using **Next.js**. My technical stack includes **Python (Pandas, NumPy)**, **R**, **SQL (relational & non-relational databases)**, **Power BI**, and tools like **BeautifulSoup** and **Scrapy** for collecting data from the web. With a solid understanding of **mathematics**, **statistics**, and **data structures & algorithms**, I excel at solving complex problems and turning raw data into actionable insights through **interactive dashboards** and clear visual storytelling. Beyond data, I’m also **passionate about startups** and love working on innovative projects where **data meets entrepreneurship**, helping businesses make smarter decisions and unlock new opportunities. Let’s connect and create impactful solutions together!",
  avatarUrl: "/me.png",
  skills: [
    "Statistical Data Analysis",
    "Data Visualization",
    "Data Cleaning",
    "Data Collection",
    "Statistical Modeling",
    "Problem Solving",
    "Python",
    "R",
    "Microsoft Power BI",
    "IBM SPSS",
    "Data Mining and Machine Learning",
    "Extract, Transform, Load (ETL)",
    "Sampling",
    "Advanced Algorithms",
    "Artificial Intelligence",
    "Big Data",
    "Algorithms",
    "Data Structures",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mennoun.abdelfatah@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/M3nnoun",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdelfatah-mennoun/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/m3nnoun",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@abdelfata7_m3nnoun",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
 work: [
    {
      company: "Upwork",
      href: "https://www.upwork.com/freelancers/~0162553bf33be14cdd",
      badges: ['freelance'],
      location: "Remote",
      title: "Data Analyst",
      logoUrl: "/upwork.svg",
      start: "Apr 2022",
      end: "Present",
      description:
        "Freelance role involving statistical data analysis, automation engineering, and data visualization using tools like Pandas, Python, and Microsoft Power BI. Focused on data cleaning, collection, and statistical modeling to provide actionable insights.",
    },
    {
      company: "Self-employed",
      badges: ['freelance'],
      href: "",
      location: "Remote",
      title: "Data Analysis",
      logoUrl: "fiverr.jpg",
      start: "Oct 2021",
      end: "Present",
      description:
        "Conducted data analysis with a focus on problem-solving, data cleaning, and web scraping. Utilized Python, Microsoft Excel, and Google Sheets for automation and dashboard creation. Applied statistical analysis and data mining techniques to support decision-making processes.",
    },
    {
      company: "Haut Commissariat au Plan",
      href: "",
      badges: [],
      location: "Morocco",
      title: "Field Research Specialist (Moroccan National Census 2024)",
      logoUrl: "hcp-rec.png",
      start: "Aug 2024",
      end: "Oct 2024",
      description:
        "Worked on the Moroccan National Census 2024, a large-scale project occurring every 10 years. Developed communication skills by interacting directly with respondents, explaining complex concepts, and gathering accurate information. Gained insights from diverse life experiences and backgrounds.",
    },
    
    {
      company: "Self-employed",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full-stack Developer",
      logoUrl: "fiverr.jpg",
      start: "Apr 2021",
      end: "Oct 2023",
      description:
        "Developed full-stack applications using technologies like PHP, Next.js, React.js, Laravel, and JavaScript. Focused on both front-end and back-end development, including automation and e-commerce solutions.",
    },
    {
      company: "Haut Commissariat au Plan",
      href: "",
      badges: ["internship"],
      location: "Laayoune-Sakia El Hamra, Morocco",
      title: "Statistician",
      logoUrl: "hcp.png",
      start: "Mar 2024",
      end: "May 2024",
      description:
        "Worked on the development of Sustainable Development Goals (SDGs) in the Laayoune-Sakia El Hamra region. Collected and analyzed data using various statistical techniques, including SPSS. Gained hands-on experience in data collection, analysis, and reporting to support regional development initiatives.",
    },
    {
      company: "Private School El Hikma",
      href: "",
      badges: ["internship"],
      location: "",
      title: "Software Developer",
      logoUrl: "elhikma.png",
      start: "May 2023",
      end: "Jun 2023",
      description:
        "Internship role involving project management and software development using Java and Java Swing. Gained experience in database management and communication skills.",
    },
    {
      company: "Es Semara Province",
      href: "",
      badges: ["internship"],
      location: "On-site",
      title: "Software Developer",
      logoUrl: "smara.png",
      start: "Aug 2022",
      end: "Sep 2022",
      description:
        "Internship role focused on software development using Visual Basic .NET (VB.NET) and Unified Modeling Language (UML). Involved in project management and understanding the software development life cycle (SDLC).",
    },
  ],
  education: [
    {
      school: "National Institute of Statistics and Applied Economics (INSEA)",
      href: "https://insea.ac.ma/",
      degree: "Master's degree, Information Systems and Intelligent Systems",
      logoUrl: "insea.png",
      start: "Oct 2024",
      end: "Sep 2026",
    },
    {
      school: "Higher School of Technology Laayoune",
      href: "http://w2.estl.ac.ma/",
      degree: "Bachelor's degree, Statistics and Business Intelligence",
      logoUrl: "est.png",
      start: "Oct 2023",
      end: "Jun 2024",
    },
    {
      school: "Preparatory Classes for Higher Technician Certificate",
      href: "",
      degree: "Higher Technician Certificate (BTS), Information Systems Development",
      logoUrl: "bts.png",
      start: "Oct 2021",
      end: "Jun 2023",
    },
  ],
  projects: [
    {
      title: "Bike Sharing Analytics Dashboard",
      dates: "Jan 2023 - Mar 2023",
      active: false,
      description: "Developed an interactive Power BI dashboard to analyze key metrics of a bike-sharing dataset, including total trips, average speed, and weather-based usage patterns. The dashboard highlights trends over time, bike usage distribution by weather conditions, and percentage breakdowns for weekends and holidays.",
      technologies: ["Power BI", "Excel", "SQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/m3nnoun/bike-sharing-analytics",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/bike-sharing.jpg",
      video: "",
      href:"/blog/bike-sharing-analytics"
    },
    {
      title: "JustWatch Data Scraping Project",
      dates: "Feb 2023 - Apr 2023",
      active: false,
      description: "Built a Python script to scrape movie and TV show data from the JustWatch platform, extracting details such as titles, genres, release dates, and availability across various streaming services.",
      technologies: ["Python", "BeautifulSoup", "Pandas"],
      links: [
        {
          type: "Source",
          href: "https://github.com/m3nnoun/justwatch-scraping",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/justwatch.jpg",
      video: "",
    },
    {
      title: "Olympic Athletes Data Analysis",
      dates: "Mar 2023 - May 2023",
      active: false,
      description: "Analyzed Olympic athletes' data to uncover insights into performance metrics, demographic distributions, and medal trends over time. Visualized average height and weight, gender distribution, and medal counts by region and gender.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      links: [
        {
          type: "Source",
          href: "https://github.com/m3nnoun/olympic-athletes-analysis",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/olympic-athletes.jpg",
      video: "",
    },
    {
      title: "HR Analytics: Absenteeism Analysis",
      dates: "Apr 2023 - Jun 2023",
      active: false,
      description: "Analyzed employee absenteeism data to uncover patterns and key factors influencing workforce productivity. Examined variables such as reasons for absence, education levels, BMI, and transportation expenses.",
      technologies: ["Power BI", "Excel", "SQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/m3nnoun/hr-analytics-absenteeism",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/hr-analytics.jpg",
      video: "",
    },
    {
      title: "Hotel Booking Analytics",
      dates: "May 2023 - Jul 2023",
      active: false,
      description: "Analyzed hotel booking data to optimize revenue and understand customer behavior. Performed exploratory data analysis using Python and SQL, and visualized key metrics in Power BI.",
      technologies: ["Python", "SQL", "Power BI", "Pandas"],
      links: [
        {
          type: "Source",
          href: "https://github.com/m3nnoun/hotel-booking-analytics",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/hotel-booking.jpg",
      video: "",
    },
    {
      title: "Sales Insights & Optimization",
      dates: "Jun 2023 - Aug 2023",
      active: false,
      description: "Analyzed sales data to uncover key insights into revenue trends, best-selling products, and optimal advertising strategies. Identified peak sales months, top-performing cities, and popular product combinations.",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      links: [
        {
          type: "Source",
          href: "https://github.com/m3nnoun/sales-insights-optimization",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/sales-insights.jpg",
      video: "",
    },
    {
      title: "Sales Performance Analysis",
      dates: "Jul 2023 - Sep 2023",
      active: false,
      description: "Provided a comprehensive analysis of sales performance, focusing on regional distribution, yearly trends, and revenue breakdown by product type. Visualized key metrics using Power BI.",
      technologies: ["Power BI", "Excel", "SQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/m3nnoun/sales-performance-analysis",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/sales-performance.jpg",
      video: "",
    },
    {
      title: "E-commerce Data Scraping",
      dates: "Aug 2023 - Oct 2023",
      active: false,
      description: "Extracted detailed product data from Shopify using Python's web scraping tools. Collected titles, categories, SKUs, images, sizes, and colors for comprehensive e-commerce analysis.",
      technologies: ["Python", "BeautifulSoup", "Scrapy", "Pandas"],
      links: [
        {
          type: "Source",
          href: "https://github.com/m3nnoun/ecommerce-scraping",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/ecommerce-scraping.jpg",
      video: "",
    },
    {
      title: "Automated Contact Information Extraction",
      dates: "Sep 2023 - Nov 2023",
      active: false,
      description: "Automated the extraction of contact information from websites using Python. Gathered names, email addresses, phone numbers, and social media links for marketing and outreach purposes.",
      technologies: ["Python", "BeautifulSoup", "Scrapy", "Pandas"],
      links: [
        {
          type: "Source",
          href: "https://github.com/m3nnoun/contact-info-extraction",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/contact-extraction.jpg",
      video: "",
    },
    {
      title: "Scraping Glovo Maroc Listing Data",
      dates: "Oct 2023 - Dec 2023",
      active: false,
      description: "Used Playwright to scrape listing data from Glovo Maroc, extracting details such as product names, prices, and availability for further analysis.",
      technologies: ["Python", "Playwright", "Pandas"],
      links: [
        {
          type: "Source",
          href: "https://github.com/m3nnoun/glovo-scraping",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/glovo-scraping.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Moroccan Days of Future Data Scientists (MDFDS)",
      dates: "April 26th - 27th, 2025",
      location: "ESI, Rabat, Morocco",
      description:
        "Developed a system to help hospitals predict patient volume and manage patient prioritization effectively.",
      image: "/mdfs.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Google Chrome Built-in AI Challenge",
      dates: "October 1st – December 3rd, 2024",
      location: "Online",
      description:
        "Developed a Chrome-integrated application using Google Gemini AI that generates personalized and contextual messages based on user conversations.",
      image: "/google-hack.jpg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/M3nnoun/conversAI",
        },
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://convers-ai.vercel.app/",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/conversai",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/W1X1kt9Vl9Q",
        },
      ],
    }
  ],
} as const;
