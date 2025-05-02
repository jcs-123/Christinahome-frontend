import axios from 'axios';

export const commonAPI = async (httpRequest, url, reqBody, reqHeader) => {
    const isFormData = reqBody instanceof FormData;

    const reqConfig = {
        method: httpRequest,
        url,
        data: reqBody,
        headers: reqHeader 
            ? reqHeader 
            : isFormData 
                ? {} 
                : { "Content-Type": "application/json" },
    };

    return await axios(reqConfig)
        .then((result) => result)
        .catch((err) => err);
};
