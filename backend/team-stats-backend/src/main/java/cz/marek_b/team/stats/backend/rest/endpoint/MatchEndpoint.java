package cz.marek_b.team.stats.backend.rest.endpoint;

import cz.marek_b.team.stats.backend.dao.MatchDao;
import cz.marek_b.team.stats.backend.data.Match;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/matches")
@Stateless
public class MatchEndpoint {

    @Inject
    private MatchDao matchDao;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Match> getAllMatches() {
        return matchDao.findAll();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    public Response getMatch(@PathParam("id") long id) {
        Match match = matchDao.findById(id);
        if (match == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(match).build();
    }

}
