export default class UserInfo {

    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public callbackUrlTemplate: string;

    constructor() {
        this.callbackUrlTemplate = 'http://client.kohab.com/verify/${token}';
    }
}