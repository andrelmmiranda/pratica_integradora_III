// Fiz com apenas 20 campos preenchidos, pois preencher 365 campo seria demasiadamente cansativo e a solução produzida atende aos propósitos solicitados, funcionando com mais ou menos objetos inseridos em 'arrayDados'

class metInfo{
    constructor(diaMes, tempMax, tempMin, choveu){
        this.diaMes = diaMes;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
        this.choveu = choveu;
    }
}

const metInfoBuilder = (diaMes, tempMax, tempMin, choveu)=> new metInfo(diaMes, tempMax, tempMin, choveu);

const arrayDados = [
    metInfoBuilder('01/01', 32, 27, false),
    metInfoBuilder('02/01', 32, 24, true),
    metInfoBuilder('03/01', 30, 23, true),
    metInfoBuilder('04/01', 28, 22, true),
    metInfoBuilder('05/01', 27, 24, true),
    metInfoBuilder('06/01', 27, 24, false),
    metInfoBuilder('07/01', 28, 27, false),
    metInfoBuilder('08/01', 28, 24, false),
    metInfoBuilder('09/01', 31, 25, false),
    metInfoBuilder('10/01', 32, 27, false),
    metInfoBuilder('11/01', 34, 26, false),
    metInfoBuilder('12/01', 32, 27, false),
    metInfoBuilder('13/01', 31, 25, false),
    metInfoBuilder('14/01', 32, 24, false),
    metInfoBuilder('15/01', 32, 27, false),
    metInfoBuilder('16/01', 30, 27, false),
    metInfoBuilder('17/01', 27, 21, true),
    metInfoBuilder('18/01', 27, 19, true),
    metInfoBuilder('19/01', 28, 21, true),
    metInfoBuilder('20/01', 26, 22, true)
];


const arrayTempMax = (arrayDados)=> arrayDados.map(temp => temp.tempMax);

const arrayTempMin = (arrayDados)=> arrayDados.map(temp => temp.tempMin);

const sortTemp = (arrayDados)=> arrayDados.sort((a, b)=> a - b);

const tempMax = (arrayDados)=> arrayTempMax(arrayDados).reduce((acc, el)=> el + acc);

const tempMin = (arrayDados)=> arrayTempMin(arrayDados).reduce((acc, el)=> el + acc);

const mediaTemp = (totalTemp)=> totalTemp / arrayDados.length;

const choveu = (arrayDados)=> arrayDados.filter(choveu => choveu.choveu === true).length;

const montaArray = (arrayDados)=>{
    const array = new Array(arrayDados.length);

    for(let data in arrayDados){
        array[data] = arrayDados[data];
    }
    return array;
}

const output = (sortTempMax, SortTempMin, mediaTempMax, mediaTempMin, diasDeChuva)=>{
    console.log(
`
Temp Máxima ordenadas: ${sortTempMax}
Temp Mínima ordenadas: ${SortTempMin}
Média Temp Máxima: ${mediaTempMax}°
Média Temp Mínima: ${mediaTempMin}°
Qtde dias com chuva: ${diasDeChuva} ${diasDeChuva === 0 ? '': diasDeChuva === 1 ? 'dia':'dias'}
`
)
}

const main = (arrayDados)=>{
    const array = montaArray(arrayDados);

    output(sortTemp(arrayTempMax(array)), sortTemp(arrayTempMin(array)), mediaTemp(tempMax(array)), mediaTemp(tempMin(array)), choveu(array));
}

main(arrayDados);