import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

 export const TeamPage = () => {

    const [team, setTeam] = useState({matches: []});

    useEffect( () => {
        const fecthMaches = async () => {
            const response = await fetch("http://localhost:8080/team/Chennai Super Kings");
            const data = await response.json();
            setTeam(data);
            console.log(data);
        }
        fecthMaches();

    }, []);

  return (
    <div className="TeamPage">
        <h3>{team.teamName}</h3>
        <MatchDetailCard match={team.matches[0]} />
         {
           team.matches.slice(1).map(match => <MatchSmallCard match ={match}/>)
         }
    </div>
  );
}