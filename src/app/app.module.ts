import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './compenents/car/car.component';
import { BrandComponent } from './compenents/brand/brand.component';
import { ColorComponent } from './compenents/color/color.component';
import { NaviComponent } from './compenents/navi/navi.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './compenents/cart-summary/cart-summary.component';
import { ColorfilterPipe } from './pipes/colorfilter.pipe';
import { CarAddComponent } from './compenents/car-add/car-add.component';
import { LoginComponent } from './compenents/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './compenents/register/register.component';
import { DeleteCarComponent } from './compenents/delete-car/delete-car.component';
import { DenemelerimComponent } from './compenents/denemelerim/denemelerim.component';
import { HomepageComponent } from './Homepage/components/homepage/homepage.component';
import { HomePageNavComponent } from './Homepage/components/home-page-nav/home-page-nav.component';
import { HomepageloginComponent } from './Homepage/components/homepagelogin/homepagelogin.component';
import { AdminpanelComponent } from './Homepage/components/adminpanel/adminpanel.component';
import { UseraddComponent } from './Homepage/components/useradd/useradd/useradd.component';
import { NavbaraddComponent } from './Homepage/components/navbarAdd/navbaradd/navbaradd.component';
import { HomepagesetsComponent } from './Homepage/components/homepageSettings/homepagesets/homepagesets.component';
import { ParentComponent } from './Homepage/components/parent/parent.component';


import {MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS} from '@angular/material/checkbox';
import { ContentComponent } from './Homepage/components/content/content.component';
import { NavbarDeleteComponent } from './Homepage/components/navbar-delete/navbar-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ColorfilterPipe,
    CarAddComponent,
    LoginComponent,
    RegisterComponent,
    DeleteCarComponent,
    DenemelerimComponent,
    HomepageComponent,
    HomePageNavComponent,
    HomepageloginComponent,
    AdminpanelComponent,
    UseraddComponent,
    NavbaraddComponent,
    HomepagesetsComponent,
    ParentComponent,
    ContentComponent,
    NavbarDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
