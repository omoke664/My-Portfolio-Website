// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add preloader
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(preloader);
    
    // Remove preloader after page loads
    window.addEventListener('load', function() {
      preloader.classList.add('fade-out');
      setTimeout(function() {
        preloader.remove();
      }, 500);
    });
    
    // Add theme toggle button
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(themeToggle);
    
    // Add back to top button
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);
    
    // Check if dark mode is enabled in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
    });
    
    // Back to top button functionality
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Select DOM elements
    const navbar = document.querySelector('.navbar');
    const navList = document.querySelector('.nav-list');
    
    // Add mobile menu toggle button
    if (navbar && !document.querySelector('.mobile-menu-toggle')) {
      const mobileMenuToggle = document.createElement('button');
      mobileMenuToggle.className = 'mobile-menu-toggle';
      mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      navbar.appendChild(mobileMenuToggle);
      
      const mobileCloseButton = document.createElement('button');
      mobileCloseButton.className = 'mobile-close';
      mobileCloseButton.innerHTML = '<i class="fas fa-times"></i>';
      navList.appendChild(mobileCloseButton);
      
      // Mobile menu toggle functionality
      mobileMenuToggle.addEventListener('click', function() {
        navList.classList.add('active');
      });
      
      mobileCloseButton.addEventListener('click', function() {
        navList.classList.remove('active');
      });
      
      // Close mobile menu when clicking on a link
      const navLinks = navList.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          navList.classList.remove('active');
        });
      });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        if (this.hash !== "" && this.hash.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(this.hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Custom cursor effect
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });

      // Hover effect on interactive elements
      const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .experience-item');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.style.width = '50px';
          cursor.style.height = '50px';
          cursor.style.backgroundColor = 'rgba(30, 144, 255, 0.2)';
        });

        element.addEventListener('mouseleave', () => {
          cursor.style.width = '20px';
          cursor.style.height = '20px';
          cursor.style.backgroundColor = 'rgba(30, 144, 255, 0.5)';
        });
      });
    }

    // Animate sections when scrolled into view
    const animatedElements = document.querySelectorAll('.animate');
    
    function checkIfInView() {
      animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if element is in viewport
        if (elementPosition.top < windowHeight * 0.85) {
          element.classList.add('inView');
        }
      });
    }
    
    // Check on initial load
    checkIfInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
    
    // Animate skill progress bars
    const skillCards = document.querySelectorAll('.skill-card');
    
    function animateSkillBars() {
      skillCards.forEach(card => {
        const progressBar = card.querySelector('.skill-progress');
        const skillPercentage = card.getAttribute('data-skill');
        
        if (progressBar && skillPercentage) {
          setTimeout(() => {
            progressBar.style.width = skillPercentage + '%';
          }, 300);
        }
      });
    }
    
    // Trigger skill bar animation when skills section comes into view
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(skillsSection);
    }

    // Typing animation for hero section
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      const target = heroSection.querySelector('h1 span');
      if (target) {
        const originalText = target.textContent;
        target.textContent = '';
        
        let i = 0;
        const typingInterval = setInterval(() => {
          if (i < originalText.length) {
            target.textContent += originalText.charAt(i);
            i++;
          } else {
            clearInterval(typingInterval);
          }
        }, 100);
      }
    }

    // Project Categories Functionality
    const categoryCards = document.querySelectorAll('.category-card');
    const projectContainers = document.querySelectorAll('.project-container');
    let activeCategory = null;

    // Sample project data - replace with your actual projects
    const projects = {
        excel: [
            {
                title: "Sales Performance Dashboard",
                description: "Created an interactive Excel dashboard to track and analyze sales performance across different regions.",
                image: "https://via.placeholder.com/600x400?text=Excel+Dashboard",
                technologies: ["Excel", "Pivot Tables", "Charts", "VBA"]
            },
            {
                title: "Financial Analysis Model",
                description: "Developed a comprehensive financial model for investment analysis and forecasting.",
                image: "https://via.placeholder.com/600x400?text=Financial+Model",
                technologies: ["Excel", "Financial Modeling", "Data Analysis"]
            }
        ],
        sql: [
            {
                title: "Customer Database Management",
                description: "Designed and implemented a SQL database system for customer relationship management.",
                image: "https://via.placeholder.com/600x400?text=SQL+Database",
                technologies: ["SQL", "Database Design", "Query Optimization"]
            }
        ],
        python: [
            {
                title: "Market Research Analysis",
                description: "Conducted comprehensive market research using Python data analysis tools.",
                image: "https://via.placeholder.com/600x400?text=Python+Analysis",
                technologies: ["Python", "Pandas", "NumPy", "Matplotlib"]
            },
            {
                title: "Data Visualization Project",
                description: "Created interactive data visualizations for business intelligence.",
                image: "https://via.placeholder.com/600x400?text=Data+Viz",
                technologies: ["Python", "Plotly", "Seaborn", "Data Analysis"]
            }
        ],
        ml: [
            {
                title: "Customer Churn Prediction",
                description: "Built a machine learning model to predict customer churn with 85% accuracy.",
                image: "https://via.placeholder.com/600x400?text=ML+Model",
                technologies: ["Python", "Scikit-learn", "XGBoost", "Feature Engineering"]
            },
            {
                title: "Sales Forecasting",
                description: "Developed a time series forecasting model for sales prediction.",
                image: "https://via.placeholder.com/600x400?text=Forecasting",
                technologies: ["Python", "TensorFlow", "Time Series", "Deep Learning"]
            }
        ]
    };

    // Function to create project card HTML
    function createProjectCard(project) {
        return `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <a href="#" class="btn">View Project</a>
                </div>
            </div>
        `;
    }

    // Function to display projects for a category
    function displayProjects(category) {
        const container = document.getElementById(`${category}-projects`);
        const projectGrid = container.querySelector('.project-grid');
        projectGrid.innerHTML = projects[category].map(createProjectCard).join('');
    }

    // Handle category card clicks
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Remove active class from all cards
            categoryCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Hide all project containers
            projectContainers.forEach(container => {
                container.classList.remove('active');
            });
            
            // Show selected category's projects
            const selectedContainer = document.getElementById(`${category}-projects`);
            selectedContainer.classList.add('active');
            
            // Display projects if not already displayed
            if (!selectedContainer.querySelector('.project-card')) {
                displayProjects(category);
            }
            
            // Update active category
            activeCategory = category;
        });
    });

    // Initialize first category
    if (categoryCards.length > 0) {
        categoryCards[0].click();
    }
  });
  