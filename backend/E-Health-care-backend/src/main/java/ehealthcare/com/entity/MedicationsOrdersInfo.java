package ehealthcare.com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "medicationsordersinfo")
public class MedicationsOrdersInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int moid;
	private int oid;
	private int mid;
	private int qty;
	public int getMoid() {
		return moid;
	}
	public void setMoid(int moid) {
		this.moid = moid;
	}
	public int getOid() {
		return oid;
	}
	public void setOid(int oid) {
		this.oid = oid;
	}
	public int getMid() {
		return mid;
	}
	public void setMid(int mid) {
		this.mid = mid;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	@Override
	public String toString() {
		return "MedicationsOrdersInfo [moid=" + moid + ", oid=" + oid + ", mid=" + mid + ", qty=" + qty + "]";
	}
	
	
	
}
