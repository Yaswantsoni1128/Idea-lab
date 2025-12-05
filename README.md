# IdeaLab - Modern Business Website

A beautiful, fully responsive, and modern business website built with React, featuring smooth animations, professional design, and an intuitive user experience. This project demonstrates advanced front-end development skills with React Router, Framer Motion animations, and Tailwind CSS.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.25-0055FF?logo=framer&logoColor=white)

## 🌐 Live Demo

**🔗 [View Live Website](https://idea-lab-lime.vercel.app/)**

## ✨ Features

### 🎨 Design & UI
- **Modern & Professional Design** - Clean, contemporary interface with beautiful gradients
- **Fully Responsive** - Perfect experience on mobile, tablet, and desktop devices
- **Smooth Animations** - Eye-catching animations powered by Framer Motion
- **Professional Icons** - Lucide React icons throughout the application
- **High-Quality Images** - Unsplash images for a professional look

### 🚀 Functionality
- **Multi-Page Navigation** - React Router DOM for seamless page transitions
- **Scroll to Top** - Automatic scroll to top on route changes
- **Contact Form** - Fully functional contact form with validation
- **Interactive Components** - Hover effects, transitions, and micro-interactions
- **Mobile Menu** - Responsive hamburger menu for mobile devices

### 📱 Pages
- **Home Page** - Hero section, services overview, stats, and CTA
- **Services Page** - Detailed service offerings with images and features
- **About Page** - Company story, values, and team members
- **Contact Page** - Contact form with multiple contact methods

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 4.1.17
- **Animations:** Framer Motion 12.23.25
- **Routing:** React Router DOM 7.10.1
- **Icons:** Lucide React 0.556.0
- **Package Manager:** npm

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yaswantsoni1128/pinak-idea-lab.git
   cd pinak-idea-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
pinak-idea-lab/
├── src/
│   ├── components/
│   │   ├── Layout.jsx           # Main layout with Nav & Footer
│   │   ├── NavigationBar.jsx    # Responsive navigation bar
│   │   ├── HeroSection.jsx      # Hero section component
│   │   ├── ServicesSection.jsx  # Services grid component
│   │   ├── ContactForm.jsx      # Contact form with validation
│   │   ├── Footer.jsx           # Footer component
│   │   └── ScrollToTop.jsx      # Scroll to top on route change
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   ├── Services.jsx         # Services page
│   │   ├── About.jsx            # About page
│   │   └── Contact.jsx          # Contact page
│   ├── App.jsx                  # Main app component with routing
│   ├── App.css                  # App-specific styles
│   ├── index.css                # Global styles (Tailwind)
│   └── main.jsx                 # Entry point
├── public/                      # Static assets
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── package.json                 # Dependencies and scripts
└── README.md                   # This file
```

## 🎯 Key Components

### Navigation Bar
- Fixed navigation with smooth scroll
- Responsive mobile menu with animations
- Active route highlighting
- Backdrop blur effect

### Hero Section
- Full-screen hero with background image
- Animated text reveal
- Call-to-action button
- Scroll indicator

### Services Section
- Grid layout with service cards
- Image headers with overlay
- Icon badges with hover effects
- Responsive design

### Contact Form
- Form validation (email, phone, required fields)
- Animated error messages
- Success/error feedback
- Loading states

### Footer
- Multi-column layout
- Social media links
- Contact information
- Responsive design

## 🎨 Design Features

- **Color Scheme:** Blue to Purple gradient theme
- **Typography:** Responsive font sizes with proper hierarchy
- **Spacing:** Consistent padding and margins
- **Animations:** Smooth transitions and hover effects
- **Images:** High-quality Unsplash images
- **Icons:** Professional Lucide React icons

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1280px

## 🔧 Customization

### Changing Colors
Edit the gradient classes in components:
- Hero sections: `from-blue-600 via-blue-700 to-purple-700`
- Buttons: `bg-blue-600 hover:bg-blue-700`

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Layout.jsx`

### Modifying Content
- Update text content directly in component files
- Replace images with your own Unsplash URLs
- Customize icons from Lucide React library

## 🚢 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project root
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Yaswantsoni1128/pinak-idea-lab/issues).

## 📧 Contact

For questions or inquiries, please open an issue on GitHub or contact through the website's contact form.

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vite.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [Unsplash](https://unsplash.com/) - Free images

---

<div align="center">

**Made with ❤️ by [Yaswantsoni1128](https://github.com/Yaswantsoni1128)**

⭐ Star this repo if you find it helpful!

</div>
