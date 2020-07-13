import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MultiselectListComponent } from './multiselect-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpacerModule, InfoListItemModule, EmptyStateModule } from '@pxblue/angular-components';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        MatSnackBarModule,
        SpacerModule,
        InfoListItemModule,
        EmptyStateModule,
        MatBottomSheetModule
    ],
    declarations: [MultiselectListComponent],
})
export class MultiselectListModule {}
