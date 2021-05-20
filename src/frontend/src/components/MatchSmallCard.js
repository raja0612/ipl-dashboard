import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({teamName, match}) => {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;

  if(!match) return null;
    return (
      <div className="MatchSmallCard">
        <Link to={otherTeamRoute}>
          <p>vs {otherTeam}</p>
        </Link>
       
      </div>
    );
  }