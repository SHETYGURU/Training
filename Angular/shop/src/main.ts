import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { SlistComponent } from './app/smodule/slist/slist.component';
import { SmoduleModule } from './app/smodule/smodule.module';


platformBrowserDynamic().bootstrapModule(SmoduleModule)
  .catch(err => console.error(err));
