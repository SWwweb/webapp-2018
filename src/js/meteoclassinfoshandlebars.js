// MÉTHODE MODULE CLASS

//templating
import Handlebars from 'handlebars';
import {capLettre} from './module';

class Meteo {

  constructor(infos) {
    this.infos = infos;
    console.log("infos : " + this.infos.villeID);
      
  }

  getMeteoInformations(infos) {
      const _infos = this.infos; //variable privée
      var maClef = "0c98af945c8169d1e0fb538cd4ff153f";
      var maRequete = 'http://api.openweathermap.org/data/2.5/weather?id='+this.infos.villeID+'&units='+this.infos.units+'&APPID='+maClef+'&lang='+this.infos.maLangue;
    
    // ----------------------- OPENWEATHERMAP -----------------------
    $.ajax({
          'url': maRequete,
          'type': 'GET',
          'format': 'json',
          'cache': 'false', 
          'dataType': 'json'
                                                                                                                           
    }).done(function (data, textStatus, jqXHR) {

       // DONNÉES DE LA JOURNÉE.
      console.dir(data);
        
//    import capLettre from './js/module';
        
      //
      const tendanceMain = data.weather[0].main;
      const tendance = data.weather[0].description;
      const tendanceMaj = capLettre(tendance);
      const ville = data.name;
      const temperature = data.main.temp;
      const humidite = data.main.humidity;
        

      // CONSOLE

      console.log("Ville : " + data.name);
      console.log("Température : " + data.main.temp + "ºC");
      console.log("Humidité : " + humidite + "%");
      console.log("Tendance : " + tendance);
      console.log("Main : " + data.weather[0].main);
        
      
      
      // images météo
    let imgsource = "";
        const chemin = "images/";
      
        switch (tendanceMain) {
            case "Rain":
                imgsource = chemin + "rain.svg";
                break;
            case "Clear":
                imgsource = chemin + "sunny.svg";
                break;
            case "Clouds":
                imgsource = chemin + "cloudy.svg";
                break;
            case "Snow":
                imgsource = chemin + "snow.svg";
                break;
            default:
                imgsource = chemin + "variable.svg";
         }
        
              console.log("-----tendance"+tendance);
        
        // code js handlebars

      const source = $('#handlebars-meteo').html();
      
      const template = Handlebars.compile(source);
        
      const unite = _infos.units == "metric" ? "°C" : "°F";
        
        
      const context = { "ville": data.name, "temperature": data.main.temp + unite, "humidite": data.main.humidity + "%", "tendance": tendanceMaj, "imagemeteo": imgsource };
        
      
      const result = template(context);
      
      $(".jumbotron").html(result);
        
        
    })
      
    .fail(function (jqXHR, textStatus, errorThrown) {
        window.console.log('errorThrown : ' + textStatus);
    })
      
    .always(function (jqXHR, textStatus) {
      console.log('Fin de l\'exécution.');
    });
  
    
    return "****** getMeteoInformations() OK. Affichage avec Handlebars.";
  }
}

export default Meteo
