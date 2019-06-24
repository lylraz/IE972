package ir.asta.training.contacts.services.impl;

import ir.asta.training.contacts.entities.CaseEntity;
import ir.asta.training.contacts.manager.CaseManager;
import ir.asta.training.contacts.services.CaseService;
import ir.asta.wise.core.datamanagement.ActionResult;
import javax.inject.Inject;
import javax.inject.Named;

@Named("caseService")
public class CaseServiceImpl implements CaseService {
    @Inject
    private CaseManager manager;

    @Override
    public ActionResult<CaseEntity> CreateNewCase(String title, String sender, String request, String requestContent, String receiverContent) {
        return manager.CreateNewCase(title,sender, request, requestContent, receiverContent);
    }
    
    @Override
    public ActionResult<CaseEntity> Action(String title, String answer, String referContent, String statusContent) {
        return manager.Action(title,answer,referContent,statusContent);
    }
    
    @Override
    public ActionResult Cases(String email) {
        return manager.Cases(email);
    }
    
    @Override
    public ActionResult Report() {
        return manager.Report();
    }
}
