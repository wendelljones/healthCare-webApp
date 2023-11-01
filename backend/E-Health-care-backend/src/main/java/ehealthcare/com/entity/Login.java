package ehealthcare.com.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Login {
	
	@Id
	private String emailid;
	private String firstname;
	private String lastname;
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	private String password;
	private String accounttype;
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAccounttype() {
		return accounttype;
	}
	public void setAccounttype(String accounttype) {
		this.accounttype = accounttype;
	}
	@Override
	public String toString() {
		return "Login [emailid=" + emailid + ", firstname=" + firstname + ", lastname=" + lastname + ", password="
				+ password + ", accounttype=" + accounttype + "]";
	}

	
	
	
}
