import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AllReciprComponent } from './all-recipr/all-recipr.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { LogoutComponent } from './logout/logout.component';
import { DurationPipe } from './duration.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllReciprComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    LogoutComponent,
    DurationPipe,
    
  

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
