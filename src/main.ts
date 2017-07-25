import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule  from './views/lib/app.module';

import Navbar from './views/navbar/navbar.component';
import DrawerComponent from './views/drawer/drawer.component';

import 'platypus';
import 'platypusui';

platformBrowserDynamic().bootstrapModule(AppModule);