import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
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
import { ErrComponent } from './404/404.component';
import { DataCategoryComponent } from './data-category/data-category.component';
import { DataSubCategoryComponent } from './data-subCategory/data-subCategory.component';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { SelectPerformerComponent } from './select-performer/select-performer.component';
import { ChatComponent } from './chat/chat.component';


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
  {path: "profile", component: ProfileComponent},
  {path: "data-category", component: DataCategoryComponent},
  {path: "data-category/:categoryId/sub-categories", component: DataSubCategoryComponent},
  {path: "select-performer", component: SelectPerformerComponent},
  {path: "chat", component: ChatComponent},
  {path: "**", component: ErrComponent}
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
      ProfileComponent,
      ErrComponent,
      DataCategoryComponent,
      DataSubCategoryComponent,
      TaskComponent,
      SelectPerformerComponent,
      ChatComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
