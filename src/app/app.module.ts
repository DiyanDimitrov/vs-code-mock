import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { IgxListModule, IgxInputGroupModule, IgxIconModule, IgxAvatarModule, IgxNavigationDrawerModule, IgxTabsModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ExtensionsComponent } from './extensions/extensions.component';

@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent,
    SearchComponent,
    ExtensionsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    FormsModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxNavigationDrawerModule,
    IgxTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
