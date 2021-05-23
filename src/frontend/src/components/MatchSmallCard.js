import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({teamName, match}) => {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;

  if(!match) return null;
    return (
      <div className= {isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
        <Link to={otherTeamRoute}>
          <span>vs</span>
          <p>{otherTeam}</p>
        </Link>
        <h3 className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
       
      </div>
    );
  }