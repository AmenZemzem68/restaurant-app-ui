import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { TabsComponent } from './tabs/tabs.component'; // Assurez-vous d'importer TabsComponent ici

@NgModule({
  declarations: [AppComponent, TabsComponent], // Assurez-vous que TabsComponent est déclaré ici
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
