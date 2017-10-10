package cz.marek_b.team.stats.backend.dao;

import cz.marek_b.team.stats.backend.data.Statistic;
import java.util.List;
import javax.ejb.Stateless;

@Stateless
public class StatisticDaoImpl extends GenericDaoImpl<Statistic, Long> implements StatisticDao {

    @Override
    public List<Statistic> findByMatchId(long matchId) {
        return em.createNamedQuery(Statistic.QUERY_FIND_BY_MATCH_ID, Statistic.class)
            .setParameter(1, matchId)
            .getResultList();
    }

}
