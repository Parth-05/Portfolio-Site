import { backend, cp, frontend, kafka, aws, movix } from '../assets';
import { python, sql, django, flask, css, git, html, javascript, mongodb, nodejs, reactjs, tailwind, tableau, spark, materialui, typescript, api, bookRecommender, flightPricePredictor, creditCardFraudDetection, roadAccidentDashboard, uberDataEngineering} from '../assets';

export const resumeLink = "https://drive.google.com/file/d/1Um3p-bN1T3MhBbYfHodtWvWTtkM-aFlE/view";

export const aboutMe = `Hello, I am Parth Marathe. \n I am passionate about working in a challenging environment where I can utilize and apply my knowledge and skills which would enable me to fulfill organizational goals. \n Currently, I am pursuing an MS in Data Analytics from San Jose State University and during my academic pursuits, I have taken courses in several areas of study, including Database Management Systems, Big Data, Data Visualization, Deep Learning, and Machine Learning and have done some interesting projects in this domain so far. \n Previously, I worked as a Software Development Engineer at RIA Adivosry, a leading banking software company. \n I have worked with frameworks like Spring Boot to develop RESTful APIs and have utilized Angular.js to develop single-page applications. \n I am eagerly looking for opportunities to prove myself as a better Software Professional.`

export const skills = [
    {title: "Data Scientist", icon: cp}, 
    {title: "Data Analyst", icon: frontend}, 
    {title: "FrontEnd Developer", icon: backend}, 
    {title: "Backend Developer", icon: aws}
];

export const frameworks = [
    {title: 'React', icon: reactjs, invert: false }, 
    {title: 'Node.js', icon: nodejs, invert: true }, 
    {title: 'Tailwind', icon: tailwind, invert: false },
    {title: 'Material UI', icon: materialui, invert: false },
    {title: 'Django', icon: django, invert: true },
    {title: 'Flask', icon: flask, invert: true },
    {title: 'Git', icon: git, invert: false },
    // {title: 'Docker', icon: docker, invert: false }, 
    {title: 'Kafka', icon: kafka, invert: true }, 
    // {title: 'Spring Boot', icon: springboot, invert: false }, 
]

export const languages = [
    {title: 'Python', icon: python, invert: false }, 
    // {title: 'C++', icon: cpp, invert: false }, 
    // {title: 'C', icon: c, invert: false }, 
    // {title: 'Java', icon: java, invert: false }, 
    {title: 'HTML', icon: html, invert: false }, 
    {title: 'CSS', icon: css, invert: false }, 
    {title: 'Javascript', icon: javascript, invert: false }, 
    {title: 'TypeScript', icon: typescript, invert: false }, 
    {title: 'SQL', icon: sql, invert: true }, 
    {title: 'MongoDB', icon: mongodb, invert: false },
    // {title: 'Redis', icon: redis, invert: false }
];

export const websites = [
    {
        title: 'Movix', 
        description: "A user-friendly website designed to help users search for movies to watch. Utilizing the TMDB API, it provides detailed movie information including synopses, ratings, and trailers. Users can easily browse and find new movie recommendations. The frontend is built with React for a smooth experience, styled with SCSS, and the backend is powered by Node.js to handle API requests efficiently. This website aims to enhance your movie discovery process.", 
        stack: [reactjs, css, javascript, nodejs, api],

        link: 'https://movix-alpha-steel.vercel.app/',
        source: "https://github.com/Parth-05/Movix"
    },
    {
        title: 'BookWise', 
        description: 'A website that helps users discover new books by searching for one book. Developed using Python, JavaScript, and Flask, the app leverages a data-driven recommendation system to provide personalized book suggestions. By implementing popularity-based algorithms and collaborative filtering techniques, it optimizes user interactions and enhances the discovery experience. The app offers an intuitive and engaging way for users to find their next great read.', 
        stack: [python, javascript, flask],
        link: 'https://book-recommendation-system-vrod.onrender.com/',
        source: "https://github.com/Parth-05/Book-Recommendation-System"
    },
    {
        title: 'Flght Price Predictor', 
        description: 'App that helps users predict the flight prices. Built with Python, React, and Flask, the app leverages advanced machine learning algorithms to forecast future flight prices. By analyzing historical data and various influencing factors, it provides accurate and reliable price predictions. The web app offers a user-friendly interface, allowing users to easily search for flights and view price trends. This tool helps users make informed decisions and potentially save money on their flight bookings.', 
        stack: [reactjs, materialui, javascript, flask, python],
        link: 'https://flight-price-predictor-08xr.onrender.com/',
        source: "https://github.com/Parth-05/Flight-Price-Prediction/blob/main/Flight%20Price%20Prediction%20EDA.ipynb"
    },
]

