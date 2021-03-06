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
import java.util.List;

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
    
    public ActionResult<UserEntity> profileEdit(String email, String name, String familyName, String profileName, String newEmail) {
        UserEntity entity = dao.profileEdit(email, name, familyName, profileName, newEmail);
        ActionResult<UserEntity> result = new ActionResult<>();
        if (entity != null){
            result.setData(entity);
            result.setSuccess(true);
            result.setMessage("profile edit success");
        }
        else {
            result.setMessage("ایمیل یا پسورد اشتباه است");
        }
        return result;
    }

    public ActionResult<UserEntity> passwordChange(String email, String password, String newPass, String reNewPass) {
        ActionResult<UserEntity> result = new ActionResult<>();
        if (!newPass.equals(reNewPass)) {
            result.setSuccess(false);
            result.setMessage("رمز جدید و تکرار آن همخوانی ندارند");
        } else {
            UserEntity entity = dao.passwordChange(email, password, newPass);
            result.setData(entity);
            result.setSuccess(true);
            result.setMessage("pass success");
        }
        return result;
    }
    
    public ActionResult userConfirmation() {
        List<UserEntity> entity = dao.userConfirmation();
        ActionResult result = new ActionResult<>();
        result.setData(entity);
        if (entity != null){
            result.setSuccess(true);
            result.setMessage("userConfirmation success");
        }
        else {
            result.setSuccess(false);
            result.setMessage("userConfirmation fail");
        }
        return result;
    }
}
