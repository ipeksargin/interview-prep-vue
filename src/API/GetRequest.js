const axios = require('axios')

export const runGetRequestWithParams = async (movieTitle) => {
    const year = "2020";
    const apiKey = "71cb4251"
    const URL = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}&y=${year}`;
    const response = await axios.get(URL);

    if (response.status != 200){
        return "API Error"
    }
    return response
}