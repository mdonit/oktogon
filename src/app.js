/*
File: app.js
Author: Maráki Donát
Copyright: 2022, Maráki Donát
Group: Szoft I E 1/3
Date: 2022-04-02
Github: https://github.com/mdonit
Licenc: GNU GPL
*/

const oktogonOldalMezo = document.getElementById('oktogonOldal');
const oktogonTeruletMezo = document.getElementById('oktogonTerulet');
const szamitasGomb = document.getElementById('szamitas');

szamitasGomb.addEventListener('click', () => {
    let oldal = Number(oktogonOldalMezo.value);

    if (isNaN(oldal))
    {
        oktogonTeruletMezo.value = 'Számot adjon meg!';
    }

    else
    {
        if (oldal <= 0)
        {
            oktogonTeruletMezo.value = '0-nál nagyobb számot adjon meg!';
        }
        else
        {
            let terulet = 2 * (1 + Math.sqrt(2)) * Math.pow(oldal, 2);
        
            oktogonTeruletMezo.value = terulet.toFixed(2);
        }
    }
});