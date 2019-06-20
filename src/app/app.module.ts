import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import {
  ngxZendeskWebwidgetModule,
  ngxZendeskWebwidgetConfig
} from "ngx-zendesk-webwidget";

import { AppRoutingModule } from "./app-routing.module";

export class ZendeskConfig extends ngxZendeskWebwidgetConfig {
  accountUrl = "provahelp.zendesk.com";
  beforePageLoad(zE) {
    //Chiamare i metodi prima  dello show
    zE.setLocale("it");

    // zE.setSettings(webWidget: {
    //   offset: { horizontal: '100px', vertical: '150px' }
    // })
    //Fine Ora si mostrerà su schermo
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    ngxZendeskWebwidgetModule.forRoot(ZendeskConfig),
    IonicModule.forRoot(),

    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
