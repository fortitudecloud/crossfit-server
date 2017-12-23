import { Observable } from 'rxjs';

const rp = require('request-promise');
var FitbitClient = require('fitbit-client-oauth2');

export class FitBitConnector {

    client: any;
    redirect_uri: string;
    scope = [];    

    constructor() {
        this.client = new FitbitClient('22CGY6', '3e94747028c020bece22aa395baac816');
        this.redirect_uri = 'http://localhost:3000/oauth_callback';
        this.scope =  [ 'activity', 'nutrition', 'profile', 'settings', 'sleep', 'social', 'weight' ];
    }

    auth(code: string): Observable<any> {
        return new Observable(ob => {
            this.client.getToken(code, this.redirect_uri)
            .then(function(token) {    
                // ... save your token on db or session... 
                ob.next(token);
                ob.complete();
            })
            .catch(function(err) {
                // something went wrong.
                ob.error(err);            
                ob.complete();
            });
        });
    }    

    refresh(tokens: any): Observable<any> {
        return new Observable(ob => {
            this.client.refreshAccessToken(tokens)
            .then(function(token) {    
                // ... save your token on db or session... 
                ob.next(token);
                ob.complete();
            })
            .catch(function(err) {
                // something went wrong.
                ob.error(err);            
                ob.complete();
            });
        });
    }

}

