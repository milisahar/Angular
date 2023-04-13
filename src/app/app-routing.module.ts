import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { OffreComponent } from './offre/offre.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'offres',component:OffreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
