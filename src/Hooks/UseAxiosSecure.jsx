import axios from 'axios';
import React, { useCallback, useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})


const UseAxiosSecure = () => {
    const {userLogOut} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response;
        }),error => {
            console.log('error caught in interceptor', error);
            if(error.status === 401 || error.status === 403){
                console.log('need to logout the user');
                userLogOut()
                .then(()=>{
                    console.log('loged out user');
                    navigate('/login')
                })
                .catch(err=>console.log(err))
            }

            return Promise.reject(error);
        }
    })

    return axiosInstance;
};

export default UseAxiosSecure;