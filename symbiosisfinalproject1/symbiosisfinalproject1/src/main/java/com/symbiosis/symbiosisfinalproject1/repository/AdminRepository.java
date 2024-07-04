package com.symbiosis.symbiosisfinalproject1.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.symbiosis.symbiosisfinalproject1.model.Admin;
@Repository
@Qualifier("admRepo")
public interface AdminRepository extends JpaRepository<Admin, String> {
	@Query(nativeQuery= true,value="select * from admin where adminemail=:emailid and password=:password")
	Admin findByEmailIdAndPassword(@Param("emailid") String emailid,@Param("password") String password);

}
