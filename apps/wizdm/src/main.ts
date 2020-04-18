import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Augment global objects with useful functions
import 'app/utils/augment/string/camelize';
import 'app/utils/augment/string/hyphenize';
import 'app/utils/augment/string/interpolate';
import 'app/utils/augment/string/select'
//import 'app/utils/augment/string/printf';
//import 'app/utils/augment/math/normal';
//import 'app/utils/augment/array/shuffle';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
