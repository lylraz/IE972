package ir.asta.training.contacts.dao;

import ir.asta.training.contacts.entities.UserEntity;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Named("authDAO")
public class CaseDAO {
    @PersistenceContext
    private EntityManager entityManager;
    public UserEntity createNewCase(String username, String password, String token){
        UserEntity entity = new UserEntity();
        entity.setUsername(username);
        entity.setPassword(password);
        entity.setToken(token);
        entityManager.persist(entity);
        return entity;
    }

}
