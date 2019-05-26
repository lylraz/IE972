package ir.asta.training.contacts.manager;

import ir.asta.training.contacts.dao.AuthDAO;
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
public class AuthManager {
    @Inject
    private AuthDAO dao;

    @Transactional
    public ActionResult<UserEntity> register(String fName, String lName, String email, String password, String rePassword) throws UnsupportedEncodingException, NoSuchAlgorithmException {
        ActionResult<UserEntity> result = new ActionResult<>();
        if (!dao.containsUser(email)) {
            result.setData(dao.register(fName, lName, email, hashPassword(password), generateToken()));
            result.setSuccess(true);
        }
        else {
            result.setMessage("کاربر وجود دارد");
        }
        return result;
    }

    public ActionResult<UserEntity> login(String email, String password) throws UnsupportedEncodingException, NoSuchAlgorithmException {
        UserEntity entity = dao.checkUsernameAndPassword(email, hashPassword(password));
        ActionResult<UserEntity> result = new ActionResult<>();
        result.setData(entity);
        if (entity != null){
            result.setSuccess(true);
            result.setMessage("کاربر وارد شد.");
        }
        else {
            result.setMessage("ایمیل یا پسورد اشتباه است");
        }
        return result;
    }

    private String hashPassword(String password) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] bytes = digest.digest(password.getBytes(StandardCharsets.UTF_8));
        return new String(bytes, "UTF-8");
    }

    private String generateToken(){
        String token = "";
        Random random = new Random();
        for (int i = 0; i < 30; i++) {
            int anInt = random.nextInt(26);
            char ch = (char) ('a' + anInt);
            token += ch;
        }
        return token;
    }
}
