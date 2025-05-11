/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  let METAtitulo:string = "ByterDev | Fullstack Developer";
  let METAdescripcion:string = "Fullstack Developer proficient in Angular, .NET, and databases. Contact me to learn more about my projects.";
