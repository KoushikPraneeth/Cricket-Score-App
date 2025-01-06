import React, { useState, useEffect, useContext } from 'react';
    import ThemeContext from './ThemeContext';
    import ThemeToggleButton from './ThemeToggleButton.jsx';

    const API_KEY = 'd7d30778-a096-4985-95c1-b4932b26767b';
    const API_URL = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`;

    function App() {
      const [matches, setMatches] = useState([]);
      const { theme } = useContext(ThemeContext);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(API_URL);
            const data = await response.json();
            if (data.status === "success") {
              const sortedMatches = data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
              setMatches(sortedMatches);
            } else {
              console.error('API Error:', data.status);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 60000);

        return () => clearInterval(intervalId);
      }, []);

      return (
        <div className={`${theme}-mode`}>
          <ThemeToggleButton />
          <div className="container">
            <h1>Live Cricket Scores</h1>
            {matches.map((match) => (
              <div key={match.id} className="match-card">
                <div className="match-name">{match.name}</div>
                <div className="match-date">Date: {match.date}</div>
                <div className="match-status">{match.status}</div>
                <div className="match-venue">{match.venue}</div>
                <div className="score-details">
                  {match.score.map((score, index) => (
                    <p key={index}>
                      {score.inning}: {score.r}/{score.w} ({score.o})
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default App;
