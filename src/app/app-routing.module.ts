import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrandComponent } from './compenents/brand/brand.component';
import { CarAddComponent } from './compenents/car-add/car-add.component';
import { CarComponent } from './compenents/car/car.component';
import { ColorComponent } from './compenents/color/color.component';
import { DeleteCarComponent } from './compenents/delete-car/delete-car.component';
import { DenemelerimComponent } from './compenents/denemelerim/denemelerim.component';
import { LoginComponent } from './compenents/login/login.component';
import { RegisterComponent } from './compenents/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { AdminpanelComponent } from './Homepage/components/adminpanel/adminpanel.component';
import { ContentComponent } from './Homepage/components/content/content.component';
import { HomePageNavComponent } from './Homepage/components/home-page-nav/home-page-nav.component';
import { HomepageComponent } from './Homepage/components/homepage/homepage.component';
import { HomepageloginComponent } from './Homepage/components/homepagelogin/homepagelogin.component';
import { HomepagesetsComponent } from './Homepage/components/homepageSettings/homepagesets/homepagesets.component';
import { NavbaraddComponent } from './Homepage/components/navbarAdd/navbaradd/navbaradd.component';
import { UseraddComponent } from './Homepage/components/useradd/useradd/useradd.component';

const routes: Routes = [
  {path:"",pathMatch:"full" ,component:HomepageComponent},
  {path:"homepage" ,component:HomepageComponent},
  {path:"adminpanel" ,component:AdminpanelComponent},
  {path:"login" ,component:HomepageloginComponent},
  {path:"Useradd" ,component:UseraddComponent},
  {path:"NavbarAdd" ,component:NavbaraddComponent},
  {path:"Homepagesettings" ,component:HomepagesetsComponent},
  {path:"homepage/navi/:id",component:ContentComponent}






];
// guardı pathin içinde hangisinde kullanacaksan oraya yazıyorsun canactivate: [loginguard]
// birden fazla guard ekleyebilirsin ondan dolayı array dönüyor
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
