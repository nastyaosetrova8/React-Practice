import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyjson.com',
});

export const requestUsers = async (skip, limit) => {
    const { data } = await instance.get(`/users?skip=${skip}&limit=${limit}`);
    return data.users;
};
