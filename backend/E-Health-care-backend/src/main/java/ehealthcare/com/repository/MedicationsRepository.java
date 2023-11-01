package ehealthcare.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ehealthcare.com.entity.Medications;

@Repository
public interface MedicationsRepository extends JpaRepository<Medications, Integer> {

}
