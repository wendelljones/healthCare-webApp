package ehealthcare.com.service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import ehealthcare.com.entity.Medications;
import ehealthcare.com.repository.MedicationsRepository;

@Service
public class MedicationsService {
	
	@Autowired
	MedicationsRepository medicationsRepository;
	
	
	public String storeMed(Medications medications) {
		medicationsRepository.save(medications);
		return "Medication stored successfully";
	}
	
	public List<Medications> findAllMeds() {
		return medicationsRepository.findAll();
	}
    
    public String deleteMedById(int mid) {
    	Optional<Medications> result = medicationsRepository.findById(mid);
    	if(result.isPresent()) {
    		medicationsRepository.deleteById(mid);
    		return "Medication deleted successfully";
    	}else {
    		return "Medication not deleted";
    	}
    }
    
    public String updateMed(Medications medications) {
    	Optional<Medications> result = medicationsRepository.findById(medications.getMid());
    	if(result.isPresent()) {
    		Medications m = result.get();
    		m.setName(medications.getName());
    		m.setPrice(medications.getPrice());
    		m.setDescription(medications.getDescription());
    		m.setCategory(medications.getCategory());
    		m.setImage(medications.getImage());
    		m.setQty(medications.getQty());
    		medicationsRepository.saveAndFlush(m);
    		return "Medication updated successfully";
    	}else {
    		return "Medication not available";
    	}
    }

}






