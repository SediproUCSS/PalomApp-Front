import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GeolocationService } from '../services/geolocation.service';


import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {firebaseConfig} from '../environments/firebase-config';

import { MyApp } from './app.component';
import { InicioPage} from '../pages/inicio/inicio';
import { MapaPage} from '../pages/mapa/mapa';
import { CafeteriaPage} from '../pages/cafeteria/cafeteria';
import { LaboratorioPage} from '../pages/laboratorio/laboratorio';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { MenuPage } from '../pages/menu/menu';
import { PlatoPage } from '../pages/plato/plato';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    MapaPage,
    CafeteriaPage,
    LaboratorioPage,
    SignUpPage,
    MenuPage,
    PlatoPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    MapaPage,
    CafeteriaPage,
    LaboratorioPage,
    SignUpPage,
    MenuPage,
    PlatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    GeolocationService
  ]
})
export class AppModule {}
