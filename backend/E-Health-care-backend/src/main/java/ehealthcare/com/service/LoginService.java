package ehealthcare.com.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ehealthcare.com.entity.Account;
import ehealthcare.com.entity.Login;
import ehealthcare.com.repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository loginRepository;
	
	@Autowired
	AccountService accountService;
	
	public ResponseEntity<String> signIn(Login login) {
		
	    Optional<Login> result = loginRepository.findById(login.getEmailid());

	    if (result.isPresent()) {
	        Login ll = result.get();
	        if (ll.getPassword().equals(login.getPassword())) {
	            if (ll.getAccounttype().equalsIgnoreCase("admin")) {
	                return ResponseEntity.ok("Admin login success");
	            } else {
	                return ResponseEntity.ok("Patient login successful");
	            }
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");

	        }
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email");
	    }
		
	}
	
	public String signUp(Login login) {
		if(login.getAccounttype().equalsIgnoreCase("admin")) {
			return "Admin account creation is not available";
		}else {
			Optional<Login> result = loginRepository.findById(login.getEmailid());
			if(result.isPresent()) {
				return "This account already exists";
			}else {
				
				Account account = new Account();
				account.setEmailid(login.getEmailid());
				account.setAmount(2000);
				
				loginRepository.save(login);
				accountService.createAccount(account);
				return "Account created successfully";
			}
		}
	}
	
}
