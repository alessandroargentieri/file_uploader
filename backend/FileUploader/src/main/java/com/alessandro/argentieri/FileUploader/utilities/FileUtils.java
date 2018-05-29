package com.alessandro.argentieri.FileUploader.utilities;

import com.alessandro.argentieri.FileUploader.FileUploaderApplication;
import com.alessandro.argentieri.FileUploader.entities.ResponseObject;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class FileUtils {

    public static int uploadFileOnServer(MultipartFile[] uploadfiles){
        int response;
        String uploadedFileName = Arrays.stream(uploadfiles).map(x -> x.getOriginalFilename())
                .filter(x -> !StringUtils.isEmpty(x)).collect(Collectors.joining(" , "));
        if (StringUtils.isEmpty(uploadedFileName)) {
            response = ResponseObject.NO_FILE_SELECTED_CODE;
        }else{
            try {
                saveUploadedFiles(Arrays.asList(uploadfiles));
                response = ResponseObject.FILE_UPLOADED_CODE;
            } catch (IOException e) {
                response = ResponseObject.FILE_NOT_UPLOADED_CODE;
            }
        }
        return response;
    }

    private static void saveUploadedFiles(List<MultipartFile> files) throws IOException {
        for (MultipartFile file : files) {
            if (file.isEmpty()) {
                continue;
            }
            byte[] bytes = file.getBytes();
            File directory = new File(String.valueOf(FileUploaderApplication.UPLOADED_FOLDER));
            if(!directory.exists()) {
                directory.mkdir();
            }
            Path path = Paths.get(FileUploaderApplication.UPLOADED_FOLDER + "/" + file.getOriginalFilename());
            Files.write(path, bytes);
        }
    }

    public static byte[] getFile(String filename) throws IOException{
        Path path = Paths.get(filename);
        return Files.readAllBytes(path);
    }
}
