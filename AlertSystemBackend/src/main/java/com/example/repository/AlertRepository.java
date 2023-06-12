package com.example.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.entity.Alert;
import com.example.entity.User;
@Repository
public interface AlertRepository extends JpaRepository<Alert, Integer>{

//	Alert findByAlertTime(LocalTime now);

	public void deleteByid(int alertid);

//	@Query("select u from Alert u where u.user=:userid")
	public List<Alert> findByUser(User userid);

//	@Modifying
//    @Transactional
//    void deleteByCartItemId(Long cartItemId);
//  @Query(value="select u from CART_ITEM u where u.cart_id = ?1",nativeQuery =  = Cart.class)
//	List<product> findByproductCategory(ProductCategory productId);

}
