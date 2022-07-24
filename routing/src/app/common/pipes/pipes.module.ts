import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationPipePipe } from './validation/validation-pipe.pipe';
import { DirectiveDirective } from './directive.directive';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [ValidationPipePipe, DirectiveDirective, FilterPipe],
  imports: [
    CommonModule
  ],
  exports:[ValidationPipePipe,DirectiveDirective,FilterPipe]
})
export class PipesModule { }
