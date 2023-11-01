package ehealthcare.com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ehealthcare.com.entity.MedicationsOrdersInfo;

@Repository
public interface MedicationsOrdersInfoRepository extends JpaRepository<MedicationsOrdersInfo, Integer> {

	void save(List<MedicationsOrdersInfo> medicationsOrdersInfo);

}
