import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatListModule} from '@angular/material/list';
import {MatAccordion} from '@angular/material/expansion';




@NgModule({
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatListModule
  ]
})
export class MaterialModule {}