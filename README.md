# Personal Portfolio Website Documentation

A responsive personal portfolio website built with HTML5, CSS3, JavaScript, and Bootstrap 5. This documentation provides comprehensive information about all public APIs, functions, components, and usage instructions.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [HTML Components](#html-components)
- [JavaScript APIs](#javascript-apis)
- [CSS Classes](#css-classes)
- [External Dependencies](#external-dependencies)
- [Setup and Usage](#setup-and-usage)
- [Customization Guide](#customization-guide)
- [Browser Compatibility](#browser-compatibility)

## Overview

This is a single-page portfolio website featuring:
- Responsive navigation with scroll effects
- Hero section with personal introduction
- About section with skills showcase
- Education timeline
- Contact form with email integration
- Footer with quick links

## Project Structure

```
/
├── index.html          # Main HTML file
├── main.js            # JavaScript functionality
├── style.css          # Custom CSS styles
├── pizzakocak.jpg     # Profile image asset
└── README.md          # This documentation
```

## HTML Components

### Navigation Component (`#navbar`)

**Description**: Fixed-top responsive navigation bar with Bootstrap styling and custom scroll effects.

**Structure**:
```html
<nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
```

**Features**:
- Responsive hamburger menu for mobile devices
- Dropdown menu for additional navigation items
- Search functionality (UI only)
- Smooth scroll navigation to sections

**Navigation Links**:
- `#home` - Hero section
- `#about` - About section  
- `#edu` - Education section
- `#contact` - Contact form section

### Hero Section (`#home`)

**Description**: Full-height hero section with personal introduction.

**Structure**:
```html
<section id="home" class="d-flex align-items-center min-vh-100">
```

**Content**:
- Personal name with highlighted brand styling
- Brief introduction text
- Call-to-action button linking to contact section

### About Section (`#about`)

**Description**: Information section showcasing skills and expertise.

**Structure**:
```html
<section id="about" class="section-padding">
```

**Features**:
- Centered section title with description
- Skill cards with icons and descriptions
- "Read More" buttons for detailed information

### Education Section (`#edu`)

**Description**: Timeline of educational background.

**Structure**:
```html
<section id="edu">
```

**Content**:
- Institution name and duration
- Description of educational experience

### Contact Section (`#contact`)

**Description**: Interactive contact form with email integration.

**Structure**:
```html
<section id="contact" class="section-padding">
```

**Form Fields**:
- `#nama` - Name input field
- `#email` - Email input field  
- `#subject` - Subject input field
- `#pesan` - Message textarea

**Functionality**:
- Email sending via EmailJS service
- Form validation and user feedback

### Footer Component

**Description**: Multi-column footer with contact information and quick links.

**Structure**:
```html
<footer>
  <div class="footer-top">
  <div class="footer-bottom">
```

**Sections**:
- Personal branding and description
- Contact information
- Quick navigation links
- Copyright information

## JavaScript APIs

### Window Scroll Handler

**Function**: `window.onscroll`

**Description**: Handles navbar styling changes based on scroll position.

**Usage**:
```javascript
window.onscroll = function() {
  // Automatically called on page scroll
}
```

**Behavior**:
- Adds `scrolled` class to navbar when page is scrolled down
- Removes `scrolled` class when at top of page
- Provides visual feedback for navigation state

**Parameters**: None (event handler)

**Returns**: None

### Email Sending Function

**Function**: `sendMail()`

**Description**: Sends contact form data via EmailJS service.

**Usage**:
```javascript
sendMail(); // Called when contact form is submitted
```

**Process**:
1. Retrieves form data from input fields
2. Constructs parameters object
3. Sends email via EmailJS service
4. Shows success alert to user

**Form Data Mapping**:
- `name` ← `#nama` input value
- `email` ← `#email` input value  
- `subject` ← `#subject` input value
- `message` ← `#pesan` textarea value

**EmailJS Configuration**:
- Service ID: `service_sbcztl5`
- Template ID: `template_23seulx`
- Public Key: `wZxYl_NuR10-m_DYA`

**Parameters**: None (reads from DOM)

**Returns**: None (shows alert on success)

**Error Handling**: Basic alert notification system

## CSS Classes

### Navigation Styles

#### `.navbar`
**Description**: Base navbar styling with custom padding.

**Properties**:
```css
.navbar {
  padding-top: 30px;
  padding-bottom: 30px;
}
```

#### `.navbar.scrolled`
**Description**: Compressed navbar styling when page is scrolled.

**Properties**:
```css
.navbar.scrolled {
  padding-top: 10px;
  padding-bottom: 10px;
}
```

**Usage**: Automatically applied/removed by JavaScript scroll handler.

### Layout Classes

#### `.section-padding`
**Description**: Consistent vertical spacing for main sections.

**Properties**:
```css
.section-padding {
  padding-top: 120px;
  padding-bottom: 120px;
}
```

**Usage**: Apply to section elements for consistent spacing.

#### `.section-title`
**Description**: Centered title styling with consistent margins.

**Properties**:
```css
.section-title {
  max-width: 550px;
  margin: 0 auto 60px auto;
}
```

**Usage**: Apply to section header containers.

### Form Styles

#### `#contact .form-control`
**Description**: Custom form input styling with square borders.

**Properties**:
```css
#contact .form-control {
  border-radius: 0;
}
```

#### `#contact .form-control:focus`
**Description**: Focus state styling for form inputs.

**Properties**:
```css
#contact .form-control:focus {
  box-shadow: none;
  border-color: btn btn-success;
}
```

#### `#contact input.form-control`
**Description**: Specific height for input fields.

**Properties**:
```css
#contact input.form-control {
  height: 40px;
}
```

### Footer Styles

#### `footer`
**Description**: Main footer container styling.

**Properties**:
```css
footer {
  background-color: darkgreen;
  padding-top: 85px;
}
```

#### `footer h4`
**Description**: Footer heading text color.

**Properties**:
```css
footer h4 {
  color: white;
}
```

#### `footer p, footer li, footer li a`
**Description**: Footer text and link styling with transparency.

**Properties**:
```css
footer p,
footer li,
footer li a {
  color: rgba(255,255,255,0.7);
}
```

#### `.footer-top`
**Description**: Top section of footer with bottom border.

**Properties**:
```css
.footer-top {
  padding-bottom: 40px;
  border-bottom: 1px rgba(255,255,255,0.2);
}
```

#### `.footer-bottom`
**Description**: Bottom section of footer with padding.

**Properties**:
```css
.footer-bottom {
  padding-top: 40px;
  padding-bottom: 40px;
}
```

## External Dependencies

### Bootstrap 5.3.5

**Purpose**: CSS framework for responsive design and components.

**CDN Link**: 
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"></script>
```

**Components Used**:
- Navbar with responsive toggle
- Grid system (container, row, col)
- Form controls and styling
- Button components
- Utility classes

### EmailJS

**Purpose**: Client-side email sending service.

**CDN Link**:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

**Configuration**:
```javascript
emailjs.init({
  publicKey: "wZxYl_NuR10-m_DYA",
});
```

**Service Details**:
- Service ID: `service_sbcztl5`
- Template ID: `template_23seulx`

## Setup and Usage

### Basic Setup

1. **Clone or Download** the project files to your web server directory.

2. **File Structure**: Ensure all files are in the same directory:
   ```
   your-website/
   ├── index.html
   ├── main.js
   ├── style.css
   └── pizzakocak.jpg
   ```

3. **Web Server**: Serve the files through a web server (required for EmailJS functionality).

### Local Development

**Option 1: Python HTTP Server**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js HTTP Server**
```bash
# Install globally
npm install -g http-server

# Run server
http-server
```

**Option 3: PHP Built-in Server**
```bash
php -S localhost:8000
```

### Accessing the Website

Open your browser and navigate to:
- `http://localhost:8000` (or your configured port)

### Email Configuration

To set up the contact form:

1. **Create EmailJS Account**: Sign up at [emailjs.com](https://www.emailjs.com)

2. **Configure Service**: 
   - Create an email service (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create Template**:
   - Design email template with variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
   - Note the Template ID

4. **Update Configuration**:
   ```javascript
   // In index.html, update the public key
   emailjs.init({
     publicKey: "YOUR_PUBLIC_KEY",
   });
   
   // In main.js, update service and template IDs
   emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',parms)
   ```

## Customization Guide

### Personalizing Content

#### Update Personal Information

**Hero Section** (`#home`):
```html
<h1 class="display-2 fw-bold">Hai, Nama saya <span class="text-brand">YOUR_NAME</span></h1>
<h4 class="mb-3 mt5">Your personal description here.</h4>
```

**About Section** (`#about`):
```html
<h1>About Me</h1>
<p>Your about description here.</p>
```

**Education Section** (`#edu`):
```html
<h5>YOUR_SCHOOL</h5>
<small class="text-brand">YEAR_RANGE</small>
<p class="mb-0">Your education description here.</p>
```

#### Update Contact Information

**Footer Contact Section**:
```html
<li><a href="#">your-email@example.com</a></li>
```

### Styling Customization

#### Color Scheme

Update brand colors in `style.css`:
```css
/* Primary brand color */
.text-brand {
  color: #your-color;
}

/* Footer background */
footer {
  background-color: your-color;
}
```

#### Typography

Modify text styling:
```css
/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Your-Font', sans-serif;
}

/* Body text */
body {
  font-family: 'Your-Font', sans-serif;
}
```

#### Spacing

Adjust section padding:
```css
.section-padding {
  padding-top: YOUR_VALUE;
  padding-bottom: YOUR_VALUE;
}
```

### Adding New Sections

#### HTML Structure
```html
<section id="your-section" class="section-padding">
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
    <!-- Your content here -->
  </div>
</section>
```

#### Navigation Link
```html
<li class="nav-item">
  <a class="nav-link" href="#your-section">Your Section</a>
</li>
```

### JavaScript Enhancements

#### Adding Form Validation

```javascript
function validateForm() {
  const name = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('pesan').value;
  
  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields');
    return false;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }
  
  return true;
}

function sendMail() {
  if (!validateForm()) {
    return;
  }
  
  // Existing sendMail code...
}
```

#### Adding Smooth Scrolling

```javascript
// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

## Browser Compatibility

### Supported Browsers

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Opera**: 47+

### Features Used

- **CSS Grid & Flexbox**: Modern layout systems
- **ES6 Features**: Arrow functions, const/let
- **Bootstrap 5**: Modern CSS framework
- **EmailJS**: Modern email service

### Fallbacks

For older browser support, consider:

1. **Polyfills** for modern JavaScript features
2. **CSS Prefixes** for vendor-specific properties
3. **Alternative Layout** methods for CSS Grid/Flexbox

### Testing

Test your website across different:
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Devices**: Desktop, tablet, mobile
- **Screen Sizes**: Various resolutions
- **Operating Systems**: Windows, macOS, Linux, iOS, Android

## Performance Optimization

### Image Optimization

- Compress images before upload
- Use appropriate file formats (WebP, JPEG, PNG)
- Consider lazy loading for images

### CSS Optimization

- Minify CSS files for production
- Remove unused CSS rules
- Use CSS sprites for small icons

### JavaScript Optimization

- Minify JavaScript files
- Use async/defer for script loading
- Minimize DOM manipulations

### Loading Performance

- Enable gzip compression
- Use CDN for external resources
- Optimize critical rendering path

## Security Considerations

### EmailJS Security

- Keep public keys secure
- Monitor usage quotas
- Implement rate limiting
- Validate form inputs

### General Security

- Use HTTPS in production
- Sanitize user inputs
- Implement CSRF protection
- Regular dependency updates

## Troubleshooting

### Common Issues

#### Email Not Sending

1. **Check EmailJS Configuration**:
   - Verify public key
   - Confirm service ID
   - Validate template ID

2. **Browser Console Errors**:
   - Check for JavaScript errors
   - Verify network connectivity
   - Confirm CORS settings

#### Styling Issues

1. **Bootstrap Not Loading**:
   - Check CDN links
   - Verify internet connection
   - Use local files as fallback

2. **Custom Styles Not Applied**:
   - Check CSS syntax
   - Verify selector specificity
   - Clear browser cache

#### Responsive Issues

1. **Mobile Display Problems**:
   - Check viewport meta tag
   - Test Bootstrap grid classes
   - Verify media queries

### Debug Mode

Enable console logging:
```javascript
function sendMail() {
  console.log('Sending email...');
  
  let parms = {
    name: document.getElementById('nama').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('pesan').value,
  };
  
  console.log('Email parameters:', parms);
  
  emailjs.send('service_sbcztl5','template_23seulx',parms)
    .then(function(response) {
      console.log('Email sent successfully:', response);
      alert('Email Sent!');
    })
    .catch(function(error) {
      console.error('Email failed to send:', error);
      alert('Failed to send email. Please try again.');
    });
}
```

## Contributing

### Code Style

- Use consistent indentation (2 or 4 spaces)
- Follow semantic HTML structure
- Use meaningful CSS class names
- Comment complex JavaScript functions

### Testing Checklist

- [ ] All navigation links work
- [ ] Contact form sends emails
- [ ] Responsive design on all devices
- [ ] Cross-browser compatibility
- [ ] Performance optimization
- [ ] Accessibility compliance

## License

This project is open source. Feel free to use and modify as needed.

## Support

For questions or issues:
- Check this documentation
- Review browser console for errors
- Test with different browsers/devices
- Verify external service configurations

---

**Last Updated**: January 2025  
**Version**: 1.0.0
