import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaSelectionIndexComponent } from './area-selection-index/area-selection-index.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './area-selection.routing';

@NgModule({
  declarations: [AreaSelectionIndexComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class AreaSelectionModule {}
