// === Theme Switcher ===
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme === 'light') {
      document.body.classList.add('light-mode');
      themeToggle.checked = true;
    } else {
      document.body.classList.add('dark-mode');
    }
  
    themeToggle.addEventListener('change', () => {
      const isLight = themeToggle.checked;
      document.body.classList.toggle('light-mode', isLight);
      document.body.classList.toggle('dark-mode', !isLight);
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  
    // === Contact Form Handler ===
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const message = document.getElementById("form-message");
        message.textContent = "Thanks for reaching out! I’ll get back to you soon.";
        contactForm.reset();
      });
    }
  
    // === Modal Functionality ===
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
  
    window.openModal = function (projectId) {
      const projects = {
        project1: {
          title: 'Line Following Robot',
          description: 'An autonomous robot designed to follow a line using PID control and IR sensors. This project involved designing the robot chassis, integrating sensors, and programming the control algorithm to ensure accurate path tracking.',
          image: 'https://via.placeholder.com/600x400'
        },
        project2: {
          title: 'Smart Irrigation System',
          description: 'Developed an IoT-based irrigation system that monitors soil moisture levels in real-time and automates watering schedules. The system utilizes sensors, microcontrollers, and a web interface for monitoring and control.',
          image: 'https://via.placeholder.com/600x400'
        }
      };
  
      const project = projects[projectId];
      if (!project) return;
  
      modalBody.innerHTML = `
        <h3>${project.title}</h3>
        <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius:8px; margin-bottom:15px;" />
        <p>${project.description}</p>
      `;
      modal.style.display = 'block';
    };
  
    window.closeModal = function () {
      modal.style.display = 'none';
    };
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  });
  