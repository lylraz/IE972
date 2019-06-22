package ir.asta.training.contacts.entities;

import javax.persistence.*;

@Entity
@Table(name = "cases")
public class CaseEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "request")
    private String request;

    @Column(name = "requestContent")
    private String requestContent;

    @Column(name = "receiverContent")
    private String receiverContent;

    @Column(name = "answer")
    private String answer;

    @Column(name = "referContent")
    private String referContent;

    @Column(name = "statusContent")
    private String statusContent;
    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }

    public String getRequestContent() {
        return requestContent;
    }

    public void setRequestContent(String requestContent) {
        this.requestContent = requestContent;
    }

    public String getReceiverContent() {
        return receiverContent;
    }

    public void setReceiverContent(String receiverContent) {
        this.receiverContent = receiverContent;
    }
    
    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getReferContent() {
        return referContent;
    }

    public void setReferContent(String referContent) {
        this.referContent = referContent;
    }

    public String getStatusContent() {
        return statusContent;
    }

    public void setStatusContent(String statusContent) {
        this.statusContent = statusContent;
    }
}
