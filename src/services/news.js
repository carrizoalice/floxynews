export async function getNewsGobAr(){
    const response = await fetch('http://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=47e220d319514589833c444653c15ffc')
    const responseJson = await response.json()
    return responseJson

    // fetch('http://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=47e220d319514589833c444653c15ffc')
    // .then(res => res.json())
    // .then(newsJson => this.setState({news: newsJson.articles}))
}

export default {
    getNewsGobAr
}