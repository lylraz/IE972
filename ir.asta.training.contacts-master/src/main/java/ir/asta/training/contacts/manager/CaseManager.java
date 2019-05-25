package ir.asta.training.contacts.manager;

import ir.asta.training.contacts.dao.AuthDAO;
import ir.asta.training.contacts.dao.CaseDAO;
import ir.asta.training.contacts.entities.CaseEntity;
import ir.asta.training.contacts.entities.UserEntity;
import ir.asta.wise.core.datamanagement.ActionResult;
import org.springframework.transaction.annotation.Transactional;

import javax.inject.Inject;
import javax.inject.Named;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

@Named("authNamed")
public class CaseManager {
    @Inject
    private CaseDAO dao;

    @Transactional
    public ActionResult<UserEntity> CreateNewCase(String title, String request,  String requestContent, String receiverContent) {
        ActionResult<UserEntity> result = new ActionResult<>();
        if (!dao.containsUser(username)) {
            result.setData(dao.register(username, hashPassword(password), generateToken()));
            result.setSuccess(true);
        }
        else {
            result.setMessage("کاربر وجود دارد");
        }
        return result;
    }

}
