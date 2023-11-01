package ehealthcare.com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ehealthcare.com.entity.Account;
import ehealthcare.com.entity.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer> {
	
@Query("select o from Orders o where o.email = :emailid")
	public List<Orders> viewByOrders(@Param("emailid") String emailid);

@Query(value = "select o.*, m.* from Orders o, medications m, medicationsOrdersInfo moi where m.mid = moi.mid and o.orderid = moi.oid:", nativeQuery = true)
public List<Object[]> getAllOrdersInfo();




}
