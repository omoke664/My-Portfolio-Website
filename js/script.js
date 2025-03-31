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
  });
  