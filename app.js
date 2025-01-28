
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }


// task 1
//   Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30, Masyvo elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai. Rasti geriausiai besimokantį ir blogiausiai.
console.log(`task 1 ---------`);
let pazymiai = [];

for (let i = 0; i < 30; i++){
    pazymiai.push(rand(1, 10));
}

console.log(pazymiai);

let didziausias = Math.max(...pazymiai);
console.log(`max:${didziausias}`);

let maziausias = Math.min(...pazymiai);
console.log(`min:${maziausias}`);

// task 2
// Studento trimestro disciplinų skaičius yra 7, kiekvienoje disciplinoje min 3 pažymiai. Rasti studento semestro vidurkį.
// Paprastesnis variantas susikuriam masyvą rankiniu būdu
// Sudėtingesnis variantas susigeneruojam masyvą iš random pažymių nuo 1 iki 10, pažymių kiekis irgi random nuo 3 iki 6
console.log(`task 2 ---------`);

let disciplinos = 7;
let pazymiu_disciplinoje = 3;

let visi_pazymiai = [];

for (let n = 0; n < disciplinos; n++){
    console.log(`didysis ratas: ${n}`);
    let dalyko_pazymiai = [];


    for (let i = 0; i < rand(3, 6); i++){
        console.log(`mazasis ratas: ${i} `)
        dalyko_pazymiai[i] = rand(1, 10)   
    }
    visi_pazymiai.push(dalyko_pazymiai)
    }

console.log(visi_pazymiai);


let pazymiuKiekis = 0;
let pazymiuSuma = 0;

for(let i = 0; i < 7; i++){
    for(let j = 0; j < visi_pazymiai[i].length; j++){
        pazymiuKiekis++;
        pazymiuSuma += visi_pazymiai[i][j];
    }
}

console.log(pazymiuKiekis);
console.log(pazymiuSuma);
let vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(`pazymiu vidurkis: ${Math.ceil(vidurkis)}`);



// task 3
// 3. Darbuotojų atlyginimai suvesti į masyvą. Rasti kiek žmonių gauna < nei 800 Eurų., < nei 1100Eurų. ir < nei 1500 eurų. Iš tų trijų grupių surasti, kurių yra daugiausia?
// Paprastesnis variantas susikuriam masyvą rankiniu būdu su minimum 10 elementų
// Sudėtingesnis variantas susigeneruojam masyvą iš random skaičių nuo 500 iki 2000, elementų gali būti 100 (arba kiek norisi)
console.log(`task 3---------`);


let atlyginimai = [];
let maziau_800_array = [];
let maziau_1100_array = [];
let maziau_1500_array = [];
let virs_1500_array = [];



for (let i = 0; i < 10; i++){
    atlyginimai.push(rand(500, 2000));
}

for (let n = 0; n < atlyginimai.length; n++){
    if (atlyginimai[n] < 800){
         maziau_800_array.push(atlyginimai[n]);
    } else if(atlyginimai[n] >= 800 && atlyginimai[n] < 1100 ){
        maziau_1100_array.push(atlyginimai[n]);
    } else if(atlyginimai[n] >= 1100 && atlyginimai[n] < 1500 ){
        maziau_1500_array.push(atlyginimai[n]);
    } else {
        virs_1500_array.push(atlyginimai[n]);
    }

}
console.log(atlyginimai);
console.log(maziau_800_array);
console.log(maziau_1100_array);
console.log(maziau_1500_array);
console.log(virs_1500_array);

console.log(`Maziau nei 800 gauna zmoniu:${maziau_800_array.length}`);
console.log(`Nuo 800 iki 1100 gauna zmoniu ${maziau_1100_array.length}`);
console.log(`Nuo 1100 iki 1500 gauna zmoniu: ${maziau_1500_array.length}`);
console.log(`Daugiau nei 1500 gauna zmoniu: ${virs_1500_array.length}`);

// task 4
// 4. Parašyti f-ją kuri sudvigubintu masyvą 
// @example ['Ace', 10, true] => ['Ace', 10, true, 'Ace', 10, true] 
// [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
console.log(`task 4 ---------`);


let test_array = [0, 1, 2, 3, 4, 5];
let result_array = [];

function duplicate_array (original_array){
    return result_array = original_array.concat(original_array);

}
duplicate_array(test_array);

console.log(result_array);


// task 5
// 5. Parašyti funkciją, kuri stringų masyvo elementus transformuoja į didžiasias raides.
// @example
// [ 'internship', 'glutinous-shriek', 'elevation' ] => [ 'INTERNSHIP', 'GLUTINOUS-SHRIEK', 'ELEVATION' ],
// [ 'a', 'b', 'c', 'd', 'e' ] => [ 'A', 'B', 'C', 'D', 'E' ]
console.log(`task 5 ---------`);


let test_array_1 = [ 'internship', 'glutinous-shriek', 'elevation' ];
let test_array_2 = [ 'a', 'b', 'c', 'd', 'e' ];



function to_upper_case(original_array){
    let  changed_array = [];
    let changed_word = '';
    for (let i = 0; i < original_array.length; i++){
       changed_word = original_array[i].toUpperCase();
        changed_array.push(changed_word);
    }
    return changed_array;
}

console.log(to_upper_case(test_array_1));
console.log(to_upper_case(test_array_2));




// task 6
// 6. Parašyti f-ją, kuri, gražintų masyvą su kito masyvo string ilgiais
// @example
// [ '', 'a', 'bc', 'def', 'ghij' ] => [ 0, 1, 2, 3, 4 ]
// [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
console.log(`task 6 ---------`);


 let test_array_3 = [ '', 'a', 'bc', 'def', 'ghij' ];
 let test_array_4 = [ 'angular', 'react', 'ember' ];

//  string_length_array.push(test_array_3.forEach((item) => item.length));

 function length_array(original_array){
    let string_length = 0;
    let string_length_array = [];

    string_length = original_array.map(item => item.length);
    string_length_array.push(string_length);
    return string_length_array;
    
 }

 console.log(length_array(test_array_3));
 console.log(length_array(test_array_4));
