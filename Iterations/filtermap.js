const jobApplications = [
    { 
      id: 101, 
      applicantName: "Aditi Sharma", 
      role: "Frontend Developer", 
      experience: 2.5, // years
      status: "pending", 
      skills: ["React", "JavaScript", "CSS"]
    },
    { 
      id: 102, 
      applicantName: "Ravi Mehra", 
      role: "Backend Developer", 
      experience: 4, 
      status: "rejected", 
      skills: ["Node.js", "Express", "MongoDB"]
    },
    { 
      id: 103, 
      applicantName: "Sneha Nair", 
      role: "UI/UX Designer", 
      experience: 3, 
      status: "selected", 
      skills: ["Figma", "Adobe XD", "CSS"]
    },
    { 
      id: 104, 
      applicantName: "Aman Joshi", 
      role: "Full Stack Developer", 
      experience: 5, 
      status: "pending", 
      skills: ["React", "Node.js", "GraphQL"]
    },
    { 
      id: 105, 
      applicantName: "Pooja Batra", 
      role: "Product Manager", 
      experience: 6.5, 
      status: "selected", 
      skills: ["Agile", "Scrum", "Roadmapping"]
    },
    { 
      id: 106, 
      applicantName: "Karan Patel", 
      role: "Data Analyst", 
      experience: 1.5, 
      status: "pending", 
      skills: ["Excel", "SQL", "Power BI"]
    },
    { 
      id: 107, 
      applicantName: "Divya Singh", 
      role: "DevOps Engineer", 
      experience: 3, 
      status: "rejected", 
      skills: ["Docker", "Kubernetes", "AWS"]
    },
    { 
      id: 108, 
      applicantName: "Vikram Rana", 
      role: "Security Engineer", 
      experience: 4.2, 
      status: "selected", 
      skills: ["Network Security", "Python", "Firewalls"]
    },
    { 
      id: 109, 
      applicantName: "Neha Deshmukh", 
      role: "Machine Learning Engineer", 
      experience: 2.8, 
      status: "pending", 
      skills: ["Python", "TensorFlow", "Pandas"]
    },
    { 
      id: 110, 
      applicantName: "Sahil Khan", 
      role: "QA Engineer", 
      experience: 2, 
      status: "selected", 
      skills: ["Selenium", "Cypress", "TestRail"]
    }
  ];
  
const application = jobApplications.filter((applicant) =>applicant.applicantName === 'Neha Deshmukh')
console.log(application)

const years = jobApplications.filter((ex) =>{return ex.experience > 4})

console.log(years)

