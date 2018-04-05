import './css/main.css';
import './scss/main.scss';

import * as outils from './js/module'; // importe TOUT les modules exportés
//import capLettre from './js/module';

import moment from 'moment';
import 'moment/locale/fr';

import Meteo from './js/meteoclassinfoshandlebars';





//----------------------------DATE----------------
var datedujour = document.querySelector('.date');
var maintenant = moment();

function dateDuJour() {
    console.log("Date du jour : "+maintenant.format('LLLL'));
    datedujour.innerHTML = maintenant.format('LLLL');
    datedujour.innerHTML = outils.capLettre(maintenant.format('LLLL'));
}

//-------------------------------------------------


// -----CLASS MÉTÉO

function meteoDuJour() {
    
    const infosMeteo = {
    "villeID":"6325494",
    "units":"metric",
    "maLangue":"fr"
    };

    //const maMeteo = new Meteo('Quebec');
    const maMeteo = new Meteo(infosMeteo);
    console.log(maMeteo.getMeteoInformations());
    
};

//--------------------------Appels----------------
$(document).ready(function() {
                  
    dateDuJour();
    meteoDuJour();
                  
});