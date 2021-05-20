import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { useParams } from 'react-router-dom';

 export const TeamPage = () => {

    const [team, setTeam] = useState({matches: []});

    const { teamName } = useParams();

    useEffect( () => {
        const fecthMaches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}`);
            const data = await response.json();
            setTeam(data);
            console.log(data);
        }
        fecthMaches();

    }, [teamName]);

    if(!team.teamName) {
      return  (
        <h1>Team Not Found!</h1>
      )
    }

  return (
    <div className="TeamPage">
        <h3>{team.teamName}</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
         {
           team.matches.slice(1).map((match, index) => <MatchSmallCard teamName={team.teamName}  match ={match} key={index}/>)
         }
    </div>
  );
}