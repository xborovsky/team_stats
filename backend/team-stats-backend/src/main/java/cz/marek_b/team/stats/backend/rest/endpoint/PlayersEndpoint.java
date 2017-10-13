package cz.marek_b.team.stats.backend.rest.endpoint;

import cz.marek_b.team.stats.backend.bean.PlayerFormBean;
import cz.marek_b.team.stats.backend.dao.PlayerDao;
import cz.marek_b.team.stats.backend.data.Player;
import cz.marek_b.team.stats.backend.manager.PlayerManager;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/players")
@Stateless
public class PlayersEndpoint {

    @Inject
    private PlayerDao playerDao;
    @Inject
    private PlayerManager playerManager;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Player> getPlayers() {
        return playerDao.findAll();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Player getPlayer(@PathParam("id") long id) {
        return playerDao.findById(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public Response addPlayer(@BeanParam PlayerFormBean playerFormBean) {
        playerManager.addPlayer(playerFormBean);

        return Response.ok().build();
    }

}
