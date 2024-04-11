function calcularNotas(){
    const n1 = 7;
    const n2 =5 ;
    const n3 = 8;
    const n4 = 10;
    const nFaltas =20 
    

    const calcularMedia = (n1 + n2 + n3 +n4)/2; 
    console.log(`a media do aluno é de ${calcularMedia} pts`)
    
    if(calcularMedia >= 15 || nFaltas){
        console.log('aprovado')
    }else if(){
        console.log('reprovado')
    }
}

console.log(calcularNotas())
