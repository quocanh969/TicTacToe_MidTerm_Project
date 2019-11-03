const ApiUrl = "http://localhost:8080";

export const us = {
    login,
    register,
    update,
    changePassword,
    changeAvatar,
}

function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${ApiUrl}/users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user !== false) {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('setTimeLogIn', new Date().getTime());
            }

            return user;
        });
}

function register(user) {
    user.name = user.username;

    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    };

    return fetch(`${ApiUrl}/users/register`, requestOption)
        .then(handleResponse);

}

function update(id, userInfo) {
    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, user: userInfo }),
    };

    return fetch(`${ApiUrl}/users/update`, requestOption)
        .then(handleResponse);
}

function changePassword(id, password) {
    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
    };

    return fetch(`${ApiUrl}/users/update-password`, requestOption)
        .then(handleResponse);
}

function changeAvatar(id, url) {
    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, url }),
    };
    console.log('tiến hành gọi API update avatar');
    return fetch(`${ApiUrl}/users/update-avatar`, requestOption)
        .then(handleResponse);

}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                //logout();
                //window.location.reload(true);
                alert('code: 401');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export default us;