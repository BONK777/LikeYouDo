import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { QuestionComponent } from './question/question.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TypeFeedbackComponent } from './type-feedback/type-feedback.component';
import { BePerformerComponent } from './be-performer/be-performer.component';
import { RegisterComponent } from './register/register.component';
import { CallbackComponent } from './callback/callback.component';
import { CreateAvatatComponent } from './create-avatat/create-avatat.component';
import { SkillsComponent } from './skills/skills.component';
import { SubskillsComponent } from './subskills/subskills.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "category", component: CategoryComponent},
  {path: "subcategory", component: SubcategoryComponent},
  {path: "question", component: QuestionComponent},
  {path: "feedback", component: FeedbackComponent},
  {path: "type-feedback", component: TypeFeedbackComponent},
  {path: "be-performer", component: BePerformerComponent},
  {path: "register", component: RegisterComponent},
  {path: "callback", component: CallbackComponent},
  {path: "avatar", component: CreateAvatatComponent},
  {path: "skills", component: SkillsComponent},
  {path: "subskills", component: SubskillsComponent},
  {path: "profile", component: ProfileComponent}
]

@NgModule({
  declarations: [														
    AppComponent,
      HomeComponent,
      CategoryComponent,
      WrapperComponent,
      SubcategoryComponent,
      QuestionComponent,
      FeedbackComponent,
      TypeFeedbackComponent,
      BePerformerComponent,
      RegisterComponent,
      CallbackComponent,
      CreateAvatatComponent,
      SkillsComponent,
      SubskillsComponent,
      ProfileComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
