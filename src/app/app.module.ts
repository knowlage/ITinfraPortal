import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { DownloadComponent } from './download/download.component';
import { NewsComponent } from './news/news.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FooterComponent } from './footer/footer.component';
import { ComputerProfileComponent } from './computer-profile/computer-profile.component';
import { ComputerBackofficeProfileComponent } from './computer-backoffice-profile/computer-backoffice-profile.component';
import { SoftwareProfileComponent } from './software-profile/software-profile.component';
import { ComputerProjectProfileComponent } from './computer-project-profile/computer-project-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LoginComponent,
    ProfileDataComponent,
    ContactUsComponent,
    DownloadComponent,
    NewsComponent,
    FaqsComponent,
    FooterComponent,
    ComputerProfileComponent,
    ComputerBackofficeProfileComponent,
    SoftwareProfileComponent,
    ComputerProjectProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
