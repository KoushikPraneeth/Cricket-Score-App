import React, { useState, useEffect, useContext, useMemo } from 'react';
import ThemeContext from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton.jsx';

const API_KEY = 'd7d30778-a096-4985-95c1-b4932b26767b';
const API_URL = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`;

function App() {
  const [matches, setMatches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [notifications, setNotifications] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.status === "success") {
          const sortedMatches = data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
          setMatches(sortedMatches);
          checkForScoreUpdates(sortedMatches);
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

  const checkForScoreUpdates = (newMatches) => {
    newMatches.forEach(match => {
      const oldMatch = matches.find(m => m.id === match.id);
      if (oldMatch && JSON.stringify(oldMatch.score) !== JSON.stringify(match.score)) {
        setNotifications(prev => [
          ...prev,
          `${match.name} score updated!`
        ]);
      }
    });
  };

  const filteredMatches = useMemo(() => {
    return matches.filter(match => {
      const matchesSearch = match.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || match.status.includes(filterStatus);
      return matchesSearch && matchesStatus;
    });
  }, [matches, searchTerm, filterStatus]);

  return (
    <div className={`${theme}-mode`}>
      <ThemeToggleButton />
      <div className="container">
        <h1>Live Cricket Scores</h1>
        
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search matches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Matches</option>
            <option value="Live">Live Matches</option>
            <option value="Finished">Completed Matches</option>
            <option value="Scheduled">Upcoming Matches</option>
          </select>
        </div>

        {filteredMatches.map((match) => (
          <div key={match.id} className="match-card">
            <div className="match-name">{match.name}</div>
            <div className="match-date">Date: {match.date}</div>
            <div className="match-status">{match.status}</div>
            <div className="match-venue">{match.venue}</div>
            <div className="score-details">
              {match.score?.map((score, index) => (
                <p key={index}>
                  {score.inning}: {score.r}/{score.w} ({score.o})
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {notifications.length > 0 && (
        <div 
          className="notification-badge"
          onClick={() => setNotifications([])}
        >
          {notifications.length} new updates
        </div>
      )}
    </div>
  );
}

export default App;
