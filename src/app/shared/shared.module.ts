import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppleTextComponent } from './apple-text/apple-text.component';
import { CopyBlockComponent } from './copy-block/copy-block.component';
import { ShimmerTitleComponent } from './shimmer-title/shimmer-title.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypeWordComponent } from './type-word/type-word.component';
import { SkillIconComponent } from './skill-icon/skill-icon.component';
import { SkillArrayComponent } from './skill-array/skill-array.component';



@NgModule({
  declarations: [
    AppleTextComponent,
    CopyBlockComponent,
    ShimmerTitleComponent,
    WordCloudComponent,
    TypeWordComponent,
    SkillIconComponent,
    SkillArrayComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    AppleTextComponent,
    CopyBlockComponent,
    ShimmerTitleComponent,
    WordCloudComponent,
    TypeWordComponent,
    SkillIconComponent,
    SkillArrayComponent
  ]
})
export class SharedModule { }
