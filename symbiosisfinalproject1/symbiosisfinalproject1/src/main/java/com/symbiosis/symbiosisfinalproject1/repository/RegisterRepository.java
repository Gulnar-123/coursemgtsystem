package com.symbiosis.symbiosisfinalproject1.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.symbiosis.symbiosisfinalproject1.model.Register;

@Repository
@Qualifier("registerRepo")
public interface RegisterRepository extends JpaRepository<Register, Long> {
	@Query(nativeQuery= true,value="select * from register where emailid=:emailid and password=:password")
	Register findByEmailIdAndPassword(@Param("emailid") String emailid,@Param("password") String password);

}
