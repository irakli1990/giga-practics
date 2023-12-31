import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [UserService],
})
export class UserModule {}
