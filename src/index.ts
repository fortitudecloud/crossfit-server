import { grapple, apiware, httpGet, httpPost } from 'grapple';
import { FitBitConnector } from './fitbit';

module Crossfit {
    @apiware()
    export class Apiware {

        constructor() {}
        
        handle(req, res, next) {
            console.log('mongo rest api called');            
        }
    }

    @httpGet('/fitbit/auth')
    export class FitbitAuth {
        connector: FitBitConnector;

        constructor() {
            this.connector = new FitBitConnector();
        }

        handle(req, res, next) {
            this.connector.auth(req.params.code).subscribe(t => {
                res.send(t);
            }, (err) => {
                res.send(500);
            });            
        }
    }

    @httpPost('/fitbit/refresh')
    export class FitbitRefresh {
        connector: FitBitConnector;
        
        constructor() {
            this.connector = new FitBitConnector();
        }

        handle(req, res, next) {
            this.connector.refresh(req.body).subscribe(t => {
                res.send(t);
            }, (err) => {
                res.send(500);
            });            
        }
    }

    @httpGet('/fitbit/redirect')
    export class FitbitRedirect {
        connector: FitBitConnector;
        
        constructor() {
            this.connector = new FitBitConnector();
        }

        handle(req, res, next) {
            this.connector.redirect().subscribe(t => {
                res.send(t);
            }, (err) => {
                res.send(500);
            });            
        }
    }
}

grapple([Crossfit]);