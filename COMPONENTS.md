# Components Documentation

This document provides comprehensive documentation for all UI components in the Personal Portfolio Website, including their structure, styling, behavior, and usage examples.

## Table of Contents

- [Navigation Components](#navigation-components)
- [Layout Components](#layout-components)
- [Content Components](#content-components)
- [Form Components](#form-components)
- [Footer Components](#footer-components)
- [Utility Components](#utility-components)

## Navigation Components

### Primary Navigation (`#navbar`)

**Description**: Fixed-top responsive navigation bar with scroll-based styling changes.

**HTML Structure**:
```html
<nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navigasi</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- Navigation items -->
      </ul>
      <form class="d-flex" role="search">
        <!-- Search form -->
      </form>
    </div>
  </div>
</nav>
```

**CSS Classes**:
- `.navbar` - Base navbar styling
- `.navbar-expand-lg` - Responsive expansion at large breakpoint
- `.bg-body-tertiary` - Bootstrap background color
- `.fixed-top` - Fixed positioning at top

**States**:
- **Default**: Normal padding (30px top/bottom)
- **Scrolled**: Compressed padding (10px top/bottom)

**JavaScript Behavior**:
```javascript
// Automatically applied on scroll
window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById('navbar').classList.add('scrolled');
  } else {
    document.getElementById('navbar').classList.remove('scrolled');
  }
}
```

**Customization Examples**:

*Change brand text*:
```html
<a class="navbar-brand" href="#">Your Brand</a>
```

*Add new navigation item*:
```html
<li class="nav-item">
  <a class="nav-link" href="#portfolio">Portfolio</a>
</li>
```

*Modify scroll threshold*:
```javascript
window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) { // Custom threshold
    document.getElementById('navbar').classList.add('scrolled');
  } else {
    document.getElementById('navbar').classList.remove('scrolled');
  }
}
```

---

### Navigation Dropdown

**Description**: Dropdown menu for additional navigation options.

**HTML Structure**:
```html
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" 
     data-bs-toggle="dropdown" aria-expanded="false">
    More
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#edu">Education</a></li>
    <li><a class="dropdown-item" href="#contact">Contact</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</li>
```

**Bootstrap Classes**:
- `.dropdown` - Dropdown container
- `.dropdown-toggle` - Trigger element
- `.dropdown-menu` - Menu container
- `.dropdown-item` - Menu items
- `.dropdown-divider` - Visual separator

**Usage Example**:
```html
<!-- Add new dropdown item -->
<li><a class="dropdown-item" href="#skills">Skills</a></li>
```

---

### Search Component

**Description**: Search form in navigation (UI only, no functionality).

**HTML Structure**:
```html
<form class="d-flex" role="search">
  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
  <button class="btn btn-outline-success" type="submit">Search</button>
</form>
```

**Enhancement Example**:
```javascript
// Add search functionality
document.querySelector('form[role="search"]').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = this.querySelector('input').value;
  // Implement search logic
  console.log('Searching for:', query);
});
```

## Layout Components

### Section Container

**Description**: Standard section wrapper with consistent padding and structure.

**HTML Structure**:
```html
<section id="section-id" class="section-padding">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center">
          <h1>Section Title</h1>
          <p>Section description</p>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <!-- Section content -->
  </div>
</section>
```

**CSS Properties**:
```css
.section-padding {
  padding-top: 120px;
  padding-bottom: 120px;
}

.section-title {
  max-width: 550px;
  margin: 0 auto 60px auto;
}
```

**Responsive Behavior**:
- Consistent padding on all screen sizes
- Centered content with max-width constraint
- Bootstrap grid system for responsive layout

**Usage Examples**:

*Create new section*:
```html
<section id="portfolio" class="section-padding">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center">
          <h1>My Portfolio</h1>
          <p>Showcase of my recent work and projects</p>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Portfolio items -->
    </div>
  </div>
</section>
```

*Modify section spacing*:
```css
.section-padding-small {
  padding-top: 60px;
  padding-bottom: 60px;
}
```

---

### Grid Layout

**Description**: Bootstrap-based responsive grid system for content layout.

**Basic Structure**:
```html
<div class="container">
  <div class="row">
    <div class="col-lg-4 col-md-6 col-sm-12">
      <!-- Content -->
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
      <!-- Content -->
    </div>
    <div class="col-lg-4 col-md-12">
      <!-- Content -->
    </div>
  </div>
</div>
```

**Breakpoint Classes**:
- `col-xs-*` - Extra small devices (<576px)
- `col-sm-*` - Small devices (≥576px)
- `col-md-*` - Medium devices (≥768px)
- `col-lg-*` - Large devices (≥992px)
- `col-xl-*` - Extra large devices (≥1200px)
- `col-xxl-*` - Extra extra large devices (≥1400px)

**Common Patterns**:

*Two-column layout*:
```html
<div class="row">
  <div class="col-md-6">Left column</div>
  <div class="col-md-6">Right column</div>
</div>
```

*Three-column layout*:
```html
<div class="row">
  <div class="col-lg-4">Column 1</div>
  <div class="col-lg-4">Column 2</div>
  <div class="col-lg-4">Column 3</div>
</div>
```

*Sidebar layout*:
```html
<div class="row">
  <div class="col-lg-8">Main content</div>
  <div class="col-lg-4">Sidebar</div>
</div>
```

## Content Components

### Hero Section (`#home`)

**Description**: Full-height hero section with personal introduction and call-to-action.

**HTML Structure**:
```html
<section id="home" class="d-flex align-items-center min-vh-100">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1 class="display-2 fw-bold">
          Hai, Nama saya <span class="text-brand">Dennis Reynard</span>
        </h1>
        <h4 class="mb-3 mt5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, exercitationem.
        </h4>
        <a href="#contact" class="btn btn-success">Get Contact</a>
      </div>
    </div>
  </div>
</section>
```

**Key Features**:
- Full viewport height (`min-vh-100`)
- Flexbox centering (`d-flex align-items-center`)
- Large display typography (`display-2`)
- Brand text highlighting (`.text-brand`)
- Call-to-action button

**Customization Examples**:

*Update personal information*:
```html
<h1 class="display-2 fw-bold">
  Hello, I'm <span class="text-brand">Your Name</span>
</h1>
<h4 class="mb-3 mt5">
  Your professional tagline or description here.
</h4>
```

*Change button style*:
```html
<a href="#contact" class="btn btn-primary btn-lg">Contact Me</a>
```

*Add social links*:
```html
<div class="mt-4">
  <a href="#" class="btn btn-outline-primary me-2">LinkedIn</a>
  <a href="#" class="btn btn-outline-dark me-2">GitHub</a>
  <a href="#" class="btn btn-outline-info">Twitter</a>
</div>
```

---

### About Section (`#about`)

**Description**: Information section showcasing skills and expertise.

**HTML Structure**:
```html
<section id="about" class="section-padding">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center">
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-sm-6">
        <div class="about">
          <div class="about-icon">
            <!-- Icon placeholder -->
          </div>
          <h5>Coding Pemula</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <a href="" class="about-link btn btn-outline-success">
            <span>Read More</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Component Structure**:
- Section header with title and description
- Grid layout for skill/service cards
- Icon placeholders for visual elements
- "Read More" call-to-action buttons

**Enhancement Examples**:

*Add skill cards*:
```html
<div class="col-lg-4 col-sm-6">
  <div class="about">
    <div class="about-icon">
      <i class="fas fa-code fa-3x text-primary"></i>
    </div>
    <h5>Web Development</h5>
    <p>Creating responsive and modern web applications using latest technologies.</p>
    <a href="#portfolio" class="about-link btn btn-outline-success">
      <span>View Projects</span>
    </a>
  </div>
</div>
```

*Add progress bars*:
```html
<div class="skill-item mb-4">
  <div class="d-flex justify-content-between mb-2">
    <span>JavaScript</span>
    <span>85%</span>
  </div>
  <div class="progress">
    <div class="progress-bar bg-success" style="width: 85%"></div>
  </div>
</div>
```

---

### Education Section (`#edu`)

**Description**: Timeline of educational background and achievements.

**HTML Structure**:
```html
<section id="edu">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center">
          <h1>Education</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-12">
            <div class="edu p-5 pt-0">
              <h5>SMPN 2 Waru</h5>
              <small class="text-brand">2022 - 2025</small>
              <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Enhancement Examples**:

*Add timeline structure*:
```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h5>University Name</h5>
      <small class="text-brand">2020 - 2024</small>
      <p>Bachelor's Degree in Computer Science</p>
    </div>
  </div>
</div>
```

*Add timeline CSS*:
```css
.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #007bff;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.timeline-marker {
  position: absolute;
  left: -37px;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #007bff;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px #007bff;
}
```

## Form Components

### Contact Form (`#contact`)

**Description**: Interactive contact form with EmailJS integration for sending messages.

**HTML Structure**:
```html
<section id="contact" class="section-padding">
  <div class="container section-padding">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center">
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form action="#" class="row g-3">
          <div class="form-group col-md-4">
            <input type="text" id="nama" class="form-control" placeholder="Nama">
          </div>
          <div class="form-group col-md-4">
            <input type="email" id="email" class="form-control" placeholder="Email">
          </div>
          <div class="form-group col-md-12">
            <input type="text" id="subject" class="form-control" placeholder="Subject">
          </div>
          <div class="form-group col-md-12">
            <textarea id="pesan" class="form-control" placeholder="Kirim Pesan Anda" rows="5"></textarea>
          </div>
          <div class="form-group text-center col-md-12">
            <button class="btn btn-success" onclick="sendMail()">Kirim</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
```

**Form Fields**:
- `#nama` - Text input for user's name
- `#email` - Email input for user's email address
- `#subject` - Text input for message subject
- `#pesan` - Textarea for message content

**CSS Customization**:
```css
#contact .form-control {
  border-radius: 0;
  height: 40px; /* for input fields */
}

#contact .form-control:focus {
  box-shadow: none;
  border-color: #28a745;
}
```

**JavaScript Integration**:
```javascript
function sendMail() {
  let parms = {
    name: document.getElementById('nama').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('pesan').value,
  }
  
  emailjs.send('service_sbcztl5','template_23seulx',parms)
    .then(alert('Email Sent!'))
}
```

**Enhancement Examples**:

*Add form validation*:
```javascript
function validateForm() {
  const name = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('pesan').value.trim();
  
  if (!name || !email || !subject || !message) {
    showError('Please fill in all fields');
    return false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('Please enter a valid email address');
    return false;
  }
  
  return true;
}

function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger mt-3';
  errorDiv.textContent = message;
  
  const form = document.querySelector('#contact form');
  form.appendChild(errorDiv);
  
  setTimeout(() => errorDiv.remove(), 5000);
}
```

*Add loading state*:
```javascript
function sendMail() {
  if (!validateForm()) return;
  
  const button = document.querySelector('#contact button');
  const originalText = button.textContent;
  
  button.disabled = true;
  button.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
  
  const parms = {
    name: document.getElementById('nama').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('pesan').value,
  };
  
  emailjs.send('service_sbcztl5','template_23seulx',parms)
    .then(function(response) {
      showSuccess('Message sent successfully!');
      document.querySelector('#contact form').reset();
    })
    .catch(function(error) {
      showError('Failed to send message. Please try again.');
    })
    .finally(function() {
      button.disabled = false;
      button.textContent = originalText;
    });
}
```

*Add character counter*:
```html
<div class="form-group col-md-12">
  <textarea id="pesan" class="form-control" placeholder="Kirim Pesan Anda" 
            rows="5" maxlength="500" oninput="updateCharCount()"></textarea>
  <small class="text-muted">
    <span id="charCount">0</span>/500 characters
  </small>
</div>
```

```javascript
function updateCharCount() {
  const textarea = document.getElementById('pesan');
  const counter = document.getElementById('charCount');
  counter.textContent = textarea.value.length;
}
```

## Footer Components

### Main Footer

**Description**: Multi-column footer with branding, contact information, and navigation links.

**HTML Structure**:
```html
<footer>
  <div class="footer-top">
    <div class="container">
      <div class="row gy-5">
        <div class="col-md-4">
          <h4>Dennis Reynard</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="col-md-3">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">nzzdenncode@gmail.com</a></li>
            <li><a href="#">#</a></li>
            <li><a href="#">#</a></li>
          </ul>
        </div>
        <div class="col-md-3 ms-auto">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#edu">Education</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <p class="mb-0">Copyright</p>
        </div>
        <div class="col-auto">
          <p class="mb-0">Since 2025</p>
        </div>
      </div>
    </div>
  </div>
</footer>
```

**CSS Styling**:
```css
footer {
  background-color: darkgreen;
  padding-top: 85px;
}

footer h4 {
  color: white;
}

footer p,
footer li,
footer li a {
  color: rgba(255,255,255,0.7);
}

footer ul {
  list-style: none;
  padding: 0;
}

.footer-top {
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.footer-bottom {
  padding-top: 40px;
  padding-bottom: 40px;
}
```

**Enhancement Examples**:

*Add social media links*:
```html
<div class="col-md-3">
  <h4>Follow Me</h4>
  <div class="social-links">
    <a href="#" class="social-link me-3">
      <i class="fab fa-linkedin fa-2x"></i>
    </a>
    <a href="#" class="social-link me-3">
      <i class="fab fa-github fa-2x"></i>
    </a>
    <a href="#" class="social-link">
      <i class="fab fa-twitter fa-2x"></i>
    </a>
  </div>
</div>
```

```css
.social-link {
  color: rgba(255,255,255,0.7);
  transition: color 0.3s ease;
}

.social-link:hover {
  color: white;
}
```

*Add newsletter signup*:
```html
<div class="col-md-4">
  <h4>Newsletter</h4>
  <p>Subscribe to get updates about new content.</p>
  <form class="newsletter-form">
    <div class="input-group">
      <input type="email" class="form-control" placeholder="Your email">
      <button class="btn btn-success" type="submit">Subscribe</button>
    </div>
  </form>
</div>
```

## Utility Components

### Loading Spinner

**Description**: Bootstrap spinner component for loading states.

**HTML Structure**:
```html
<!-- Button with spinner -->
<button class="btn btn-primary" disabled>
  <span class="spinner-border spinner-border-sm me-2"></span>
  Loading...
</button>

<!-- Standalone spinner -->
<div class="d-flex justify-content-center">
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
```

**Usage in Forms**:
```javascript
function showLoading(button) {
  const originalText = button.textContent;
  button.disabled = true;
  button.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Loading...';
  return originalText;
}

function hideLoading(button, originalText) {
  button.disabled = false;
  button.textContent = originalText;
}
```

---

### Alert Messages

**Description**: Bootstrap alert components for user feedback.

**HTML Structure**:
```html
<!-- Success alert -->
<div class="alert alert-success alert-dismissible fade show">
  <strong>Success!</strong> Your message has been sent.
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>

<!-- Error alert -->
<div class="alert alert-danger alert-dismissible fade show">
  <strong>Error!</strong> Please fill in all required fields.
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

**JavaScript Helper Functions**:
```javascript
function showAlert(message, type = 'info', container = document.body) {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type} alert-dismissible fade show`;
  alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  container.appendChild(alert);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    alert.remove();
  }, 5000);
}

// Usage examples
showAlert('Message sent successfully!', 'success');
showAlert('Please check your input', 'warning');
showAlert('An error occurred', 'danger');
```

---

### Modal Components

**Description**: Bootstrap modal for displaying additional content.

**HTML Structure**:
```html
<!-- Modal trigger -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Modal content goes here...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

**JavaScript Control**:
```javascript
// Show modal programmatically
const modal = new bootstrap.Modal('#exampleModal');
modal.show();

// Hide modal
modal.hide();

// Listen for events
document.getElementById('exampleModal').addEventListener('shown.bs.modal', function() {
  console.log('Modal is now visible');
});
```

## Component Integration Examples

### Complete Skill Card Component

```html
<div class="col-lg-4 col-md-6 mb-4">
  <div class="skill-card h-100">
    <div class="skill-icon text-center mb-3">
      <i class="fas fa-code fa-3x text-primary"></i>
    </div>
    <h5 class="text-center mb-3">Web Development</h5>
    <p class="text-center text-muted mb-3">
      Creating responsive and modern web applications using latest technologies.
    </p>
    <div class="skill-progress mb-3">
      <div class="d-flex justify-content-between mb-1">
        <small>Proficiency</small>
        <small>85%</small>
      </div>
      <div class="progress">
        <div class="progress-bar bg-primary" style="width: 85%"></div>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-outline-primary btn-sm" onclick="showSkillDetails('web-dev')">
        Learn More
      </button>
    </div>
  </div>
</div>
```

```css
.skill-card {
  background: white;
  border-radius: 10px;
  padding: 30px 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.skill-icon i {
  transition: color 0.3s ease;
}

.skill-card:hover .skill-icon i {
  color: #007bff !important;
}
```

### Interactive Contact Card

```html
<div class="contact-card">
  <div class="contact-info">
    <h5>Get In Touch</h5>
    <p>Ready to start your next project? Contact me today!</p>
    <div class="contact-methods">
      <div class="contact-method">
        <i class="fas fa-envelope"></i>
        <span>email@example.com</span>
      </div>
      <div class="contact-method">
        <i class="fas fa-phone"></i>
        <span>+1 (555) 123-4567</span>
      </div>
      <div class="contact-method">
        <i class="fas fa-map-marker-alt"></i>
        <span>City, Country</span>
      </div>
    </div>
  </div>
  <div class="contact-actions">
    <button class="btn btn-primary me-2" onclick="scrollToContact()">
      Send Message
    </button>
    <button class="btn btn-outline-secondary" onclick="downloadCV()">
      Download CV
    </button>
  </div>
</div>
```

```javascript
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth'
  });
}

function downloadCV() {
  // Implement CV download logic
  const link = document.createElement('a');
  link.href = 'path/to/cv.pdf';
  link.download = 'CV.pdf';
  link.click();
}
```

---

**Last Updated**: January 2025  
**Components Version**: 1.0.0