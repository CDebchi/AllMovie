import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './Accueil/navbar/navbar.component';
import { CarouselComponent } from './Accueil/carousel/carousel.component';
import { LoginnComponent } from './accueil/loginn/loginn.component';
import { RegisterComponent } from './accueil/register/register.component';
import { FooterComponent } from './accueil/footer/footer.component';
import { FilmService } from './film.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavComponent } from './dashbord/nav/nav.component';
import { ProfilComponent } from './dashbord/profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    CarouselComponent,
    LoginnComponent,
    RegisterComponent,
    FooterComponent,
    DashbordComponent,
    NavComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
