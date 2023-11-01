package ehealthcare.com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Medications {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mid;
	private String name;
	private float price;
	private String description;
	private String category;
	private String image;
	private int qty;
	public int getMid() {
		return mid;
	}
	public void setMid(int mid) {
		this.mid = mid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	@Override
	public String toString() {
		return "Medications [mid=" + mid + ", name=" + name + ", price=" + price + ", description=" + description
				+ ", category=" + category + ", image=" + image + ", qty=" + qty + "]";
	}
	
	
	
}