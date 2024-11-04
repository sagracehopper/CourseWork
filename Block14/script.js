const myInstruments = ["flute", "clarinet", "saxophon", "trumpet", "trombone"];

console.table(myInstruments);

myInstruments.unshift("saxophone");

console.table(myInstruments);

myInstruments.splice(3,1);

console.table(myInstruments);

myInstruments.push("tuba", "Bassoon");

console.table(myInstruments);

console.log(getFirstInstruments[myInstruments]);
console.log(getLastInstrument(myInstruments));

console.table(getFirstandLastInstrument)(myInstruments);

function getFirstInstrument(Instruments){
    return instruments[0];
}

function getLastInstrument(instruments){
    return instruments.length - 1
}


function getFirstAndLastInstruments(instruments){
    let firstInstrument = getFirstInstrument();
    let lastInstrument = getLastInstrument(instruments);

    const newArray = [firstInstrument, lastInstrument]
    return newArray;

}

funtion getTinstruments(instruments){
   const tInstruments = []
    for (let index = 0; index < instruments.length; index++) {
        let currentinstruments = instrument[index]

        if(){
            tinstruments{index}
        }
        
    }
    return tInstruments;
}