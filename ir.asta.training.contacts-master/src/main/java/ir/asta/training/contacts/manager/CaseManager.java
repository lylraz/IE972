package ir.asta.training.contacts.manager;

import ir.asta.training.contacts.dao.CaseDAO;
import ir.asta.training.contacts.entities.CaseEntity;
import ir.asta.wise.core.datamanagement.ActionResult;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import javax.inject.Named;

@Named("caseNamed")
public class CaseManager {
    @Inject
    private CaseDAO dao;

    @Transactional
    public ActionResult<CaseEntity> CreateNewCase(String title, String request,  String requestContent, String receiverContent) {
        ActionResult<CaseEntity> result = new ActionResult<>();
        result.setData(dao.createNewCase(title, request, requestContent, receiverContent));
        result.setSuccess(true);
        return result;
    }

}
