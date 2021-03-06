import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { InicioPage} from '../pages/inicio/inicio';
import { MapaPage} from '../pages/mapa/mapa';
import { CafeteriaPage} from '../pages/cafeteria/cafeteria';
import { LaboratorioPage} from '../pages/laboratorio/laboratorio';
import { SignUpPage } from '../pages/sign-up/sign-up';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild ('NAV') nav: Nav;
  public rootPage:any;
  public pages: Array<{titulo: string,component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private auth: AuthProvider) {
    this.rootPage = InicioPage;
    this.pages= [
      {titulo:'Inicio',component:InicioPage,icon:'home'},
      {titulo:'Mapa',component:MapaPage,icon:'map'},
      {titulo:'Cafeteria',component:CafeteriaPage,icon:'cafe'},
      {titulo:'Laboratorio',component:LaboratorioPage,icon:'desktop'},
      {titulo:'Ingresar',component:SignUpPage,icon:'log-in'}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPage(page){
    this.nav.setRoot(page);
    console.log('pagina cargada');
  }
}

