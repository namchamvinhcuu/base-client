import { useEffect, useState } from 'react'
import { GetLocalStorage } from '@utils';
import { ACCESS_TOKEN } from '@constants';
import AxiosInstance from '@axioz-config';


export default function useCheckUserLoggedIn() {

    const [loggedIn, setLoggedIn] = useState();

    useEffect(() => {
        // let token = GetCookie('token');
        let token = GetLocalStorage(ACCESS_TOKEN);

        if (token) {
            async function checkExisted() {
                let response = await AxiosInstance.get('userinfo/check-loggedin');
                if (response.data.HttpResponseCode === 200)
                    setLoggedIn(true);
            }
            checkExisted();
        }
    }, []);
    return loggedIn;
}
