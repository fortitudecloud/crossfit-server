import { grapple, apiware, httpGet } from 'grapple';

module Crossfit {
    @apiware()
    export class Apiware {

        constructor() {}
        
        handle(req, res, next) {
            console.log('mongo rest api called');            
        }
    }

    @httpGet('/user')
    export class User {
        constructor() {}

        handle(req, res, next) {
            res.send({
                status: 200
            });
        }
    }
}

grapple([Crossfit]);