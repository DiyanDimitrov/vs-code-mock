import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { ExplorerComponent } from './explorer/explorer.component';
import { SearchComponent } from './search/search.component';
import { ExtensionsComponent } from './extensions/extensions.component';

export const routes: Routes = [
  { path: '', redirectTo: 'explorer', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'explorer', component: ExplorerComponent, data: { text: 'Explorer' } },
  { path: 'search', component: SearchComponent, data: { text: 'Search' } },
  { path: 'extensions', component: ExtensionsComponent, data: { text: 'Extensions' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
