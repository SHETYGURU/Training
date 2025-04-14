import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LmsModule } from './app/lms/lms.module';


platformBrowserDynamic().bootstrapModule(LmsModule)
  .catch(err => console.error(err));
