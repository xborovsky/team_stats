package cz.marek_b.team.stats.backend.rest.endpoint;

import cz.marek_b.team.stats.backend.bean.PlayerStatistic;
import cz.marek_b.team.stats.backend.dao.StatisticDao;
import cz.marek_b.team.stats.backend.data.Statistic;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Stateless
@Path("/stats")
public class StatisticsEndpoint {

    @Inject
    private StatisticDao statDao;

    @GET
    @Path("/match/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Statistic> getMatchStatistics(@PathParam("id") long id) {
        return statDao.findByMatchId(id);
    }

    @GET
    @Path("/{playerId}")
    @Produces(MediaType.APPLICATION_JSON)
    public PlayerStatistic getPlayerStatistic(@PathParam("playerId") long playerId) {
        System.out.println("playerId: " + playerId);
        System.out.println("XX");
        System.out.println(statDao.getPlayerStatistic(playerId));
        return statDao.getPlayerStatistic(playerId);
    }

}
