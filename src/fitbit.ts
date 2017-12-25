import { Observable } from 'rxjs';

const rp = require('request-promise');
var FitbitClient = require('fitbit-client-oauth2');

export class FitBitConnector {

    client: any;
    redirect_uri: string;
    scope = [];    

    constructor() {
        this.client = new FitbitClient('22CH93', 'c2530f96f0c9beb2007505a6d8dd4f78');

        // this.redirect_uri = 'http://lcoalhost:3000/oauth2/0';
        // this.redirect_uri = 'http://192.168.15.178:5200/oauth2/0';
        this.redirect_uri = 'https://35.189.50.219/oauth2/0';
        
        this.scope =  [ 'activity', 'profile', 'settings' ];
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

    redirect(): Observable<any> {
        return new Observable(ob => {
            var url = this.client.getAuthorizationUrl(this.redirect_uri, this.scope.join(' '));
            ob.next({ url: url });
            ob.complete();
        });
    }

}

