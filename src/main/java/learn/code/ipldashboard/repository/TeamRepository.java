package learn.code.ipldashboard.repository;

import learn.code.ipldashboard.model.Team;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);

    List<Team> findAll();
}
