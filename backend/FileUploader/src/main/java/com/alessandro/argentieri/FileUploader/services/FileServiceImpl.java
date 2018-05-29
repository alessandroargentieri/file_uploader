package com.alessandro.argentieri.FileUploader.services;

import com.alessandro.argentieri.FileUploader.FileUploaderApplication;
import com.alessandro.argentieri.FileUploader.daos.FileDao;
import com.alessandro.argentieri.FileUploader.entities.File;
import com.alessandro.argentieri.FileUploader.entities.ResponseObject;
import com.alessandro.argentieri.FileUploader.utilities.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class FileServiceImpl implements FileService {

    @Autowired
    FileDao fileDao;

    @Override
    public int uploadFile(File file, MultipartFile[] uploadfiles){
        int response = ResponseObject.FILE_NOT_UPLOADED_CODE;
        try{
            file.setPath(FileUploaderApplication.UPLOADED_FOLDER + "/" + uploadfiles[0].getOriginalFilename());
            fileDao.save(file);
            response = FileUtils.uploadFileOnServer(uploadfiles);
        }catch(Exception e){
            fileDao.delete(file);
        }
        return response;
    }

    @Override
    public List<File> getAllFiles(){
        return fileDao.findAll();
    }

    @Override
    public void delete(Long id){
        java.io.File file = new java.io.File(fileDao.findById(id).get().getPath());
        file.delete();
        fileDao.deleteById(id);
    }

    public byte[] openFile(String filename) throws IOException {
        return FileUtils.getFile(filename);
    }

}
