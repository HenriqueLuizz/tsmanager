import { NgModule } from '@angular/core';
import { ServiceComponent } from './service.component';
import { FiltroPorNome} from './service.pipe';
import { ServiceService } from './service.service';

@NgModule({
    declarations: [ ServiceComponent, FiltroPorNome ],
    exports: [ ServiceComponent, FiltroPorNome ],
    providers: [ ServiceService ]
})
export class ServiceModule { }