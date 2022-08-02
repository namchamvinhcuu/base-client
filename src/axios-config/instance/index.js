import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN, LOGGEDIN_USER } from '@constants';
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';
import { GetLocalStorage, SetLocalStorage, RemoveLocalStorage } from '../../utils/index';
import history from "../../libraries/history/index";
// import { BASE_URL } from 'constants/index';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10 * 1000,
    withCredentials: false,
    headers: {
        // "Access-Control-Allow-Origin": "http://baseclient.autonsi.com",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        // "Authorization": `Bearer ${token.Token}`,
    },
});

axiosInstance.interceptors.request.use(async (request) => {
    if (
        request.url.indexOf(BASE_URL + 'login') >= 0
        || request.url.indexOf(BASE_URL + 'refreshtoken') >= 0
        || request.url.indexOf(BASE_URL + 'logout') >= 0
    ) {
        return request;
    }
    else {
        let token = GetLocalStorage(ACCESS_TOKEN);
        if (token) {

            const tokenDecode = jwt_decode(token.Token);
            const isExpired = dayjs.unix(tokenDecode.exp).diff(dayjs()) < 1;
            if (!isExpired) {
                request.headers.Authorization = `Bearer ${token.Token}`;
                return request;
            }

            const response = await axiosInstance.getNewAccessToken();
            if (response) {
                token = GetLocalStorage(ACCESS_TOKEN);
                request.headers.Authorization = `Bearer ${token.Token}`;
                return request;
            }
            else {
                // WarnAlert('You lost your authorization, please login again !');
                await axiosInstance.Logout();
                return request;
            }
        }
        else {
            // WarnAlert('You lost your authorization, please login again !');
            await axiosInstance.Logout();
            return request;
        }

    }

}, err => {
    return Promise.reject(err)
});

axiosInstance.interceptors.response.use(async (response) => {

    // switch (response.data.HttpResponseCode) {
    //     case 200:
    //         return response;
    //     case 400:
    //         WarnAlert(response.data.ResponseMessage)
    //         return response;
    //     case 403:
    //         WarnAlert(response.data.ResponseMessage)
    //         return response;
    //         case 404:
    //             WarnAlert(response.data.ResponseMessage)
    //             return response;
    //     default:
    //         if (response.data.ResponseMessage === 'You lost your authorization, please login again !') {
    //             await axiosInstance.Logout();
    //             return response;
    //         }
    //         WarnAlert(response.data.ResponseMessage)
    //         return response;
    // }

    // debugger

    if (response.data.ResponseMessage === 'You lost your authorization, please login again !') {
        // WarnAlert('You lost your authorization, please login again !');
        await axiosInstance.Logout();
        return response;
    }
    return response;

}, err => {
    return Promise.reject(err)
});

axiosInstance.getNewAccessToken = async () => {
    let token = GetLocalStorage(ACCESS_TOKEN);
    let postObj = {
        ExpiredToken: token.Token,
        RefreshToken: token.RefreshToken
    }

    const response = await axiosInstance.post(BASE_URL + 'refreshtoken', postObj);

    if (response.data.HttpResponseCode === 200) {
        let newTokenObj = response.data.Data;
        SetLocalStorage(ACCESS_TOKEN, newTokenObj);
        return true;
    }
    else
        return false;
}

axiosInstance.Logout = async () => {
    RemoveLocalStorage(ACCESS_TOKEN);
    RemoveLocalStorage(LOGGEDIN_USER);
    history.push({
        pathname: "login",
    });
}

export default axiosInstance;