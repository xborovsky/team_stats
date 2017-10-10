package cz.marek_b.team.stats.backend.dao;

import cz.marek_b.team.stats.backend.data.Team;
import java.util.List;
import javax.ejb.Stateless;

@Stateless
public class TeamDaoImpl extends GenericDaoImpl<Team, Long> implements TeamDao {

    @Override
    public List<Team> findAll() {
        return em.createNamedQuery(Team.QUERY_FIND_ALL, Team.class)
            .getResultList();
    }

}
