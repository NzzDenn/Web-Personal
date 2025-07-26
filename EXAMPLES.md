# Usage Examples

This document provides practical examples, code snippets, and implementation guides for common use cases in the Personal Portfolio Website.

## Table of Contents

- [Getting Started Examples](#getting-started-examples)
- [Navigation Examples](#navigation-examples)
- [Content Section Examples](#content-section-examples)
- [Form Enhancement Examples](#form-enhancement-examples)
- [Styling Customization Examples](#styling-customization-examples)
- [JavaScript Enhancement Examples](#javascript-enhancement-examples)
- [Integration Examples](#integration-examples)
- [Deployment Examples](#deployment-examples)

## Getting Started Examples

### Basic Setup

**Example 1: Local Development Setup**

```bash
# Create project directory
mkdir my-portfolio
cd my-portfolio

# Copy files
cp /path/to/source/* .

# Start local server (Python)
python -m http.server 8000

# Or with Node.js
npx http-server

# Open browser
open http://localhost:8000
```

**Example 2: Customizing Personal Information**

```html
<!-- Update hero section in index.html -->
<section id="home" class="d-flex align-items-center min-vh-100">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1 class="display-2 fw-bold">
          Hello, I'm <span class="text-brand">John Doe</span>
        </h1>
        <h4 class="mb-3 mt5">
          Full-Stack Developer passionate about creating amazing web experiences.
        </h4>
        <a href="#contact" class="btn btn-success">Get In Touch</a>
      </div>
    </div>
  </div>
</section>
```

**Example 3: EmailJS Configuration**

```javascript
// 1. Sign up at emailjs.com
// 2. Create email service (Gmail, Outlook, etc.)
// 3. Create email template with variables:
//    {{name}}, {{email}}, {{subject}}, {{message}}
// 4. Update configuration in index.html:

<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY_HERE",
      });
   })();
</script>

// 5. Update service details in main.js:
function sendMail(){
  let parms = {
    name: document.getElementById('nama').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('pesan').value,
  }
  
  emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',parms)
    .then(alert('Email Sent!'))
}
```

## Navigation Examples

### Adding New Navigation Items

**Example 1: Simple Navigation Link**

```html
<!-- Add to navbar in index.html -->
<li class="nav-item">
  <a class="nav-link" href="#portfolio">Portfolio</a>
</li>
```

**Example 2: Dropdown Menu Item**

```html
<!-- Add to existing dropdown -->
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
    More
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#edu">Education</a></li>
    <li><a class="dropdown-item" href="#contact">Contact</a></li>
    <li><a class="dropdown-item" href="#portfolio">Portfolio</a></li>
    <li><a class="dropdown-item" href="#testimonials">Testimonials</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#blog">Blog</a></li>
  </ul>
</li>
```

**Example 3: Active Navigation State**

```javascript
// Add to main.js - highlight current section
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Add to scroll handler
window.onscroll = function() {
  // Existing navbar scroll code...
  updateActiveNav();
}
```

### Smooth Scrolling Implementation

**Example 4: Enhanced Smooth Scrolling**

```javascript
// Add to main.js
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Update URL without jumping
        history.pushState(null, null, targetId);
      }
    });
  });
}

// Call on page load
document.addEventListener('DOMContentLoaded', initSmoothScrolling);
```

## Content Section Examples

### Portfolio Section

**Example 1: Complete Portfolio Section**

```html
<!-- Add after education section -->
<section id="portfolio" class="section-padding">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center">
          <h1>My Portfolio</h1>
          <p>Showcase of my recent projects and work</p>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="portfolio-item">
          <div class="portfolio-image">
            <img src="project1.jpg" alt="Project 1" class="img-fluid">
            <div class="portfolio-overlay">
              <div class="portfolio-info">
                <h5>E-Commerce Website</h5>
                <p>React, Node.js, MongoDB</p>
                <div class="portfolio-links">
                  <a href="#" class="btn btn-light btn-sm me-2">Live Demo</a>
                  <a href="#" class="btn btn-outline-light btn-sm">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Repeat for more projects -->
    </div>
  </div>
</section>
```

**Example 2: Portfolio CSS Styling**

```css
/* Add to style.css */
.portfolio-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-image {
  position: relative;
}

.portfolio-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-info {
  text-align: center;
  color: white;
}

.portfolio-info h5 {
  margin-bottom: 10px;
}

.portfolio-info p {
  margin-bottom: 15px;
  font-size: 14px;
}
```

### Skills Section with Progress Bars

**Example 3: Interactive Skills Section**

```html
<!-- Add to about section or create new section -->
<section id="skills" class="section-padding bg-light">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center">
          <h1>Technical Skills</h1>
          <p>Technologies and tools I work with</p>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="skill-item mb-4">
          <div class="d-flex justify-content-between mb-2">
            <span class="skill-name">JavaScript</span>
            <span class="skill-percentage">90%</span>
          </div>
          <div class="progress">
            <div class="progress-bar bg-primary" data-width="90"></div>
          </div>
        </div>
        <div class="skill-item mb-4">
          <div class="d-flex justify-content-between mb-2">
            <span class="skill-name">React</span>
            <span class="skill-percentage">85%</span>
          </div>
          <div class="progress">
            <div class="progress-bar bg-success" data-width="85"></div>
          </div>
        </div>
        <!-- More skills... -->
      </div>
      <div class="col-lg-6">
        <!-- More skills... -->
      </div>
    </div>
  </div>
</section>
```

**Example 4: Animated Progress Bars**

```javascript
// Add to main.js
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar[data-width]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const width = progressBar.getAttribute('data-width');
        
        progressBar.style.width = '0%';
        setTimeout(() => {
          progressBar.style.width = width + '%';
        }, 200);
        
        observer.unobserve(progressBar);
      }
    });
  });
  
  progressBars.forEach(bar => {
    observer.observe(bar);
  });
}

// Call on page load
document.addEventListener('DOMContentLoaded', animateProgressBars);
```

### Testimonials Section

**Example 5: Testimonials Carousel**

```html
<section id="testimonials" class="section-padding">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center">
          <h1>What Clients Say</h1>
          <p>Feedback from people I've worked with</p>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="testimonial text-center">
                <div class="testimonial-content">
                  <p class="lead">"Excellent work! The website exceeded our expectations."</p>
                  <div class="testimonial-author">
                    <img src="client1.jpg" alt="Client 1" class="rounded-circle mb-3">
                    <h5>John Smith</h5>
                    <small class="text-muted">CEO, Tech Company</small>
                  </div>
                </div>
              </div>
            </div>
            <!-- More testimonials... -->
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Form Enhancement Examples

### Advanced Contact Form

**Example 6: Form with Validation and Loading States**

```javascript
// Enhanced sendMail function
function sendMail() {
  // Validate form
  if (!validateContactForm()) {
    return;
  }
  
  const button = document.querySelector('#contact button[onclick="sendMail()"]');
  const form = document.querySelector('#contact form');
  
  // Show loading state
  showLoadingState(button);
  
  // Prepare form data
  const formData = {
    name: document.getElementById('nama').value.trim(),
    email: document.getElementById('email').value.trim(),
    subject: document.getElementById('subject').value.trim(),
    message: document.getElementById('pesan').value.trim(),
  };
  
  // Send email
  emailjs.send('service_sbcztl5', 'template_23seulx', formData)
    .then(function(response) {
      showSuccessMessage('Message sent successfully! I\'ll get back to you soon.');
      form.reset();
      updateCharCount(); // Reset character counter if exists
    })
    .catch(function(error) {
      console.error('EmailJS Error:', error);
      showErrorMessage('Failed to send message. Please try again or contact me directly.');
    })
    .finally(function() {
      hideLoadingState(button);
    });
}

function validateContactForm() {
  const name = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('pesan').value.trim();
  
  // Clear previous errors
  clearFormErrors();
  
  let isValid = true;
  
  // Validate name
  if (!name) {
    showFieldError('nama', 'Name is required');
    isValid = false;
  } else if (name.length < 2) {
    showFieldError('nama', 'Name must be at least 2 characters');
    isValid = false;
  }
  
  // Validate email
  if (!email) {
    showFieldError('email', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showFieldError('email', 'Please enter a valid email address');
    isValid = false;
  }
  
  // Validate subject
  if (!subject) {
    showFieldError('subject', 'Subject is required');
    isValid = false;
  } else if (subject.length < 5) {
    showFieldError('subject', 'Subject must be at least 5 characters');
    isValid = false;
  }
  
  // Validate message
  if (!message) {
    showFieldError('pesan', 'Message is required');
    isValid = false;
  } else if (message.length < 10) {
    showFieldError('pesan', 'Message must be at least 10 characters');
    isValid = false;
  }
  
  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  field.classList.add('is-invalid');
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'invalid-feedback';
  errorDiv.textContent = message;
  
  field.parentNode.appendChild(errorDiv);
}

function clearFormErrors() {
  const invalidFields = document.querySelectorAll('#contact .is-invalid');
  const errorMessages = document.querySelectorAll('#contact .invalid-feedback');
  
  invalidFields.forEach(field => field.classList.remove('is-invalid'));
  errorMessages.forEach(error => error.remove());
}

function showLoadingState(button) {
  button.disabled = true;
  button.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
}

function hideLoadingState(button) {
  button.disabled = false;
  button.textContent = 'Kirim';
}

function showSuccessMessage(message) {
  showAlert(message, 'success');
}

function showErrorMessage(message) {
  showAlert(message, 'danger');
}

function showAlert(message, type) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  const form = document.querySelector('#contact form');
  form.parentNode.insertBefore(alertDiv, form);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (alertDiv.parentNode) {
      alertDiv.remove();
    }
  }, 5000);
}
```

**Example 7: Character Counter for Textarea**

```html
<!-- Update textarea in contact form -->
<div class="form-group col-md-12">
  <textarea id="pesan" class="form-control" placeholder="Kirim Pesan Anda" 
            rows="5" maxlength="500" oninput="updateCharCount()"></textarea>
  <div class="d-flex justify-content-between mt-1">
    <small class="text-muted">Minimum 10 characters</small>
    <small class="text-muted">
      <span id="charCount">0</span>/500 characters
    </small>
  </div>
</div>
```

```javascript
// Add character counter function
function updateCharCount() {
  const textarea = document.getElementById('pesan');
  const counter = document.getElementById('charCount');
  const currentLength = textarea.value.length;
  
  counter.textContent = currentLength;
  
  // Change color based on length
  if (currentLength < 10) {
    counter.className = 'text-danger';
  } else if (currentLength > 450) {
    counter.className = 'text-warning';
  } else {
    counter.className = 'text-success';
  }
}
```

## Styling Customization Examples

### Color Scheme Customization

**Example 8: Dark Theme Implementation**

```css
/* Add to style.css */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --info-color: #17a2b8;
  --light-color: #f8f9fa;
  --dark-color: #343a40;
  --background-color: #ffffff;
  --text-color: #212529;
}

[data-theme="dark"] {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  --success-color: #198754;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --info-color: #0dcaf0;
  --light-color: #343a40;
  --dark-color: #f8f9fa;
  --background-color: #121212;
  --text-color: #ffffff;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.section-padding {
  background-color: var(--background-color);
}

.bg-light {
  background-color: var(--light-color) !important;
}

/* Theme toggle button */
.theme-toggle {
  position: fixed;
  top: 50%;
  right: 20px;
  z-index: 1000;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  transform: scale(1.1);
}
```

**Example 9: Theme Toggle JavaScript**

```html
<!-- Add theme toggle button to body -->
<button class="theme-toggle" onclick="toggleTheme()" title="Toggle Dark Mode">
  <i class="fas fa-moon" id="theme-icon"></i>
</button>
```

```javascript
// Add theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    themeIcon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    themeIcon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'dark');
  }
}

// Load saved theme on page load
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');
  
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeIcon.className = 'fas fa-sun';
  }
}

// Call on page load
document.addEventListener('DOMContentLoaded', loadSavedTheme);
```

### Custom Animations

**Example 10: Scroll Animations**

```css
/* Add animation classes */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}
```

```javascript
// Add scroll animation functionality
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Call on page load
document.addEventListener('DOMContentLoaded', initScrollAnimations);
```

```html
<!-- Add animation classes to elements -->
<div class="section-title text-center fade-in">
  <h1>About Me</h1>
  <p>Lorem ipsum dolor sit amet</p>
