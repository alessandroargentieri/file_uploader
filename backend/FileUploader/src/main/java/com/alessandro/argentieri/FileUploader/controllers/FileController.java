package com.alessandro.argentieri.FileUploader.controllers;

import com.alessandro.argentieri.FileUploader.entities.File;
import com.alessandro.argentieri.FileUploader.entities.ResponseObject;
import com.alessandro.argentieri.FileUploader.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
public class FileController {

    @Autowired
    FileService fileService;

    @PostMapping("/api/upload")
    public ResponseEntity<ResponseObject<String>> uploadFileMulti(File file, @RequestParam("files") MultipartFile[] uploadfiles) {
        int response = fileService.uploadFile(file, uploadfiles);
        return ResponseEntity.status(response).body(new ResponseObject<String>(response, ResponseObject.messageMap.get(response)));
    }

    @GetMapping("/get/files")
    public ResponseEntity<ResponseObject<List<File>>> getAllFilesUploaded() {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(HttpStatus.OK.value(), fileService.getAllFiles()));
    }

    @GetMapping("/delete/file/{id}")
    public void deleteFile(@PathVariable(name="id") Long id) {
        fileService.delete(id);
    }

    @RequestMapping(value="/open/file", method=RequestMethod.GET)
    public ResponseEntity<byte[]> getFile(@RequestParam("filename") String filename) throws IOException {

        HttpHeaders headers = new HttpHeaders();
        if(filename.endsWith(".pdf")) {
            headers.setContentType(MediaType.parseMediaType("application/pdf"));
        }else if(filename.endsWith(".txt")) {
            headers.setContentType(MediaType.parseMediaType("text/plain"));
        }else if(filename.endsWith(".docx")) {
            headers.setContentType(MediaType.parseMediaType("application/docx"));
        }else if(filename.endsWith(".doc")) {
            headers.setContentType(MediaType.parseMediaType("application/doc"));
        }else if(filename.endsWith(".xlsx")) {
            headers.setContentType(MediaType.parseMediaType("application/xlsx"));
        }else if(filename.endsWith(".xls")) {
            headers.setContentType(MediaType.parseMediaType("application/xls"));
        }else if(filename.endsWith(".ppt")) {
            headers.setContentType(MediaType.parseMediaType("application/ppt"));
        }else if(filename.endsWith(".pptx")) {
            headers.setContentType(MediaType.parseMediaType("application/pptx"));
        }else if(filename.endsWith(".gif")) {
            headers.setContentType(MediaType.parseMediaType("image/gif"));
        }else if(filename.endsWith(".png")) {
            headers.setContentType(MediaType.parseMediaType("image/png"));
        }else if(filename.endsWith(".jpg")) {
            headers.setContentType(MediaType.parseMediaType("image/jpg"));
        }else if(filename.endsWith(".jpeg")) {
            headers.setContentType(MediaType.parseMediaType("image/jpeg"));
        }else if(filename.endsWith(".bmp")) {
            headers.setContentType(MediaType.parseMediaType("image/bmp"));
        }
        headers.add("content-disposition", "inline;filename=" + filename);
        headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");

        byte[] contents = fileService.openFile(filename);
        return new ResponseEntity(contents, headers, HttpStatus.OK);
    }

    @GetMapping("/files")
    public void mapFilesUrl(HttpServletResponse response) throws IOException {
        response.sendRedirect("/");
    }

    @GetMapping("/uploader")
    public void mapUploaderUrl(HttpServletResponse response) throws IOException {
        response.sendRedirect("/");
    }

}
