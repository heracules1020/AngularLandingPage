import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContentComponent } from './content/content.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosectionComponent,
    HeaderComponent,
    AboutusComponent,
    ServiceComponent,
    TimelineComponent,
    ContentComponent,
    TeamComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
