package learn.code.ipldashboard.batch;

import learn.code.ipldashboard.data.MatchInput;
import learn.code.ipldashboard.model.Match;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import java.time.LocalDate;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

    private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

    public Match process(final MatchInput matchInput) throws Exception {
        Match transformedMatch = new Match();

        transformedMatch.setId(Long.parseLong(matchInput.getId()));
        transformedMatch.setTeam1(matchInput.getTeam1());
        transformedMatch.setTeam2(matchInput.getTeam2());
        transformedMatch.setCity(matchInput.getCity());
        transformedMatch.setDate(LocalDate.parse(matchInput.getDate()));
        transformedMatch.setPlayerOfMatch(matchInput.getPlayer_of_match());
        transformedMatch.setUmpire1(matchInput.getUmpire1());
        transformedMatch.setUmpire2(matchInput.getUmpire2());
        transformedMatch.setResult(matchInput.getResult());
        transformedMatch.setResultMargin(matchInput.getResult_margin());
        transformedMatch.setVenue(matchInput.getVenue());
        transformedMatch.setMatchWinner(matchInput.getWinner());

        String firstInningsTeam, secondInningsTeam;

        if("bat".equals(matchInput.getToss_decision())) {
            firstInningsTeam = matchInput.getToss_winner();
            secondInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1())
                    ? matchInput.getTeam2() : matchInput.getTeam1();
        } else {
            secondInningsTeam = matchInput.getToss_winner();
            firstInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1())
                    ? matchInput.getTeam2() : matchInput.getTeam1();
        }
        log.info("Converting (" + matchInput + ") into (" + transformedMatch + ")");

        return transformedMatch;
    }

   


}