</div>

<div class="col-lg-4 col-sm-6 slide-in-left">
  <div class="about">
    <!-- Content -->
  </div>
</div>
```

## JavaScript Enhancement Examples

### Loading Screen

**Example 11: Page Loading Screen**

```html
<!-- Add to body start -->
<div id="loading-screen">
  <div class="loading-content">
    <div class="spinner-border text-primary mb-3" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <h5>Loading...</h5>
  </div>
</div>
```

```css
/* Loading screen styles */
#loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
}

.loading-content {
  text-align: center;
}

#loading-screen.fade-out {
  opacity: 0;
  pointer-events: none;
}
```

```javascript
// Hide loading screen when page is ready
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1000); // Show loading for at least 1 second
});
```

### Typing Animation

**Example 12: Typing Effect for Hero Section**

```html
<!-- Update hero section -->
<h1 class="display-2 fw-bold">
  Hai, Nama saya <span class="text-brand">Dennis Reynard</span>
</h1>
<h4 class="mb-3 mt5">
  <span id="typing-text"></span><span class="typing-cursor">|</span>
</h4>
```

```css
/* Typing animation styles */
.typing-cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
```

```javascript
// Typing animation function
function initTypingAnimation() {
  const texts = [
    "Full-Stack Developer",
    "Web Designer",
    "Problem Solver",
    "Creative Thinker"
  ];
  
  const typingElement = document.getElementById('typing-text');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500; // Pause before next text
    }
    
    setTimeout(type, typeSpeed);
  }
  
  type();
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', initTypingAnimation);
```

### Scroll Progress Indicator

**Example 13: Reading Progress Bar**

```html
<!-- Add to top of body -->
<div id="scroll-progress">
  <div id="scroll-progress-bar"></div>
