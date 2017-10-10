package cz.marek_b.team.stats.backend.dao;

import cz.marek_b.team.stats.backend.data.Statistic;
import java.util.List;

public interface StatisticDao extends GenericDao<Statistic, Long> {

    List<Statistic> findByMatchId(long matchId);

}
