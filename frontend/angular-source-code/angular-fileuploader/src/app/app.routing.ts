import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploaderComponent } from './components/uploader/uploader.component';
import { FiletableComponent } from './components/filetable/filetable.component';

const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'uploader' },
 { path: 'uploader', component: UploaderComponent },
 { path: 'files', component: FiletableComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
 exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [UploaderComponent, FiletableComponent];
