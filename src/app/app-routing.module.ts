import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { not } from '@angular/compiler/src/output/output_ast';
import { AllReciprComponent } from './all-recipr/all-recipr.component';
import { LogoutComponent } from './logout/logout.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'all-recipe',component:AllReciprComponent},
  {path:'register',component:RegisterComponent},
  {path:'addRecipe',component:AddRecipeComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
