//arrows con parametros
//1
const aprendiendo2 = function(tecnologia, tecnologia2) {
    console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo2('js','node'); //aprendiendo js

//2
const aprendiendo3 = tecnologia => console.log(`aprendiendo ${tecnologia}`);
console.log(aprendiendo('js'));

const aprendiendo4 = (tecnologia, tecnologia2) => console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`);
console.log(aprendiendo('js'));