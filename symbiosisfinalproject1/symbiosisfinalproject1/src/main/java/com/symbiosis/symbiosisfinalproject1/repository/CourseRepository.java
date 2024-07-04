package com.symbiosis.symbiosisfinalproject1.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.symbiosis.symbiosisfinalproject1.model.Course;
@Repository
@Qualifier("couRepo")
public interface CourseRepository extends JpaRepository<Course, Long>{

}
