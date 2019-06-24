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
    
    public ActionResult<CaseEntity> Action(String title, String answer, String referContent, String statusContent) {
        ActionResult<CaseEntity> result = new ActionResult<>();
        result.setData(dao.action(title, answer, referContent, statusContent));
        result.setSuccess(true);
        return result;
    }
    
    @Transactional
    public ActionResult Cases(String email) {
        ActionResult result = new ActionResult<>();
        if (dao.Cases(email) == null) {
            result.setSuccess(false);
            result.setMessage("موردی یافت نشد");
        }
        else {
            result.setSuccess(true);
            result.setMessage("مورد ها یافت شد");
            result.setData(dao.Cases(email));

        }
        return result;
    }
    
    public ActionResult Report() {
        ActionResult result = new ActionResult<>();
        if (dao.report() == null) {
            result.setSuccess(false);
            result.setMessage("report fail");
        } else {
            result.setData(dao.report());
            result.setSuccess(true);
            result.setMessage("report success");
        }
        return result;
    }

}
