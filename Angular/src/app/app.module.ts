import { ReaderService } from './service/reader.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReaderDetailsComponent } from './reader-details/reader-details.component';
import { ReaderStructureComponent } from './reader-details/reader-structure/reader-structure.component';
import { ReaderViewsComponent } from './reader-details/reader-views/reader-views.component';

@NgModule({
  declarations: [
    AppComponent,
    ReaderDetailsComponent,
    ReaderStructureComponent,
    ReaderViewsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ReaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
