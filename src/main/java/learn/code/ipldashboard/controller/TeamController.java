package learn.code.ipldashboard.controller;

import learn.code.ipldashboard.model.Team;
import learn.code.ipldashboard.repository.MatchRepository;
import learn.code.ipldashboard.repository.TeamRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    
    @GetMapping("/")
    public String home() {
        return "Hello World";
    }

    @GetMapping("/team/{teamName}")
    public Team getTeamInfo(@PathVariable String teamName) {
        Team team  = this.teamRepository.findByTeamName(teamName);
        team.setMatches(this.matchRepository.finaLatestMatches(teamName));
        return team;
    }
}
