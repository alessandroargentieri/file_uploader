import { Component, OnInit } from '@angular/core';
import { UploaderService } from './../../services/uploader.service';
import { ResponseObject } from '../../entities/ResponseObject';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  fileToUpload: File = null;
  title: string = null;
  description: string = null;

  constructor(private uploaderService: UploaderService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
  }

  uploadFile() {
      if(this.fileToUpload == null || this.title == null || this.description == null){
         alert("You must choose a file and define a title and a description first!");
      }else{
        this.uploaderService.postFile(this.title, this.description, this.fileToUpload)
          .subscribe(data =>  this.success(),
                     error => { alert("Error in uploading!"); console.log(error);}
                     );
      //  window.location.reload(true);
      }
    }

    success(): void {
       alert("file " + this.title + " uploaded!");
       this.title = null;
       this.description = null;
       this.fileToUpload = null;
    //   this.handleFileInput(null);
    //   (<HTMLInputElement>document.getElementById("file")).value = null;
    }

}
