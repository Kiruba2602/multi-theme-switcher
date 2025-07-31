# Multi-Theme Switcher React App - Kirubakaran - React Front-End Developer

A responsive React + TypeScript web application featuring a multi-theme switcher with three distinct themes, routing, product API integration, and animated transitions.

---

## Live Demo

[Add your live deployment URL here, e.g. https://your-app.vercel.app]

---

## Features

- **Three visually distinct themes:**

  - **Theme 1:** Minimal light theme with sans-serif fonts and clean layout
  - **Theme 2:** Dark mode with sidebar navigation, bold serif fonts
  - **Theme 3:** Colorful card-based grid layout, playful "Pacifico" font

- Responsive design for mobile and desktop using Tailwind CSS
- Persistent theme selection stored in localStorage
- React Router with pages: Home, About, Contact
- Animated transitions between themes using Framer Motion
- Product catalog fetched dynamically from [FakeStore API](https://fakestoreapi.com/products)
- Accessibility considerations such as keyboard focus outlines and alt text on images
- TypeScript for strong typing and maintainability
- Modular, reusable components with clear code documentation

---

## Folder Structure

### Root directory
```
├── public/
│ └── index.html # HTML entry with Google Fonts linked
├── src/
│ ├── assets/ # Images, logos (if any)
│ ├── components/ # Reusable UI components (Header, Sidebar, ProductCard, Loader, Error)
│ ├── context/ # ThemeContext and provider for theme state
│ ├── hooks/ # Custom hooks (useLocalStorage)
│ ├── pages/ # Page components (Home, About, Contact)
│ ├── styles/ # Global CSS or Tailwind imports
│ ├── utils/ # Utility functions/helpers
│ ├── App.tsx # Main app component with layout and routes
│ ├── main.tsx # React DOM entry
│ └── types/ # TypeScript types/interfaces (optional)
├── .env # Environment variables (if any)
├── package.json # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── README.md # This documentation file
└── .gitignore # Files to ignore in version control
```

---

## Setup and Run Locally

### 1. Clone the repository:

git clone https://github.com/kiruba2602/multi-theme-switcher.git
cd multi-theme-switcher

---

### 2. Install dependencies:

npm install

---

### 3. Run the development server:

npm run dev

The app should open at http://localhost:5173 (or another specified port).

---

### 4. Build for production:

npm run build

This generates an optimized build in the `/dist` folder, ready for deployment.

---

## Technologies & Libraries Used

- [React](https://reactjs.org/) + TypeScript
- [React Router](https://reactrouter.com/) for routing
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [FakeStore API](https://fakestoreapi.com/) to fetch product data dynamically
- Google Fonts (Roboto, Roboto Slab, Pacifico) for theme typography
- Custom hooks and React Context API for state and theme management

---

## How to Use the Theme Switcher

- Use the theme dropdown in the fixed header to switch between three themes.
- Your choice is saved and persists on page reload.
- Theme 2 activates a sidebar navigation with Home, About, and Contact links.
- Themes 1 and 3 use top header navigation only.
- Animated smooth fade transitions occur on theme switch.

---

## Accessibility & Best Practices

- All interactive elements have keyboard focus outlines and proper aria labels.
- Images include descriptive alt attributes for screen readers.
- No usage of `dangerouslySetInnerHTML` or unsafe code.
- All API data displayed has safe escape handling.
- Project is modular with reusable and well-commented components.

---

## Test Credentials

_No authentication implemented for this project._

---

## Contributions

This project is built solely for the assessment and demonstration of front-end skills related to theming, React, and TypeScript.

---
