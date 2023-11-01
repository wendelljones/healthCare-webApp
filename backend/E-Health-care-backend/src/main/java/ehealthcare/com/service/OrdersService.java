package ehealthcare.com.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ehealthcare.com.controller.bean.OrdersInfo;
import ehealthcare.com.entity.MedicationsOrdersInfo;
import ehealthcare.com.entity.Orders;
import ehealthcare.com.repository.OrdersRepository;

@Service
public class OrdersService {
	
	@Autowired
	OrdersRepository ordersRepository;
	
	@Autowired
	AccountService accountService;
	
	public String placeOrder(Orders orders) {
		ordersRepository.save(orders);
		accountService.debitAmount(orders.getEmail(), orders.getTotalAmount());
		return "Order placed successfully";
	}
	
	public List<Orders> viewOrdersByUser(String emailid) {
		return ordersRepository.viewByOrders(emailid);
	}
	
	public List<Orders> viewAllOrders() {
		return ordersRepository.findAll();
	}

}
