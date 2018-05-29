package com.alessandro.argentieri.FileUploader.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity @Table(name = "files")
@AllArgsConstructor @NoArgsConstructor @Data
public class File {

    @Id @GeneratedValue
    @Column(name="id")
    private Long id;

    @Column(name="title") @NotBlank
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="path")
    private String path;

    @Column(name="creation_date")
    private Date creationDate;

    @PrePersist
    private void setDate(){
        creationDate = new Date();
    }
}
