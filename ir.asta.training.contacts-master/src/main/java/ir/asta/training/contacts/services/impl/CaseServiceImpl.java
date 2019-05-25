package ir.asta.training.contacts.services.impl;

import ir.asta.training.contacts.entities.UserEntity;
import ir.asta.training.contacts.manager.AuthManager;
import ir.asta.training.contacts.manager.CaseManager;
import ir.asta.training.contacts.services.AuthService;
import ir.asta.training.contacts.services.CaseService;
import ir.asta.wise.core.datamanagement.ActionResult;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.FormParam;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

@Named("authService")
public class CaseServiceImpl implements CaseService {
    @Inject
    private CaseManager manager;

    @Override
    public ActionResult<UserEntity> newCase(String title, String request,  String requestContent, String receiverContent) {
        return
    }
}
