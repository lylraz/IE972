package ir.asta.training.contacts.services;

import ir.asta.training.contacts.entities.UserEntity;
import ir.asta.wise.core.datamanagement.ActionResult;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/case")
public interface CaseService {
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/newCase")
    public ActionResult<UserEntity> newCase(@FormParam("title") String title,
                                            @FormParam("request") String request,
                                            @FormParam("requestContent") String requestContent,
                                            @FormParam("receiverContent") String receiverContent
    );
}


