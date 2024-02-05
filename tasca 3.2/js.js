let array = [1,2,2,3,4,4];
let duplicado = false;
let dupli = 0;
for(let i = 0 ; i < array.length ; i++){
    duplicado = false;
    for(let j = i + 1 ; j < array.length ; j++){
        if(array[i] === array[j]){
            duplicado = true;
            dupli = array[i];
        }
    }
    if(duplicado){
        for(let j = 0; j < array.length ; j++){
            if(array[j] == dupli){
                array.filter(j);
            }
        }
    }
}
for(let i = 0; i < array.length ; i++){
    console.log(array[i]);
}