</div>
```

```css
/* Progress bar styles */
#scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(0,0,0,0.1);
  z-index: 1001;
}

#scroll-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #007bff, #28a745);
  width: 0%;
  transition: width 0.1s ease;
}
```

```javascript
// Update scroll progress
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  document.getElementById('scroll-progress-bar').style.width = scrollPercent + '%';
}

// Update existing scroll handler
window.onscroll = function() {
  // Existing navbar scroll code...
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById('navbar').classList.add('scrolled');
  } else {
    document.getElementById('navbar').classList.remove('scrolled');
  }
  
  // Add progress update
  updateScrollProgress();
}
```

## Integration Examples

### Google Analytics Integration

**Example 14: Analytics Setup**

```html
<!-- Add to head section -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

```javascript
// Track custom events
function trackEvent(action, category, label) {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
}

// Track form submissions
function sendMail() {
  // ... existing code ...
  
  emailjs.send('service_sbcztl5', 'template_23seulx', formData)
    .then(function(response) {
      trackEvent('form_submit', 'contact', 'success');
      // ... rest of success handling
    })
    .catch(function(error) {
      trackEvent('form_submit', 'contact', 'error');
      // ... rest of error handling
    });
}

// Track navigation clicks
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    trackEvent('navigation', 'click', this.textContent);
  });
});
```

