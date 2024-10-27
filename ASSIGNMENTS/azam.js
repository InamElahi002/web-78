function getweather() {
 
    let cityname=document.getElementById("tmp1").value;
    alert("hi")

    axios.get(`https://api.weatherapi.com/v1/current.json?key=5a5a152506ef4636a58130105241910&q=${cityname}&aqi=yes`)
  .then(function (response) {
    // handle success
    console.log(response);


  })

  .catch(function (error) {
    // handle error
    console.log(error);

  })

}