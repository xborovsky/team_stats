package cz.marek_b.team.stats.backend.dao;

public interface GenericDao<T, ID> {

    T create(T t);

    T findById(ID id);

    T update(T t);

    void delete(T t);

}
