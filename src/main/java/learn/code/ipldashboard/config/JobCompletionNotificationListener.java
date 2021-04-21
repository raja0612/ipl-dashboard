package learn.code.ipldashboard.config;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import learn.code.ipldashboard.model.Team;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

  private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

  private final EntityManager entityManager;

  @Autowired
  public JobCompletionNotificationListener(EntityManager entityManager) {
    this.entityManager = entityManager;
  }

  @Override
  @Transactional
  public void afterJob(JobExecution jobExecution) {
    if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
      log.info("!!! JOB FINISHED! Time to verify the results");

      Map<String, Team> teamData = new HashMap<>();

       entityManager.createQuery("select distinct m.team1, count(*) from Match m group by team1", Object[].class)
                    .getResultList()
                    .stream()
                    .map(each -> new Team((String)each[0], (long)each[1]))
                    .forEach( team -> teamData.put(team.getTeamName(), team));

      entityManager.createQuery("select distinct m.team2, count(*) from Match m group by team2", Object[].class)
                    .getResultList()
                    .stream()
                    .forEach(each -> {
                      Team team = teamData.get((String)each[0]);
                      team.setTotalMatches((team.getTotalMatches() + (long) each[1]));
                    });

     entityManager.createQuery("select m.matchWinner, count(*) from Match m group by m.matchWinner",  Object[].class)   
                    .getResultList()
                    .stream()
                    .forEach(each -> {
                      Team team = teamData.get((String)each[0]);
                      if (team != null) team.setTotalWins((team.getTotalWins() + (long) each[1]));
                    });     
                          
       teamData.values().forEach(each -> entityManager.persist(each));   
       teamData.values().forEach(each  -> System.out.println(each));
    }
  }
}