package com.alessandro.argentieri.FileUploader;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FileUploaderApplication {

	public static String UPLOADED_FOLDER;

	@Value("${fileuploader.filepath}")
	public void setFolder(String folderValue) {
		UPLOADED_FOLDER = folderValue;
	}

	public static void main(String[] args) {
		SpringApplication.run(FileUploaderApplication.class, args);
	}

}
