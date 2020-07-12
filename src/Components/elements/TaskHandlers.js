import React from 'react';
import axios from 'axios';


export const handlePostRequest = async (url,data) => {
    console.log(data);
    try{
        const res = await axios.post(url,data,{
            headers : {'Content-Type':'application/json'}
        });
        if(url.includes('/users/login')){
            localStorage.setItem('user_information',JSON.stringify(res.data.response.data));
        }
        return res.data.response;
    }catch(error){
        return error;
    }
}


export const handleGetRequestsWithToken = async (url,data) => {
    try{
        let user_information = localStorage.getItem(user_information);
        console.log(user_information);
        // axios.get(url,{
        //         headers : {'Content-Type' : 'application/json', 
        //         Authorisation : `Bearer ${}` 
        //     }
        // })
    }catch(error){
        console.log(error);
    }
}

export const handlePostRequestWithToken = async (url,data) => {
    try{
        let {token} = JSON.parse(localStorage.getItem('user_information'));
        console.log(token);
        let res = await axios.post(url,data,{
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });
        return res.data.response;
    }catch(error){
        console.log(error);
    }
}