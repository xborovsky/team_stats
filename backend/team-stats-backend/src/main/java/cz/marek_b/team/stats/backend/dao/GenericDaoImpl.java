package cz.marek_b.team.stats.backend.dao;

import java.lang.reflect.ParameterizedType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class GenericDaoImpl<T, ID> implements GenericDao<T, ID> {

    @PersistenceContext(name = "team_stats_pu")
    EntityManager em;

    private final Class<T> clazz;

    public GenericDaoImpl() {
        this.clazz = (Class<T>) ((ParameterizedType) getClass()
            .getGenericSuperclass()).getActualTypeArguments()[0];
    }

    @Override
    public T create(T type) {
        em.persist(type);
        em.flush();
        return type;
    }

    @Override
    public T findById(ID id) {
        return em.find(this.clazz, id);
    }

    @Override
    public T update(T type) {
        em.merge(type);
        em.flush();
        return type;
    }

    @Override
    public void delete(T type) {
        em.remove(type);
        em.flush();
    }

}
