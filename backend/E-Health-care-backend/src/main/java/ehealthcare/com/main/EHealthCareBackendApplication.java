package ehealthcare.com.main;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import ehealthcare.com.entity.Login;
import ehealthcare.com.repository.LoginRepository;

@SpringBootApplication(scanBasePackages = "ehealthcare.com")
@EntityScan(basePackages = "ehealthcare.com.entity")
@EnableJpaRepositories(basePackages = "ehealthcare.com.repository")
public class EHealthCareBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EHealthCareBackendApplication.class, args);
		System.err.println("Spring Boot Up");
	}
	
	@Autowired
	LoginRepository loginRepository;
	
	@PostConstruct
	public void init() {
		Login ll = new Login();
		ll.setEmailid("wendell@gmail.com");
		ll.setPassword("wendell@123");
		ll.setAccounttype("admin");
		loginRepository.save(ll);
		System.out.println("called...");
	}

}
