import API_KEY_COR from '../config_keys_cortes'


export async function getCortesGobAr(){
    const api_key = API_KEY_COR;
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://apitransporte.buenosaires.gob.ar/transito/v1/cortes?client_id=${api_key}&client_secret=d9d4Ca0e1Ef24cB4A87A84aeBb287660`);
    const responseJson = await response.json();
    return responseJson
}

export default {
    getCortesGobAr
}