### Social Media Integration

**Example 15: Social Sharing Buttons**

```html
<!-- Add social sharing section -->
<div class="social-sharing text-center mt-4">
  <h6>Share this page:</h6>
  <div class="social-buttons">
    <button class="btn btn-primary btn-sm me-2" onclick="shareOnFacebook()">
      <i class="fab fa-facebook-f"></i> Facebook
    </button>
    <button class="btn btn-info btn-sm me-2" onclick="shareOnTwitter()">
      <i class="fab fa-twitter"></i> Twitter
    </button>
    <button class="btn btn-success btn-sm me-2" onclick="shareOnWhatsApp()">
      <i class="fab fa-whatsapp"></i> WhatsApp
    </button>
    <button class="btn btn-secondary btn-sm" onclick="copyToClipboard()">
      <i class="fas fa-link"></i> Copy Link
    </button>
  </div>
</div>
```

```javascript
// Social sharing functions
function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnTwitter() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Check out this amazing portfolio!');
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareOnWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Check out this portfolio: ');
  window.open(`https://wa.me/?text=${text}${url}`, '_blank');
}

function copyToClipboard() {
  navigator.clipboard.writeText(window.location.href).then(function() {
    showAlert('Link copied to clipboard!', 'success');
  });
}
```

## Deployment Examples

### GitHub Pages Deployment

**Example 16: GitHub Pages Setup**

```bash
# 1. Create GitHub repository
# 2. Push your code to the repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/portfolio.git
git push -u origin main

# 3. Enable GitHub Pages in repository settings
# 4. Your site will be available at: https://username.github.io/portfolio
```

### Netlify Deployment

**Example 17: Netlify Configuration**

```toml
# Create netlify.toml in project root
[build]
  publish = "."
  
[build.environment]
  NODE_VERSION = "16"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Custom Domain Setup

**Example 18: Custom Domain Configuration**

```bash
# For GitHub Pages
# 1. Add CNAME file to repository root
echo "yourdomain.com" > CNAME

# 2. Configure DNS records at your domain provider:
# Type: CNAME, Name: www, Value: username.github.io
# Type: A, Name: @, Value: 185.199.108.153
# Type: A, Name: @, Value: 185.199.109.153
# Type: A, Name: @, Value: 185.199.110.153
# Type: A, Name: @, Value: 185.199.111.153
```

### Performance Optimization

**Example 19: Image Optimization**

```html
<!-- Use responsive images -->
<img src="image-small.jpg" 
     srcset="image-small.jpg 480w, 
             image-medium.jpg 768w, 
             image-large.jpg 1200w"
     sizes="(max-width: 480px) 480px, 
            (max-width: 768px) 768px, 
            1200px"
     alt="Description"
     loading="lazy">
```

**Example 20: Service Worker for Caching**

```javascript
// Create sw.js in project root
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/pizzakocak.jpg',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
```

```javascript
// Register service worker in main.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful');
      })
      .catch(function(err) {
        console.log('ServiceWorker registration failed');
      });
  });
}
```

---

**Last Updated**: January 2025  
**Examples Version**: 1.0.0
