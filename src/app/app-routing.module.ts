import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DownloadComponent } from './download/download.component';
import { NewsComponent } from './news/news.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
const routes: Routes = [
  {path:'', redirectTo:'/portal', pathMatch:'full'},
  {path:'portal', component:PortalComponent},
  {path:'login', component:LoginComponent},
  {path:'profileData', component:ProfileDataComponent, canActivate:[AuthGuard]},
  // {path:'profileData', component:ProfileDataComponent},
  {path:'contactUs', component:ContactUsComponent},
  {path:'download', component:DownloadComponent},
  {path:'news', component:NewsComponent},
  {path:'faqs', component:FaqsComponent},
  {path:'newsDetail', component:NewsDetailComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
