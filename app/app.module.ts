import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {ToastOptions} from 'ng2-toastr';

export class CustomOption extends ToastOptions {
  positionClass: 'toast-bottom-full-width';
  animate = 'flyRight'; // you can override any options available
  showCloseButton = true;
  toastLife= 100000;
}

@NgModule({
  imports: [ BrowserAnimationsModule, FormsModule, ToastModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {provide: ToastOptions, useClass: CustomOption}
  ]
})
export class AppModule { }
