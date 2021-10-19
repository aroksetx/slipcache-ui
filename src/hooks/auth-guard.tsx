import {storage} from '../services';
import {useEffect, useState} from 'react';
import {routes} from '../navigation';

export const useAuthGuard = () => {
    const [authorized, setAuthorized] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        storage.getItem('SYSTEM', 'token')
            .then((value) => {
                if(value != null) {
                    setAuthorized(true);
                    setToken(value);
                }
            })
            .catch((error) => {
                setAuthorized(false);
            })
    }, [])


    return {
        isAuthorized: authorized,
        getToken: token,
        isAuthSection: () =>  window.location.href.includes(routes.auth.signin) || window.location.href.includes(routes.auth.signup)
    };
}
