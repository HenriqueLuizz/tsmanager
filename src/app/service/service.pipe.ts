import { Pipe, PipeTransform } from '@angular/core';
import { ServiceComponent } from './service.component';

@Pipe({
    name: 'filtroPorNome'
})

export class FiltroPorNome implements PipeTransform { 
    
    transform(services: ServiceComponent[], digitado: string) {
        digitado = digitado.toLowerCase();
        return services.filter( service => service.name.toLowerCase().includes(digitado));
    }
}