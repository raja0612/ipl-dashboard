import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { useParams } from 'react-router-dom';

 export const MatchPage = () => {

    const [matches, setMatches] = useState([]);

    const { teamName, year } = useParams();

    useEffect( () => {
        const fecthMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches/?year=${year}`);
            const data = await response.json();
            setMatches(data);
            console.log(data);
        }
        fecthMatches();

    }, [teamName, year]);

  return (
    <div className="MatchPage">
         {
                    matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
        }
    </div>
  );
}