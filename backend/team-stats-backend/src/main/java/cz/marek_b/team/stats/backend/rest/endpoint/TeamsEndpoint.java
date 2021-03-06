package cz.marek_b.team.stats.backend.rest.endpoint;

import cz.marek_b.team.stats.backend.dao.TeamDao;
import cz.marek_b.team.stats.backend.data.Team;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/teams")
@Stateless
public class TeamsEndpoint {

    @Inject
    private TeamDao teamDao;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Team> getTeams() {
        return teamDao.findAll();
    }

}
