
const axios = require('axios');

const getClima = async (lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=903a5c34b1ff27d14127cffe2301b663`);

    if (resp.code === "400") {
        throw new Error('Debe ingresar latitud y longitud correctas');
    }

    return  resp.data.main.temp;

}

module.exports = {
    getClima
}