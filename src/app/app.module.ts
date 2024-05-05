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
import { ProfilePerformerComponent } from './profile/profile.component';
import { ErrComponent } from './404/404.component';
import { DataCategoryComponent } from './data-category/data-category.component';
import { DataSubCategoryComponent } from './data-subCategory/data-subCategory.component';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { SelectPerformerComponent } from './select-performer/select-performer.component';
import { OrderComponent } from './order/order.component';
import { AuthForClientComponent } from './auth-for-client/auth-for-client.component';
import { AuthForPerformerComponent } from './auth-for-performer/auth-for-performer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInClientComponent } from './logIn-client/logIn-client.component';
import { LogInPerformerComponent } from './logIn-performer/logIn-performer.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileClientComponent } from './profile-client/profile-client.component';
import { OrdersClientComponent } from './orders-client/orders-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ActiveTaskComponent } from './active-task/active-task.component';




const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "auth-client", component: AuthForClientComponent},
  {path: "auth-performer", component: AuthForPerformerComponent},
  {path: "logIn-client", component: LogInClientComponent},
  {path: "logIn-performer", component: LogInPerformerComponent},
  {path: "category", component: CategoryComponent},
  {path: "question", component: QuestionComponent},
  {path: "feedback", component: FeedbackComponent},
  // {path: "type-feedback", component: TypeFeedbackComponent},
  {path: "be-performer", component: BePerformerComponent},
  // {path: "register", component: RegisterComponent},
  // {path: "callback", component: CallbackComponent},
  // {path: "avatar", component: CreateAvatatComponent},
  // {path: "skills", component: SkillsComponent},
  // {path: "subskills", component: SubskillsComponent},
  {path: "profile", component: ProfilePerformerComponent},
  {path: "profile-client", component: ProfileClientComponent},
  {path: "data-category", component: DataCategoryComponent},
  // {path: "data-subсategory", component: DataSubCategoryComponent },
  { path: 'data-subcategory/:id', component: DataSubCategoryComponent},
  // {path: "subcategory?id={subcategoryId}", component: DataSubCategoryComponent},
  {path: "select-performer", component: SelectPerformerComponent},
  {path: "chat", component: ChatComponent},
  // {path: "order", component: OrderComponent},
  {path: "**", component: ErrComponent}
  // { path: '', redirectTo: '/categories', pathMatch: 'full' }
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
      ProfilePerformerComponent,
      ErrComponent,
      DataCategoryComponent,
      DataSubCategoryComponent,
      TaskComponent,
      SelectPerformerComponent,
      OrderComponent,
      AuthForClientComponent,
      AuthForPerformerComponent,
      LogInClientComponent,
      LogInPerformerComponent,
      ChatComponent,
      ProfileClientComponent,
      OrdersClientComponent,
      ActiveTaskComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
