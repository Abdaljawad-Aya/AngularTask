import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { MovieComponent } from './movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbButtonModule, NbButtonGroupModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { DataServices } from './service/data.services';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookmarkComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'movieSearch' }),
    NbLayoutModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbEvaIconsModule,
    AppRoutingModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbButtonGroupModule
    
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
