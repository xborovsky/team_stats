package cz.marek_b.team.stats.backend.dao;

import cz.marek_b.team.stats.backend.data.Player;
import java.util.List;

public interface PlayerDao extends GenericDao<Player, Long> {

    List<Player> findAll();

}
