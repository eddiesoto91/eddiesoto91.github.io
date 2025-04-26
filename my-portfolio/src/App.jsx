import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // You can later move this projects array to a separate file or fetch from an API
  const projects = [
    {
      title: "Sales Dashboard Analysis",
      image: "/projects/HR_Attrition.png", // Place this image in your public/ folder
      description: "This is a personal side project where I explored employee attrition patterns using synthetic data modeled after real-world scenarios. The Power BI dashboard I created provides insights into factors influencing staff turnover, such as tenure, department, and performance ratings. Through advanced visualizations and DAX calculations, the analysis highlights actionable trends and supports the development of targeted retention strategies.",
      novypro: "https://www.novypro.com/",
      medium: "https://medium.com/@eddie.sotocastillo",
    },
    {
      title: "Customer Segmentation with Python",
      image: "/project2.jpg",
      description: "In this project, I utilized Python to perform customer segmentation using clustering techniques. By analyzing customer behavior and demographics, I identified distinct segments that can be targeted with personalized marketing strategies. The project involved data preprocessing, feature selection, and the application of K-means clustering.",
      novypro: "https://www.novypro.com/",
      medium: "https://medium.com/@eddie.sotocastillo",
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Description Section */}
      <header className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          {/* Profile image */}
          <img
            src="/profile_picture.png" // Place your profile image in public/
            width={150}
            height={150}
            alt="Your Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white object-cover"
          />
          {/* Name and title */}
          <h1 className="text-3xl font-bold mb-2">Eddie Soto</h1>
          <h2 className="text-xl mb-4">Data Analyst | BI Developer | Information Management</h2>
          {/* Brief description */}
          <p className="max-w-2xl mx-auto text-lg">
            {/* Replace this with your own description */}
            I am a Computer Science Engineer and Data Analyst with a passion for transforming data into actionable insights. I specialize in data visualization, statistical analysis, and business intelligence. Explore my projects below!
          </p>
        </div>
      </header>



      <main className="container mx-auto px-4 py-12">

        <h2 className="text-2xl font-bold text-primary mb-8 text-center">
          Site under construction
        </h2>

        {/* Projects Section 
        <section>
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Projects
          </h2>
          // Projects grid
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, id_project) => (
              <div
                key={id_project}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href={project.novypro}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
                    >
                      View on NovyPro
                    </a>
                    <a
                      href={project.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
                    >
                      Read on Medium
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        */}

      </main>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 bg-gray-100 rounded-lg shadow-md">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-md text-blue-700 bg-white hover:bg-blue-100 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-sm"
              aria-label="Visitar mi perfil de LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://https://github.com/eddiesoto91"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out"
            >
              GitHub
            </a>
            <a
              href="mailto:eddie.sotocastillo@gmail.com"
              className="text-red-600 hover:text-red-800 transition duration-300 ease-in-out"
            >
              Email
            </a>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Eddie Soto. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
