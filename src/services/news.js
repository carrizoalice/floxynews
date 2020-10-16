import API_K from '../config_keys'


export async function getNewsGobAr(){
    const api_key = API_K;
    const response = await fetch(`http://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=${api_key}`);
    const responseJson = await response.json();
    return responseJson

    // fetch('http://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=47e220d319514589833c444653c15ffc')
    // .then(res => res.json())
    // .then(newsJson => this.setState({news: newsJson.articles}))
}

export default {
    getNewsGobAr
}