import { HttpClient } from 'aurelia-fetch-client';
import { autoinject } from "aurelia-framework";
import 'whatwg-fetch';

@autoinject
export default class BaseService {
    public http: HttpClient;
    constructor(private httpClient: HttpClient) {
        this.http =  httpClient.configure(config => {
            config
            .useStandardConfiguration()
            .withBaseUrl('http://api.staging.kohab.co/');
        });
    }
}