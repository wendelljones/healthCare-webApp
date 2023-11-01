package ehealthcare.com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ehealthcare.com.entity.MedicationsOrdersInfo;
import ehealthcare.com.repository.MedicationsOrdersInfoRepository;

@Service
public class MedicationsOrdersInfoService {
	
	@Autowired
	MedicationsOrdersInfoRepository medicationsOrdersInfoRepository;
	
	public String storeMedicationsOrdersInfo(MedicationsOrdersInfo medicationsOrdersInfo) {
		medicationsOrdersInfoRepository.save(medicationsOrdersInfo);
		return "stored product order info";
	}

}
