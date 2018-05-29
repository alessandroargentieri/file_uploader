import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  uploader(){
    document.getElementById('show_tab').classList.remove('is-active');
    document.getElementById('uploader_tab').classList.add('is-active');
  }

  showFiles(){
    document.getElementById('show_tab').classList.add('is-active');
    document.getElementById('uploader_tab').classList.remove('is-active');
  }

}
