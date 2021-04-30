import { React } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

 export const TeamPage = () => {
  return (
    <div className="TeamPage">
        <h3>Team Name</h3>
        <MatchDetailCard />
        <MatchSmallCard />
        <MatchSmallCard />
        <MatchSmallCard />
    </div>
  );
}