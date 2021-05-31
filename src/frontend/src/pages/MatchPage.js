import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { useParams } from 'react-router-dom';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';

 export const MatchPage = () => {

    const [matches, setMatches] = useState([]);

    const { teamName, year } = useParams();

    useEffect( () => {
        const fecthMatches = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
            console.log(data);
        }
        fecthMatches();

    }, [teamName, year]);

  return (
    <div className="MatchPage">
     <div className="year-selector">
        <h3> Select Year </h3>
        <YearSelector teamName={teamName} />
      </div>
    <div>
      {
        matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
      }
    </div>
    </div>
  );
}