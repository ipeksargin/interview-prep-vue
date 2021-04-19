const axios = require('axios')

export const runGetRequestWithParams = async () => { 
    const apiKey = "71cb4251"
    const URL = `http://www.omdbapi.com/?apikey=${apiKey}`;
    const response = await axios.get(URL);

    if (response.status != 200){
        throw Error("API Get Request Failed");
    }
    return response
}