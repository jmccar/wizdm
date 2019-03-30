import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { IconModule, AvatarModule, LikesModule } from '@wizdm/elements';
import { ContentResolver, PageGuardService } from '../../utils';
import { UserInfoModule } from '../user-info/user-info.module';
import { ExploreComponent } from './explore.component';
import { ExploreItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreComponent,
    resolve: { content: ContentResolver }, 
    data: { modules: ['explore', 'info'] }
  }
];

@NgModule({
  declarations: [ 
    ExploreComponent, 
    ExploreItemComponent 
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AvatarModule, 
    LikesModule,
    UserInfoModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class ExploreModule { }