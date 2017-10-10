package cz.marek_b.team.stats.backend.manager;

import cz.marek_b.team.stats.backend.bean.PlayerFormBean;
import cz.marek_b.team.stats.backend.dao.PlayerDao;
import cz.marek_b.team.stats.backend.data.Player;
import java.util.Set;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;

@Stateless
public class PlayerManagerImpl implements PlayerManager {

    @Inject
    private PlayerDao playerDao;

    @Override
    public void addPlayer(PlayerFormBean playerFormBean) {;
        Set<ConstraintViolation<PlayerFormBean>> violations = getValidator().validate(playerFormBean);

        if (!violations.isEmpty()) {
            throw new WebApplicationException("Invalid player data", Response.Status.NOT_ACCEPTABLE);
        }

        playerDao.create(new Player(playerFormBean));
    }

    private Validator getValidator() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        return factory.getValidator();
    }

}
