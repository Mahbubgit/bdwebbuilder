import { useEffect, useState } from 'react';

const useLoginUser = user => {
    const [loginUser, setLoginUser] = useState(false);
    const [loginUserLoading, setLoginUserLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/profile/${user.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setLoginUser(data);
                    setLoginUserLoading(false);
                })
        }
    }, [user])

    return [loginUser, loginUserLoading];
}

export default useLoginUser;