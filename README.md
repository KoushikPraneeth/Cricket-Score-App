# Live Cricket Scores App

A real-time cricket score tracking application built with React and Vite. Displays live scores, match details, and provides various features for cricket enthusiasts.

## Features

- 🏏 Real-time live scores and match updates
- 🌓 Light/Dark theme toggle
- 🔍 Search matches by name
- 🎚️ Filter matches by status (Live, Completed, Upcoming)
- 🔔 Score update notifications
- 📱 Responsive design for all devices
- ⚡ Fast and lightweight

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Use the search bar to find specific matches
- Filter matches using the dropdown menu
- Click the theme toggle button to switch between light and dark modes
- Score updates will appear as notifications in the bottom-right corner

## API Usage

The app uses the [CricAPI](https://www.cricapi.com/) to fetch live match data. You'll need to:

1. Sign up at [CricAPI](https://www.cricapi.com/) to get your API key
2. Replace the API key in `src/App.jsx`:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

## Project Structure

```
/src
  ├── App.jsx            # Main application component
  ├── main.jsx           # Application entry point
  ├── index.css          # Global styles
  ├── ThemeContext.js    # Theme context provider
  ├── ThemeProvider.jsx  # Theme state management
  └── ThemeToggleButton.jsx # Theme toggle component
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

For any questions or suggestions, please open an issue on GitHub.

## Acknowledgments

- [CricAPI](https://www.cricapi.com/) for the cricket data
- [React Icons](https://react-icons.github.io/react-icons/) for the theme toggle icons
- [Vite](https://vitejs.dev/) for the development environment
