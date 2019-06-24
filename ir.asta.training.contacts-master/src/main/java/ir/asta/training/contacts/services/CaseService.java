package ir.asta.training.contacts.services;

import ir.asta.training.contacts.entities.CaseEntity;
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
    @Path("/createNewCase")
    public ActionResult<CaseEntity> CreateNewCase(@FormParam("title") String title,
                                                  @FormParam("request") String request,
                                                  @FormParam("requestContent") String requestContent,
                                                  @FormParam("receiverContent") String receiverContent
    );
    
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/action")
    public ActionResult<CaseEntity> Action(String title,
                                           @FormParam("answer") String answer,
                                           @FormParam("referContent") String referContent,
                                           @FormParam("statusContent") String statusContent
    );
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/Cases")
    public ActionResult Cases(String email);
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/report")
    public ActionResult Report();
}
