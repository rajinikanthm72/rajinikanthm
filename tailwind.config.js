// tailwind.config.js

module.exports = {
  // Enable JIT (Just-In-Time) mode for better performance during development
  mode: 'jit', 

  // Content array where Tailwind should look for class names
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Scan all HTML, JS, TS, JSX, and TSX files in the src folder
    "./public/index.html", // Add your HTML files if needed
  ],

  // Customizing the theme to extend the default settings
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example custom color (Blue)
        secondary: '#9333EA', // Example custom color (Purple)
        accent: '#F59E0B', // Example custom color (Yellow)
      },
      spacing: {
        128: '32rem', // Custom spacing value (larger than the default ones)
        144: '36rem', // Another custom spacing value
      },
      fontFamily: {
        custom: ['"Open Sans"', 'sans-serif'], // Example custom font family
      },
      fontSize: {
        'xxs': '.65rem', // Example smaller font size
      },
    },
  },

  // Adding custom plugins (if needed) for extending Tailwind CSS functionality
  plugins: [
    // Example plugin: Add forms plugin (if you're working with forms)
    require('@tailwindcss/forms'),
    
    // Example plugin: Add typography plugin (for rich text formatting)
    require('@tailwindcss/typography'),
    
    // Add more plugins as needed
  ],

  // Other configuration options (optional)
  darkMode: 'media', // Enable dark mode based on user's system preference
}