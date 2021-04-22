package learn.code.ipldashboard.repository;

import learn.code.ipldashboard.model.Match;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;


public interface MatchRepository extends CrudRepository<Match, Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    default List<Match> finaLatestMatches(String teamName1, String teamName2) {
     return getByTeam1OrTeam2OrderByDateDesc(teamName1, teamName2, PageRequest.of(0, 4));
    }
}
