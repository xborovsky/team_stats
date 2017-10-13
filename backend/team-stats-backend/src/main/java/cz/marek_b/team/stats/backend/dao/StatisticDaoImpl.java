package cz.marek_b.team.stats.backend.dao;

import cz.marek_b.team.stats.backend.bean.PlayerStatistic;
import cz.marek_b.team.stats.backend.data.Assist;
import cz.marek_b.team.stats.backend.data.Goal;
import cz.marek_b.team.stats.backend.data.Statistic;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.Query;

@Stateless
public class StatisticDaoImpl extends GenericDaoImpl<Statistic, Long> implements StatisticDao {

    @Override
    public List<Statistic> findByMatchId(long matchId) {
        return em.createNamedQuery(Statistic.QUERY_FIND_BY_MATCH_ID, Statistic.class)
            .setParameter(1, matchId)
            .getResultList();
    }

    @Override
    public PlayerStatistic getPlayerStatistic(long playerId) {
        Query goalsQuery = em.createNamedQuery(Goal.QUERY_FIND_BY_PLAYER, Goal.class)
            .setParameter(1, playerId);
        Query assistsQuery = em.createNamedQuery(Assist.QUERY_FIND_BY_PLAYER, Assist.class)
            .setParameter(1, playerId);

        return new PlayerStatistic(
            (Integer) goalsQuery.getSingleResult(),
            (Integer) assistsQuery.getSingleResult()
        );
    }

}
