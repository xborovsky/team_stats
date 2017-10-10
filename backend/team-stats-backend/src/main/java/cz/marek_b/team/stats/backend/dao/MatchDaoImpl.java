package cz.marek_b.team.stats.backend.dao;

import cz.marek_b.team.stats.backend.data.Match;
import java.util.List;
import javax.ejb.Stateless;

@Stateless
public class MatchDaoImpl extends GenericDaoImpl<Match, Long> implements MatchDao {

    @Override
    public List<Match> findAll() {
        return em.createNamedQuery(Match.QUERY_FIND_ALL, Match.class)
            .getResultList();
    }

}
