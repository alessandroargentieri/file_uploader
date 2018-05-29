package com.alessandro.argentieri.FileUploader.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@AllArgsConstructor @NoArgsConstructor @Data
public class ResponseObject<T> {

    public final static int FILE_NOT_UPLOADED_CODE = HttpStatus.UNPROCESSABLE_ENTITY.value();
    public final static int NO_FILE_SELECTED_CODE = HttpStatus.BAD_REQUEST.value();
    public final static int FILE_UPLOADED_CODE = HttpStatus.OK.value();

    private final static String FILE_NOT_UPLOADED = "File not uploaded correctly";
    private final static String NO_FILE_SELECTED = "Select a file first!";
    private final static String FILE_UPLOADED = "File uploaded successfully";

    public static final Map<Integer, String> messageMap;
    static {
        Map<Integer, String> map = new HashMap<>();
        map.put(FILE_NOT_UPLOADED_CODE, FILE_NOT_UPLOADED);
        map.put(FILE_UPLOADED_CODE, FILE_UPLOADED);
        map.put(NO_FILE_SELECTED_CODE, NO_FILE_SELECTED);
        messageMap = Collections.unmodifiableMap(map);
    }

    private int status;
    private T data;

}
