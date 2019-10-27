import { NgModule, Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CallenderComponent } from './callender/callender.component';
import {NewsComponent} from './news/news.component';
// import { DiscussionComponent } from './discussion/discussion.component';
// import { UpdateCourseComponent } from './update-course/update-course.component';
import { FriendsComponent } from './friends/friends.component';
import { BooksComponent } from './books/books.component';
// import { BaseComponent } from './base/base.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path : 'SignUp', component: SignUpComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: 'Home', component: HomePageComponent},
  { path: 'Profile', component: ProfileComponent},
  {path : 'Cal', component: CallenderComponent},
  {path : 'Friends', component: FriendsComponent},
  {path : 'Profile', component: ProfileComponent},
  {path : 'Books', component: BooksComponent},
  {path : 'News', component: NewsComponent},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// tslint:disable-next-line:max-line-length
export const routingComponents = [ FriendsComponent, NewsComponent, CallenderComponent, HomePageComponent, SignInComponent, SignUpComponent,  ProfileComponent, BooksComponent, FriendsComponent]
