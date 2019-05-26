package ir.asta.training.contacts.dao;

import ir.asta.training.contacts.entities.CaseEntity;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

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

}
