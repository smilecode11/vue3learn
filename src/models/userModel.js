import Http from './index';
import {
    user
} from './apis';
class UserModel extends Http {
    /** 登录*/
    login({
        params
    }) {
        return this.request({
            url: user.login,
            method: 'post',
            params
        });
    }
}

export default UserModel;