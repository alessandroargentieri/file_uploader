package com.alessandro.argentieri.FileUploader.utilities;

import com.alessandro.argentieri.FileUploader.entities.ResponseObject;
import mockit.MockUp;
import org.junit.Test;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;

public class FileUtilsTest {

    @Test
    public void noFileSelected(){
        MultipartFile[] uploadFiles = new MultipartFile[0];
        assertEquals(ResponseObject.NO_FILE_SELECTED_CODE, FileUtils.uploadFileOnServer(uploadFiles));
    }

    @Test
    public void fileUploaded(){
        MultipartFile[] uploadFiles = {new MockMultipartFile("data", "filename.txt", "text/plain", "some xml".getBytes())};
        new MockUp<FileUtils>(){
            @mockit.Mock
            public int saveUploadedFiles(List<MultipartFile> files) throws IOException{
                return ResponseObject.FILE_UPLOADED_CODE;
            }
        };
        assertEquals(ResponseObject.FILE_UPLOADED_CODE, FileUtils.uploadFileOnServer(uploadFiles));
    }

    @Test
    public void errorInUploading(){
        MultipartFile[] uploadFiles = {new MockMultipartFile("data", "filename.txt", "text/plain", "some xml".getBytes())};
        new MockUp<FileUtils>(){
            @mockit.Mock
            public int saveUploadedFiles(List<MultipartFile> files) throws IOException{
                throw new IOException();
            }
        };
        assertEquals(ResponseObject.FILE_NOT_UPLOADED_CODE, FileUtils.uploadFileOnServer(uploadFiles));
    }

    @Test
    public void openFile() throws IOException{
        byte[] result = new byte[40];
        Path p = mock(Path.class);
        new MockUp<Paths>(){
            @mockit.Mock
            public Path get(String filename){
                return p;
            }
        };
        new MockUp<Files>(){
            @mockit.Mock
            public byte[] readAllBytes(Path path){
                return result;
            }
        };
        assertEquals(FileUtils.getFile("./files/myfile.txt"), result);
    }

}