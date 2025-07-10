# 🍔 Food Ordering App

A modern, responsive food ordering application built using **React** and deployed on **Vercel**. The app fetches real-time restaurant listings from Swiggy's public-facing API and displays them in a clean UI.

🔗 **Live App**: [food-ordering-roan-six.vercel.app](https://food-ordering-roan-six.vercel.app/)

---

## 🚀 Features

- 📍 Fetches restaurant data dynamically based on latitude & longitude
- 🧾 Displays a restaurant listing with name, rating, cuisine, and delivery time
- 🔍 Includes basic search functionality (optional: coming soon)
- 📦 Built using **React + Parcel** bundler
- 🌐 Fully deployed and hosted via **Vercel**

---

## 🛠️ Tech Stack

- **Frontend**: React, HTML5, TailwindCSS, JavaScript (ES6+)
- **Bundler**: Parcel
- **Deployment**: Vercel
- **Data Source**: Swiggy (Unofficial public API)

---

## 📁 Folder Structure

FoodOrdering/
│
├── components/               # Reusable React components
│   ├── Header.js             # Navigation bar
│   ├── Body.js               # Main content layout
│   └── RestaurantCard.js     # Individual restaurant card
│
├── utils/                    # Utility functions and mock data
│   └── mockData.js
│
├── src/                      # Source directory for assets and styles
│   ├── assets/               # Images, icons, etc.
│   └── styles/
│       └── index.css         # Tailwind CSS directives (@tailwind base, etc.)
│
├── index.html                # Entry HTML for Parcel
├── index.js                  # React root renderer (ReactDOM.createRoot)
├── App.js                    # Root App component
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS config for Tailwind
├── package.json              # Project metadata and scripts
└── .gitignore                # Ignored files for Git

---

## 🚧 Setup & Run Locally

```bash
git clone https://github.com/shwetank08/FoodOrdering.git
cd FoodOrdering
npm install
npm run start
```

🛑 Known Limitations
    
    ❌ CORS restrictions prevent direct API use from Swiggy in production

    🚧 Fallback logic is implemented for alternate endpoints

    🔒 Swiggy API may change or block repeated requests



📦 Deployment
    
    This project is continuously deployed to Vercel. To deploy your own version:

    Fork the repository

    Link it to your Vercel account


Set your build command as npm run build and output directory as dist

🙋‍♂️ Author
    
    Shwetank Singh
    🔗 GitHub
    🌐 Live Demo