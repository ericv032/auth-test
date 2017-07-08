import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig = {
<<<<<<< HEAD
   apiKey: "AIzaSyAUSHchGF0t4Mz5_sM4v86bhvAwyfcccww",
    authDomain: "angular-app-25373.firebaseapp.com",
    databaseURL: "https://angular-app-25373.firebaseio.com",
    projectId: "angular-app-25373",
    storageBucket: "angular-app-25373.appspot.com",
    messagingSenderId: "697428535068"
=======
//
>>>>>>> 8b78dcd2cb6133504e6ed28a22bac92d29a33a5a
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
