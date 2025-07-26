# API Reference

This document provides detailed technical reference for all public APIs, functions, and methods in the Personal Portfolio Website.

## Table of Contents

- [JavaScript APIs](#javascript-apis)
- [HTML Elements API](#html-elements-api)
- [CSS Classes API](#css-classes-api)
- [EmailJS Integration](#emailjs-integration)
- [Bootstrap Components](#bootstrap-components)

## JavaScript APIs

### Global Functions

#### `window.onscroll`

**Type**: Event Handler Function  
**Scope**: Global  
**Purpose**: Handles navbar styling changes based on scroll position

```javascript
window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById('navbar').classList.add('scrolled');
  } else {
    document.getElementById('navbar').classList.remove('scrolled');
  }
}
```

**Parameters**: None (automatic event handler)

**Return Value**: `undefined`

**Side Effects**:
- Adds/removes `scrolled` class from `#navbar` element
- Modifies DOM element styling

**Browser Support**: All modern browsers

**Example Usage**:
```javascript
// Automatically triggered on scroll
// No manual invocation required
```

---

#### `sendMail()`

**Type**: Function  
**Scope**: Global  
**Purpose**: Sends contact form data via EmailJS service

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

**Parameters**: None (reads from DOM elements)

**Return Value**: `undefined`

**Dependencies**:
- EmailJS library
- DOM elements: `#nama`, `#email`, `#subject`, `#pesan`

**Side Effects**:
- Reads form input values
- Sends HTTP request via EmailJS
- Shows browser alert

**Error Handling**: Basic promise handling with alert

**Example Usage**:
```javascript
// Called via onclick event
<button onclick="sendMail()">Send Email</button>

// Or programmatically
sendMail();
```

**Configuration Required**:
```javascript
// EmailJS initialization (in HTML head)
emailjs.init({
  publicKey: "wZxYl_NuR10-m_DYA",
});
```

**Service Configuration**:
- Service ID: `service_sbcztl5`
- Template ID: `template_23seulx`

---

### Enhanced API Functions (Recommended)

#### `validateForm()` (Enhancement)

**Type**: Function  
**Scope**: Global  
**Purpose**: Validates contact form inputs before submission

```javascript
function validateForm() {
  const name = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('pesan').value;
  
  // Check for empty fields
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
```

**Parameters**: None

**Return Value**: 
- `true` - Form is valid
- `false` - Form has validation errors

**Validation Rules**:
- All fields must be non-empty
- Email must match regex pattern
- Shows alert for validation errors

**Example Usage**:
```javascript
function sendMail() {
  if (!validateForm()) {
    return; // Stop execution if validation fails
  }
  // Continue with email sending...
}
```

---

#### `addSmoothScrolling()` (Enhancement)

**Type**: Function  
**Scope**: Global  
**Purpose**: Adds smooth scrolling behavior to navigation links

```javascript
function addSmoothScrolling() {
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
}
```

**Parameters**: None

**Return Value**: `undefined`

**Side Effects**:
- Adds click event listeners to anchor links
- Prevents default link behavior
- Implements smooth scrolling

**Browser Support**: Modern browsers (fallback to instant scroll)

**Example Usage**:
```javascript
// Call after DOM is loaded
document.addEventListener('DOMContentLoaded', addSmoothScrolling);
```

## HTML Elements API

### Navigation Elements

#### `#navbar`

**Type**: Navigation Container  
**Element**: `<nav>`  
**Classes**: `navbar`, `navbar-expand-lg`, `bg-body-tertiary`, `fixed-top`

**JavaScript Interface**:
```javascript
const navbar = document.getElementById('navbar');

// Add scrolled state
navbar.classList.add('scrolled');

// Remove scrolled state
navbar.classList.remove('scrolled');

// Check if scrolled
const isScrolled = navbar.classList.contains('scrolled');
```

**CSS States**:
- Default: `.navbar`
- Scrolled: `.navbar.scrolled`

---

### Form Elements

#### `#nama` (Name Input)

**Type**: Text Input  
**Element**: `<input type="text">`  
**Purpose**: User name input for contact form

**JavaScript Interface**:
```javascript
const nameInput = document.getElementById('nama');

// Get value
const name = nameInput.value;

// Set value
nameInput.value = 'John Doe';

// Validate
const isValid = nameInput.value.trim().length > 0;
```

---

#### `#email` (Email Input)

**Type**: Email Input  
**Element**: `<input type="email">`  
**Purpose**: User email input for contact form

**JavaScript Interface**:
```javascript
const emailInput = document.getElementById('email');

// Get value
const email = emailInput.value;

// Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidEmail = emailRegex.test(emailInput.value);
```

---

#### `#subject` (Subject Input)

**Type**: Text Input  
**Element**: `<input type="text">`  
**Purpose**: Email subject line

**JavaScript Interface**:
```javascript
const subjectInput = document.getElementById('subject');
const subject = subjectInput.value;
```

---

#### `#pesan` (Message Textarea)

**Type**: Textarea  
**Element**: `<textarea>`  
**Purpose**: Email message content

**JavaScript Interface**:
```javascript
const messageTextarea = document.getElementById('pesan');
const message = messageTextarea.value;

// Character count
const charCount = messageTextarea.value.length;
```

## CSS Classes API

### Layout Classes

#### `.section-padding`

**Type**: Layout Class  
**Purpose**: Consistent vertical spacing for sections

**Properties**:
```css
.section-padding {
  padding-top: 120px;
  padding-bottom: 120px;
}
```

**Usage**:
```html
<section class="section-padding">
  <!-- Section content -->
</section>
```

**Responsive Behavior**: Fixed padding on all screen sizes

---

#### `.section-title`

**Type**: Layout Class  
**Purpose**: Centered title container with consistent margins

**Properties**:
```css
.section-title {
  max-width: 550px;
  margin: 0 auto 60px auto;
}
```

**Usage**:
```html
<div class="section-title text-center">
  <h1>Section Title</h1>
  <p>Section description</p>
</div>
```

---

### Navigation Classes

#### `.navbar`

**Type**: Component Class  
**Purpose**: Base navbar styling

**Properties**:
```css
.navbar {
  padding-top: 30px;
  padding-bottom: 30px;
}
```

**Modifiers**:
- `.navbar.scrolled` - Compressed state when scrolled

---

#### `.navbar.scrolled`

**Type**: State Class  
**Purpose**: Compressed navbar when page is scrolled

**Properties**:
```css
.navbar.scrolled {
  padding-top: 10px;
  padding-bottom: 10px;
}
```

**Application**: Automatically applied via JavaScript scroll handler

---

### Form Classes

#### `#contact .form-control`

**Type**: Scoped Component Class  
**Purpose**: Custom form input styling within contact section

**Properties**:
```css
#contact .form-control {
  border-radius: 0;
}
```

**Scope**: Only applies to `.form-control` elements within `#contact`

---

#### `#contact .form-control:focus`

**Type**: State Class  
**Purpose**: Focus state for form inputs

**Properties**:
```css
#contact .form-control:focus {
  box-shadow: none;
  border-color: btn btn-success;
}
```

**Trigger**: Applied when form input receives focus

---

### Footer Classes

#### `footer`

**Type**: Component Class  
**Purpose**: Main footer container styling

**Properties**:
```css
footer {
  background-color: darkgreen;
  padding-top: 85px;
}
```

**Child Elements**:
- `footer h4` - White headings
- `footer p, footer li, footer li a` - Semi-transparent text

## EmailJS Integration

### Configuration API

#### `emailjs.init()`

**Type**: Initialization Function  
**Library**: EmailJS  
**Purpose**: Initialize EmailJS with public key

```javascript
emailjs.init({
  publicKey: "wZxYl_NuR10-m_DYA",
});
```

**Parameters**:
- `publicKey` (string): Your EmailJS public key

**Required**: Must be called before using EmailJS services

---

#### `emailjs.send()`

**Type**: Service Function  
**Library**: EmailJS  
**Purpose**: Send email via configured service

```javascript
emailjs.send(serviceID, templateID, templateParams)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
  })
  .catch(function(error) {
    console.log('FAILED...', error);
  });
```

**Parameters**:
- `serviceID` (string): EmailJS service identifier
- `templateID` (string): Email template identifier  
- `templateParams` (object): Template variables

**Return Value**: Promise that resolves on success

**Current Configuration**:
```javascript
emailjs.send('service_sbcztl5', 'template_23seulx', {
  name: 'User Name',
  email: 'user@example.com',
  subject: 'Contact Subject',
  message: 'Message content'
});
```

## Bootstrap Components

### Navbar Component

**Class**: `.navbar`  
**Bootstrap Version**: 5.3.5  
**Type**: Responsive navigation component

**Key Classes**:
- `.navbar-expand-lg` - Responsive breakpoint
- `.navbar-toggler` - Mobile menu button
- `.navbar-collapse` - Collapsible content
- `.navbar-nav` - Navigation list
- `.nav-item` - Navigation item
- `.nav-link` - Navigation link

**JavaScript Methods**:
```javascript
// Bootstrap navbar collapse
const navbar = new bootstrap.Collapse('#navbarSupportedContent');
navbar.toggle();
```

---

### Grid System

**Classes**: `.container`, `.row`, `.col-*`  
**Purpose**: Responsive layout system

**Example Usage**:
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <!-- Half width on medium+ screens -->
    </div>
    <div class="col-md-6">
      <!-- Half width on medium+ screens -->
    </div>
  </div>
</div>
```

**Breakpoints**:
- `xs` - <576px
- `sm` - ≥576px
- `md` - ≥768px
- `lg` - ≥992px
- `xl` - ≥1200px
- `xxl` - ≥1400px

---

### Form Components

**Classes**: `.form-control`, `.form-group`, `.btn`  
**Purpose**: Styled form elements

**Form Control API**:
```javascript
// Get form control value
const input = document.querySelector('.form-control');
const value = input.value;

// Validate form control
const isValid = input.checkValidity();

// Add validation feedback
input.classList.add('is-valid'); // or 'is-invalid'
```

## Error Handling

### JavaScript Errors

**Common Error Types**:
1. `ReferenceError` - Undefined variables/functions
2. `TypeError` - Incorrect data types
3. `NetworkError` - EmailJS connection issues

**Error Handling Pattern**:
```javascript
try {
  // Risky operation
  sendMail();
} catch (error) {
  console.error('Error occurred:', error);
  alert('An error occurred. Please try again.');
}
```

### EmailJS Errors

**Common Issues**:
- Invalid service/template IDs
- Network connectivity problems
- Rate limiting
- Invalid email addresses

**Enhanced Error Handling**:
```javascript
emailjs.send('service_id', 'template_id', params)
  .then(function(response) {
    console.log('Email sent successfully:', response);
    alert('Message sent successfully!');
  })
  .catch(function(error) {
    console.error('Email failed:', error);
    
    if (error.status === 400) {
      alert('Invalid email format. Please check your input.');
    } else if (error.status === 429) {
      alert('Too many requests. Please try again later.');
    } else {
      alert('Failed to send message. Please try again.');
    }
  });
```

## Performance Considerations

### DOM Queries

**Optimization**: Cache DOM element references

```javascript
// ❌ Bad - queries DOM every time
function sendMail() {
  const name = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  // ...
}

// ✅ Good - cache references
const formElements = {
  name: document.getElementById('nama'),
  email: document.getElementById('email'),
  subject: document.getElementById('subject'),
  message: document.getElementById('pesan')
};

function sendMail() {
  const name = formElements.name.value;
  const email = formElements.email.value;
  // ...
}
```

### Event Listeners

**Memory Management**: Remove event listeners when not needed

```javascript
function cleanup() {
  window.onscroll = null; // Remove scroll listener
  
  // Remove all click listeners
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.removeEventListener('click', smoothScrollHandler);
  });
}
```

## Browser Compatibility

### Feature Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `classList` | ✅ 8+ | ✅ 3.6+ | ✅ 5.1+ | ✅ 10+ |
| `querySelector` | ✅ 4+ | ✅ 3.5+ | ✅ 3.1+ | ✅ 8+ |
| `addEventListener` | ✅ 1+ | ✅ 1+ | ✅ 1+ | ✅ 9+ |
| `Promise` | ✅ 32+ | ✅ 29+ | ✅ 8+ | ✅ 12+ |
| `scrollIntoView` | ✅ 1+ | ✅ 1+ | ✅ 1+ | ✅ 12+ |

### Polyfills

For older browser support:

```javascript
// Promise polyfill for IE
if (!window.Promise) {
  // Load Promise polyfill
}

// classList polyfill for IE9
if (!Element.prototype.classList) {
  // Load classList polyfill
}
```

---

**Last Updated**: January 2025  
**API Version**: 1.0.0