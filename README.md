# Portfolio Website

This is a personal portfolio website showcasing UI projects and logo designs.

## Setup and Deployment

1. **GitHub Setup**:
   - Create a new repository on GitHub
   - Push this code to the repository
   - Enable GitHub Pages in repository settings

2. **Domain Setup (hardikmonga.com)**:
   - Go to your domain registrar's DNS settings
   - Add these DNS records:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     ```
     ```
     Type: CNAME
     Name: www
     Value: yourusername.github.io
     ```

3. **GitHub Pages Configuration**:
   - Go to repository Settings > Pages
   - Set source branch to 'main'
   - Add your custom domain 'hardikmonga.com'
   - Enable HTTPS (wait for certificate to be issued)

## Local Development

1. Clone the repository
2. Open index.html in your browser
3. Make changes and test locally
4. Push changes to GitHub to update the live site

## Structure

- `index.html` - Main HTML file
- `css/style.css` - Styles
- `js/main.js` - JavaScript functionality
- `images/` - Add your project images here

## Adding Projects

1. Open index.html
2. Find the project-grid or logo-grid section
3. Add new projects following the existing structure

## Security Features

- HTTPS enabled
- Form validation
- No sensitive data exposed
- Secure external links
