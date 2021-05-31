package learn.code.ipldashboard.controller;

import learn.code.ipldashboard.model.Match;
import learn.code.ipldashboard.model.Team;
import learn.code.ipldashboard.repository.MatchRepository;
import learn.code.ipldashboard.repository.TeamRepository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;

    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }
    

    @GetMapping("/teams")
    public Iterable<Team> getAllTeams() {
       return this.teamRepository.findAll();
    }

    @GetMapping("/team/{teamName}")
    public Team getTeamInfo(@PathVariable String teamName) {
        Team team  = this.teamRepository.findByTeamName(teamName);
        team.setMatches(this.matchRepository.finaLatestMatches(teamName));
        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);
        return this.matchRepository.getMatchesByTeamBetweenDates(
            teamName,
            startDate,
            endDate
            );
    }
}
