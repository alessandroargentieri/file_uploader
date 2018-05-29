package com.alessandro.argentieri.FileUploader.daos;

import com.alessandro.argentieri.FileUploader.entities.File;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileDao extends JpaRepository<File, Long> {
}
