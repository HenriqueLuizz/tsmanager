import { Http, Headers, Response} from '@angular/http';
import { ServiceComponent } from './service.component';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    cadastra(service: ServiceComponent): Observable<MensagemCadastro> {
        
        if(service._id){
            return this.http
                .put(this.url + '/' + service._id, JSON.stringify(service), { headers: this.headers })
                .map(() => new MensagemCadastro('Serviço alterado com sucesso', false));
        }else{

            return this.http
                .post(this.url, JSON.stringify(service), { headers: this.headers }) 
                .map(() => new MensagemCadastro('Serviço incluido com sucesso', true));
        }

    }

    lista(): Observable<ServiceComponent[]>{
        return this.http
        .get(this.url)
        .map(res => res.json())
    }

    remove(service: ServiceComponent){

        return this.http.delete(this.url+'/'+ service._id);
    }

    buscaPorId(id: string): Observable<ServiceComponent> {
        return this.http
            .get(this.url + '/' + id)
            .map(res => res.json());
    }
}

//Tipo Mensagem
export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean){
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {
        return this._inclusao;
    }
}