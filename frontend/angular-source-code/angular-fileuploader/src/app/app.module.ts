import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './main-component/app.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { UploaderService } from './services/uploader.service';
import { DownloaderService } from './services/downloader.service';
import { FiletableComponent } from './components/filetable/filetable.component';
import { TabsComponent } from './components/tabs/tabs.component';

import { AppRoutingModule} from './app.routing';   //NEW!!!

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,   //TODO rimuovere
    FiletableComponent,  //TODO rimuovere
    TabsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule      //NEW!!
  ],
  providers: [UploaderService, DownloaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
