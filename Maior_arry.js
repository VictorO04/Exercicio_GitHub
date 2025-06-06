
    function maiorDetres (a,b,c){
    let i = 0
    let lst = [a,b,c]
    let maior = lst[0]
    while (i < lst.length ){
        if(lst[i] > maior){
            maior = lst[i]
        }
        i++
    }
    return console.log(maior)
}

maiorDetres(2,73,1)
