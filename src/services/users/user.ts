import BaseService from './../../services/base';

export default class UserService extends BaseService {

    signUp(userInfo) {
        return this.http.fetch('users', {
            method: 'POST',
            body: userInfo
        }).then((response) => {
            if( response.status !== 200)
            {
                throw response;
            }
            else {
                alert("Success!");
                return response.status;
            }
        })
        .catch(error => {
            switch (error.status) {
                case 400:
                    alert("Please fill out the form");
                    break;
                case 409:
                    alert("User already exists");
                    break;
            }
        });
    }

    verify(data) {
        return this.http.fetch('users/verifyEmail', {
            method: 'POST',
            body: data
        }).then((response) => {
            if( response.status !== 200)
            {
                throw response;
            }
            else {
                alert("Success!");
                return response.status;
            }
        })
        .catch(error => {
            switch (error.status) {
                case 400:
                    alert("Please fill out the form");
                    break;
                case 404:
                    alert("Email Not Registered");
                    break;
                case 406:
                    alert("Invalid Token");
                    break;
            }
        });
    }

}