export const projects = [
    {
        title: "Uber Data Engineering",
        description: "This project involves the analysis of Uber data from November 2023 to February 2024. The primary goal was to extract, transform, and load (ETL) the data using Apache Spark, create a data warehouse, and generate key performance indicators (KPIs) and insights. The final step was to visualize these insights using Tableau and publish a comprehensive dashboard.",
        stack: [python, spark, tableau],
        source: "https://github.com/Parth-05/uber-data-engineer",
        media: uberDataEngineering
    },
    {
        title: "Book Recommendation System",
        description: "This project is a user-friendly website designed to help users find book recommendations by searching for a single book. Leveraging a Python-based, data-driven recommendation system, it provides personalized book suggestions tailored to user preferences. Utilizing popularity-based algorithms and collaborative filtering, it ensures accurate and relevant recommendations. The frontend is built with React for a smooth and responsive user experience, while SCSS is used for elegant styling. The backend, powered by Flask, efficiently handles API requests and data processing. This website aims to enhance the book discovery process, making it easier for users to find their next great read.",
        stack: [python],
        source: "https://github.com/Parth-05/Book-Recommendation-System",
        media: bookRecommender
    },
    {
        title: "Movix",
        description: "This project is a user-friendly website designed to help users search for movies to watch. Utilizing the TMDB API, it provides comprehensive movie information, including synopses, ratings, and trailers, allowing users to make informed choices. Users can easily browse through a vast database of movies and discover new recommendations based on their interests. The frontend is built with React, ensuring a smooth and responsive user experience, while SCSS is used for elegant and maintainable styling. The backend, powered by Node.js, efficiently handles API requests and server-side operations. With intuitive navigation and detailed movie insights, this website aims to enhance your movie discovery process, making it enjoyable and straightforward.",
        stack: [javascript, html, css, git],
        source: "https://github.com/Parth-05/Movix",
        media: movix
    },
    {
        title: "Flight Price Predictor",
        description: "This app helps users predict flight prices, enabling them to find the best time to book flights. Built with Python, React, and Flask, the app leverages advanced machine learning algorithms to forecast future flight prices accurately. By analyzing historical data and various influencing factors, it provides reliable price predictions. The web app offers a user-friendly interface, allowing users to easily search for flights and view price trends. With intuitive design and detailed insights, this tool helps users make informed decisions and potentially save money on their flight bookings. The backend efficiently handles data processing and API requests, ensuring smooth and responsive performance. This app aims to enhance the flight booking experience by providing valuable price prediction information.",
        stack: [python],
        source: "https://github.com/Parth-05/Flight-Price-Prediction/blob/main/Flight%20Price%20Prediction%20EDA.ipynb",
        media: flightPricePredictor
    },
    {
        title: "Credit Card Fraud Detection",
        description: "This project focuses on detecting credit card fraud through advanced data analysis and machine learning techniques. Conducted thorough dataset analysis to identify key patterns and anomalies indicative of fraudulent activity. Addressed the challenge of imbalanced data using the SMOTE technique, which enhanced model performance by 15%. Implemented and optimized various machine learning models, employing GridSearchCV to fine-tune hyperparameters effectively. The improved models demonstrated higher accuracy and reliability in detecting fraudulent transactions. The project showcases robust analytical skills and the ability to apply sophisticated techniques to solve real-world problems. It highlights the importance of data preprocessing and model optimization in achieving superior results. This work contributes to the broader effort of enhancing financial security.",
        stack: [python],
        source: "https://github.com/Parth-05/Credit-Card-Fraud-Detection/blob/master/Credit%20Card%20Fraud%20Detection.ipynb",
        media: creditCardFraudDetection
    },
    {
        title: "Road Accident Dashboard using Tableau",
        description: "This project aimed to improve road safety by conducting comprehensive data analysis to identify key performance indicators (KPIs) such as accident frequency, high-risk locations, and peak incident times. By implementing advanced data visualization techniques in Tableau, the project enhanced the understanding of key accident risk factors. It presented road accident trends and patterns in an accessible manner. Additionally, the project increased the reliability and accuracy of accident hotspot identification for road safety planning by identifying and resolving data inconsistencies within the dashboard. This work demonstrates the effective use of data analysis and visualization to drive targeted intervention opportunities and improve safety trends. The project's outcomes contribute significantly to informed decision-making in road safety planning.",
        stack: [python, tableau],
        source: "https://public.tableau.com/app/profile/parth.marathe/viz/AnalysisofFatalAccidentsDashboard/ANALYSISOFFATALACCIDENTSDASHBOARD",
        media: roadAccidentDashboard
    },
]