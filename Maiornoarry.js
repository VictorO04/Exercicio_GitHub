function maiorNumeronoarry (arry){
    let i = 0
    let list = arry
    let maior = list[0]
    while (i < list.length){
        if (list[i] > maior){
            maior = list[i]
        }
        i++
    }
    return console.log(maior)
}
maiorNumeronoarry([0,23,12,4,321,234,2000])

