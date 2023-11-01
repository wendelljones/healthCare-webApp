package ehealthcare.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ehealthcare.com.service.AccountService;

@RestController
@RequestMapping("ehealthcare/patient/account")
@CrossOrigin
public class AccountController {
	
	@Autowired
	AccountService accountService;
	
	@GetMapping(value = "findBalance")
	public float findBalance(@RequestParam("email") String emailid) {
		return accountService.findBalance(emailid);
	}

}
