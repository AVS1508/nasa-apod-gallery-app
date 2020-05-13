import axios from 'axios';

const urlAPI = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.REACT_APP_NASA_API_KEY.toString();

export const fetchData = async () => {
    try {
        const response = await axios.get(urlAPI);
        return response;
    } catch (error) {
        console.log(error);
    }
}