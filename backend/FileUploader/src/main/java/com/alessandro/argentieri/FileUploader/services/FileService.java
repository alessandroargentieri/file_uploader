package com.alessandro.argentieri.FileUploader.services;

import com.alessandro.argentieri.FileUploader.entities.File;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface FileService {

    int uploadFile(File file, MultipartFile[] uploadfiles);
    List<File> getAllFiles();
    void delete(Long id);
    byte[] openFile(String filename) throws IOException;

}
