import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../components/child.component';
import { ChildRoutingModule } from '../modules/child-routing.module';

@NgModule({
  declarations: [ChildComponent],
  imports: [CommonModule, ChildRoutingModule],
})
export class ChildModule {}
