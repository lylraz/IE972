package ir.asta.training.contacts.dao;

import ir.asta.training.contacts.entities.UserEntity;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Named("authDAO")
public class AuthDAO {
    @PersistenceContext
    private EntityManager entityManager;
    public UserEntity register(String fName, String lName, String email, String password, String token){
        UserEntity entity = new UserEntity();
        entity.setfName(fName);
        entity.setlName(lName);
        entity.setEmail(email);
        entity.setPassword(password);
        entity.setToken(token);
        entityManager.persist(entity);
        return entity;
    }

    public boolean containsUser(String email){
        Query query = entityManager.createQuery("select e from UserEntity e where e.email=:email");
        query.setParameter("email", email);
        List list = query.getResultList();
        return list.size() > 0;
    }

    public UserEntity checkUsernameAndPassword(String email, String password){
        Query query = entityManager.createQuery("select e from UserEntity e where e.email=:email and e.password=:password");
        query.setParameter("email", email).setParameter("password", password);
        List<UserEntity> list = query.getResultList();
        if (list.size() > 0){
            return list.get(0);
        }
        return null;
    }
    
    public UserEntity profileEdit(String name, String familyName, String profileName, String email) {
        Query query = entityManager.createQuery("select e from UserEntity e where e.email=:email");
        query.setParameter("email", email);
        UserEntity entity = (UserEntity)query.getSingleResult();
        entity.setfName(name);
        entity.setlName(familyName);
        entity.setEmail(email);
        entity.setProfileName(profileName);
        entityManager.merge(entity);
        return entity;
    }

    public UserEntity passwordChange(String email, String password, String newPass) {
        Query query = entityManager.createQuery("select e from UserEntity e where e.email=:email");
        query.setParameter("email", email);
        UserEntity entity = (UserEntity)query.getSingleResult();
        if (password.equals(entity.getPassword())) {
            entity.setPassword(newPass);
            entityManager.merge(entity);
        }
        return entity;
    }
    
    public List<UserEntity> userConfirmation() {
        Query query = entityManager.createQuery("select e from UserEntity e where e.confirmation=:notConfirmed");
        query.setParameter("notConfirmed", "notConfirmed");
        List<UserEntity> list = query.getResultList();
        return list;
    }

}
