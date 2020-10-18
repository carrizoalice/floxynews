import API_K from '../config_keys'


export async function getNewsGobAr(){
    const api_key = API_K;
    const response = await fetch(`http://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=${api_key}`);
    const responseJson = await response.json();
    return responseJson
}

export default {
    getNewsGobAr
}