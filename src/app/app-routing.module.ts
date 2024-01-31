import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { FormAdminComponent } from './admin/form-admin.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Admin', component: AdminComponent},
  {path: 'Admin/Crear', component: FormAdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
