package cz.marek_b.team.stats.backend.dao;

import cz.marek_b.team.stats.backend.data.Player;
import java.util.List;
import javax.ejb.Stateless;

@Stateless
public class PlayerDaoImpl extends GenericDaoImpl<Player, Long> implements PlayerDao {

    @Override
    public List<Player> findAll() {
        return em.createNamedQuery(Player.QUERY_FIND_ALL, Player.class)
            .getResultList();
    }

}
