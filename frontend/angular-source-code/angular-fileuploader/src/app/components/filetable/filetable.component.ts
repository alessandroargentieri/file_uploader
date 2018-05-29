import { Component, OnInit } from '@angular/core';
import { File } from '../../entities/File';
import { ResponseObject } from '../../entities/ResponseObject';
import { DownloaderService } from './../../services/downloader.service';

@Component({
  selector: 'app-filetable',
  templateUrl: './filetable.component.html',
  styleUrls: ['./filetable.component.css']
})
export class FiletableComponent implements OnInit {

  files: File[] = null;

  constructor(private downloaderService: DownloaderService) { }

  ngOnInit() {
      this.fillTable();
  }

  fillTable(){
    this.downloaderService.fetchList().subscribe(results =>  this.manageResults(results.body),
                                                 error => { alert("Error in uploading!"); console.log(error);});
  }

  delete(id: number){
    this.downloaderService.deleteOne(id);
    //this.fillTable();   
    //document.getElementById("" + id).remove();

    //var elem = document.getElementById("" + id);
    //elem.parentNode.removeChild(elem);
    //this.ngOnInit();

    window.location.reload();
  }

  manageResults(result: ResponseObject){
    if(result.status == 200) {
       this.files = result.data;
    }else{
       alert("Error while uploading!");
    }
  }

}
