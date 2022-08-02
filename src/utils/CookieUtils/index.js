import Cookie from 'universal-cookie';

const cookie = new Cookie();

const GetCookie = (name) => {
    return cookie.get(name);
};

const SetCookie = (name, value, options) => {
    cookie.set(name, value, options)
};

const RemoveCookie = (name) => {
    cookie.remove(name)
};

export {
    GetCookie,
    SetCookie,
    RemoveCookie
};