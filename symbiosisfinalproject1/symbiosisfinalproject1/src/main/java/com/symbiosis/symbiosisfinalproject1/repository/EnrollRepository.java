package com.symbiosis.symbiosisfinalproject1.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.symbiosis.symbiosisfinalproject1.model.Enroll;

@Repository
@Qualifier("enRepo")
public interface EnrollRepository extends JpaRepository<Enroll, Long>{

}
