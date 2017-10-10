package cz.marek_b.team.stats.backend.dao;

import cz.marek_b.team.stats.backend.data.Match;
import java.util.List;

public interface MatchDao extends GenericDao<Match, Long> {

    List<Match> findAll();

}
