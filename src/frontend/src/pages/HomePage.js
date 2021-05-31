import { React, useEffect, useState } from 'react';
import './HomePage.scss';
import {TeamTile} from './TeamTile';


 export const HomePage = () => {

    const [teams, setTeams] = useState([]);


    useEffect( () => {
        const fecthTeams = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/teams`);
            const data = await response.json();
            setTeams(data);
            console.log(data);
        }
        fecthTeams();

    }, []);

  

  return (
    <div className="HomePage">
     <div className="header-section">
      <h1 className="app-name">IPL Dashboard</h1>

     </div>
     <div className="team-grid">
      {
        teams.map(team => <TeamTile teamName={team.teamName} key={team.teamName} />)
      }
     </div>
      
    </div>
  );
}