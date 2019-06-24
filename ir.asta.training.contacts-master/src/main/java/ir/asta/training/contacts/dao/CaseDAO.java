package ir.asta.training.contacts.dao;

import ir.asta.training.contacts.entities.CaseEntity;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Named("caseDAO")
public class CaseDAO {
    @PersistenceContext
    private EntityManager entityManager;
    
    public CaseEntity createNewCase(String title, String request,  String requestContent, String receiverContent){
        CaseEntity entity = new CaseEntity();
        entity.setTitle(title);
        entity.setRequest(request);
        entity.setRequestContent(requestContent);
        entity.setReceiverContent(receiverContent);
        entityManager.persist(entity);
        return entity;
    }
    
    public CaseEntity action(String title, String answer, String referContent, String statusContent){
        Query query = entityManager.createQuery("select c from CaseEntity c where c.title=:title");
        query.setParameter("title", title);
        CaseEntity entity = (CaseEntity)query.getSingleResult();
        entity.setAnswer(answer);
        entity.setReferContent(referContent);
        entity.setStatusContent(statusContent);
        entityManager.merge(entity);
        return entity;
    }
    
    public List<CaseEntity> Cases(String email) {
        Query query = entityManager.createQuery("select e from CaseEntity e where e.email=:email");
        query.setParameter("email", email);
        List<CaseEntity> list = query.getResultList();
        return list;
    }

}
