package ir.asta.training.contacts.services;

import ir.asta.training.contacts.entities.UserEntity;
import ir.asta.wise.core.datamanagement.ActionResult;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.awt.*;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

@Path("/auth")
public interface AuthService {
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/register")
    public ActionResult<UserEntity> register(@FormParam("fName") String fName,
                                             @FormParam("lName") String lName,
                                             @FormParam("email") String email,
                                             @FormParam("password") String password,
                                 @FormParam("rePassword") String rePassword) throws UnsupportedEncodingException, NoSuchAlgorithmException;

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/login")
    public ActionResult<UserEntity> login(@FormParam("email") String email,
                                             @FormParam("password") String password) throws UnsupportedEncodingException, NoSuchAlgorithmException;
    
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/profileEdit")
    public ActionResult<UserEntity> profileEdit(@FormParam("name") String name,
                                                @FormParam("familyName") String familyName,
                                                @FormParam("profileName") String profileName,
                                                @FormParam("email") String email);

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/profileEdit")
    public ActionResult<UserEntity> passwordChange(String email,
                                                  @FormParam("password") String password,
                                                  @FormParam("newPass") String newPass,
                                                  @FormParam("reNewPass") String reNewPass);
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/userConfirmation")
    public ActionResult userConfirmation();
}
