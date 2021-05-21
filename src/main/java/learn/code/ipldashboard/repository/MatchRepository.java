package learn.code.ipldashboard.repository;

import learn.code.ipldashboard.model.Match;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface MatchRepository extends CrudRepository<Match, Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    default List<Match> finaLatestMatches(String teamName) {
     return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, 4));
    }
    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :dateStart and :dateEnd order by date desc")
    List<Match> getMatchesByTeamBetweenDates(
        @Param("teamName") String teamName, 
        @Param("dateStart") LocalDate dateStart, 
        @Param("dateEnd") LocalDate dateEnd
    );
    
    /* List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
     String teamName1, LocalDate date1, LocalDate date2,
     String teamName2, LocalDate date3, LocalDate date4
    );
    */
}
