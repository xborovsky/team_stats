package cz.marek_b.team.stats.backend.dao;

import cz.marek_b.team.stats.backend.data.Team;
import java.util.List;

public interface TeamDao extends GenericDao<Team, Long> {

    List<Team> findAll();

}
