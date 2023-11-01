package ehealthcare.com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ehealthcare.com.entity.Medications;
import ehealthcare.com.service.MedicationsService;

@RestController
@RequestMapping("medications")
@CrossOrigin
public class MedicationsController {
	
	@Autowired
	MedicationsService medicationsService;
	
	@PostMapping(value = "store", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeMed(@RequestBody Medications medications) {
		return medicationsService.storeMed(medications);
	}
	
	@GetMapping(value = "findAll", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Medications> findAll() {
		return medicationsService.findAllMeds();
	}
	
	@DeleteMapping(value = "delete")
	public String deleteMed(@RequestParam("mid") int mid) {
		return medicationsService.deleteMedById(mid);
	}
	
	@PutMapping(value = "update", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateMed(@RequestBody Medications medications) {
		return medicationsService.updateMed(medications);
	}
	
}
