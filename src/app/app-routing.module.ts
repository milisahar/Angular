import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { OffreComponent } from './offre/offre.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'products', pathMatch:'full'},
  {path:'products',component:ProductComponent},
  {path:'offres',component:OffreComponent},
  {path:'**',component:NotFoundComponent}//**  none of the path above */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
