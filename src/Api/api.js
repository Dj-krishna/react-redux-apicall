import axios from 'axios';

const getUserApi = () => {
    return axios.get(`https://api.github.com/users`);
}

export { getUserApi }