package com.alessandro.argentieri.FileUploader.controllers;

import com.alessandro.argentieri.FileUploader.entities.File;
import com.alessandro.argentieri.FileUploader.entities.ResponseObject;
import com.alessandro.argentieri.FileUploader.services.FileService;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class FileControllerTest {

    FileController fileController;
    FileService fileService;
    File f;
    MultipartFile[] multipartFiles;

    @Before
    public void setUp(){
        fileController = new FileController();
        fileService = mock(FileService.class);
        ReflectionTestUtils.setField(fileController, "fileService", fileService);
        f = new File();
        multipartFiles = new MultipartFile[5];
    }

    @Test
    public void uploadCorrectly(){
        when(fileService.uploadFile(f, multipartFiles)).thenReturn(ResponseObject.FILE_UPLOADED_CODE);
        assertEquals(fileController.uploadFileMulti(f, multipartFiles).getStatusCode().value(), ResponseObject.FILE_UPLOADED_CODE);
        assertEquals(fileController.uploadFileMulti(f, multipartFiles).getBody(), new ResponseObject<String>(ResponseObject.FILE_UPLOADED_CODE, ResponseObject.messageMap.get(ResponseObject.FILE_UPLOADED_CODE)));
    }

    @Test
    public void noFileSelected(){
        when(fileService.uploadFile(f, multipartFiles)).thenReturn(ResponseObject.NO_FILE_SELECTED_CODE);
        assertEquals(fileController.uploadFileMulti(f, multipartFiles).getStatusCode().value(), ResponseObject.NO_FILE_SELECTED_CODE);
        assertEquals(fileController.uploadFileMulti(f, multipartFiles).getBody(), new ResponseObject<String>(ResponseObject.NO_FILE_SELECTED_CODE, ResponseObject.messageMap.get(ResponseObject.NO_FILE_SELECTED_CODE)));
    }

    @Test
    public void problemsInUploading(){
        when(fileService.uploadFile(f, multipartFiles)).thenReturn(ResponseObject.FILE_NOT_UPLOADED_CODE);
        assertEquals(fileController.uploadFileMulti(f, multipartFiles).getStatusCode().value(), ResponseObject.FILE_NOT_UPLOADED_CODE);
        assertEquals(fileController.uploadFileMulti(f, multipartFiles).getBody(), new ResponseObject<String>(ResponseObject.FILE_NOT_UPLOADED_CODE, ResponseObject.messageMap.get(ResponseObject.FILE_NOT_UPLOADED_CODE)));
    }

    @Test
    public void getFileList(){
        List<File> fileList = new ArrayList<>();
        fileList.add(f);
        when(fileService.getAllFiles()).thenReturn(fileList);
        assertEquals(fileList, fileController.getAllFilesUploaded().getBody().getData());
    }

    @Test
    public void openFile() throws IOException{
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType("text/plain"));
        byte[] contents = new byte[10];
        when(fileService.openFile("./files/myfile.txt")).thenReturn(contents);
        ResponseEntity responseEntity = new ResponseEntity(contents, headers, HttpStatus.OK);
        assertEquals(fileController.getFile("./files/myfile.txt").getBody(), responseEntity.getBody());
    }
}