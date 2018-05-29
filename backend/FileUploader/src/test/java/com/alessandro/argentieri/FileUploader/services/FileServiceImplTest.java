package com.alessandro.argentieri.FileUploader.services;

import com.alessandro.argentieri.FileUploader.daos.FileDao;
import com.alessandro.argentieri.FileUploader.entities.File;
import com.alessandro.argentieri.FileUploader.entities.ResponseObject;
import com.alessandro.argentieri.FileUploader.utilities.FileUtils;
import mockit.MockUp;
import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentMatchers;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class FileServiceImplTest {

    private FileService fileService;
    private FileDao fileDao;
    File f;
    MultipartFile[] multipartFiles = {new MockMultipartFile("data", "myfile.txt", "text/plain", "some xml".getBytes())};

    @Before
    public void setUp(){
        fileService = new FileServiceImpl();
        fileDao = mock(FileDao.class);
        ReflectionTestUtils.setField(fileService, "fileDao", fileDao);
        f = new File();
    }

    @Test
    public void uploadFileCorrectly(){
    when(fileDao.save(ArgumentMatchers.any(File.class))).thenReturn(f);
        new MockUp<FileUtils>(){
            @mockit.Mock
            public int uploadFileOnServer(MultipartFile[] uploadfiles){
                return ResponseObject.FILE_UPLOADED_CODE;
            }
        };
        assertEquals(fileService.uploadFile(f, multipartFiles), ResponseObject.FILE_UPLOADED_CODE);
    }

    @Test
    public void uploadFileWithDaoErrors(){
        Exception e = new RuntimeException();
        when(fileDao.save(ArgumentMatchers.any(File.class))).thenThrow(e);
        new MockUp<FileUtils>(){
            @mockit.Mock
            public int uploadFileOnServer(MultipartFile[] uploadfiles){
                return ResponseObject.FILE_UPLOADED_CODE;
            }
        };
        assertEquals(fileService.uploadFile(f, multipartFiles), ResponseObject.FILE_NOT_UPLOADED_CODE);
    }

    @Test
    public void uploadFileWithErrorsInFileUtils(){
        when(fileDao.save(ArgumentMatchers.any(File.class))).thenReturn(f);
        new MockUp<FileUtils>(){
            @mockit.Mock
            public int uploadFileOnServer(MultipartFile[] uploadfiles){
                throw new RuntimeException();
            }
        };
        assertEquals(fileService.uploadFile(f, multipartFiles), ResponseObject.FILE_NOT_UPLOADED_CODE);
    }

    @Test
    public void getAllFiles(){
        List<File> fileList = new ArrayList<>();
        fileList.add(f);
        when(fileDao.findAll()).thenReturn(fileList);
        assertEquals(fileList, fileService.getAllFiles());
    }

    @Test
    public void openFile() throws IOException{
       byte[] result = new byte[40];
        new MockUp<FileUtils>(){
            @mockit.Mock
            public byte[] getFile(String filename){
                return result;
            }
        };
        assertEquals(fileService.openFile("./files/myfile.txt"), result);
    }

}