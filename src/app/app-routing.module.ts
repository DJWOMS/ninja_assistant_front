import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {SearchModule} from "./search/search.module";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => SearchModule, pathMatch: 'full'
  },
  // {
  //   path: 'profile', component: AuthLayoutComponent, canActivate: [AuthGuard], children: [
  //     {
  //       path: 'wall',
  //       loadChildren: () => WallPageModule
  //     },
  //   ]
  // }

];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      }
    ),
    SearchModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
