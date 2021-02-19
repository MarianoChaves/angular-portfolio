import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/general/header/header.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { AboutComponent } from './components/home/about/about.component';
import { JobsComponent } from './components/home/jobs/jobs.component';
import { ProyectsComponent } from './components/home/proyects/proyects.component';
import { MoreProyectsComponent } from './components/home/more-proyects/more-proyects.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    JobsComponent,
    ProyectsComponent,
    MoreProyectsComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    /* ArchiveComponent */
  ],
  imports: [
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxGoogleAnalyticsModule.forRoot(environment.trackAnalyticID)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
