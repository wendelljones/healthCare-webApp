package ehealthcare.com.controller.bean;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;

import ehealthcare.com.entity.Medications;

public class OrdersInfo {
	
	private int orderid;
	private LocalDate orderDate;
	private String orderStatus;
	private String email;
	private int shipmentCharges;
	private int totalItems;
	private float totalAmount;
	private List<Medications> medications;
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public LocalDate getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getShipmentCharges() {
		return shipmentCharges;
	}
	public void setShipmentCharges(int shipmentCharges) {
		this.shipmentCharges = shipmentCharges;
	}
	public int getTotalItems() {
		return totalItems;
	}
	public void setTotalItems(int totalItems) {
		this.totalItems = totalItems;
	}
	public float getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(float totalAmount) {
		this.totalAmount = totalAmount;
	}
	public List<Medications> getMedications() {
		return medications;
	}
	public void setMedications(List<Medications> medications) {
		this.medications = medications;
	}
	@Override
	public String toString() {
		return "OrdersInfo [orderid=" + orderid + ", orderDate=" + orderDate + ", orderStatus=" + orderStatus
				+ ", email=" + email + ", shipmentCharges=" + shipmentCharges + ", totalItems=" + totalItems
				+ ", totalAmount=" + totalAmount + ", medications=" + medications + "]";
	}
	
	
	
}
