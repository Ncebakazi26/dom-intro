function FruitEater(){
    
    var appleTotal = 0;
    var pearsTotal = 0;
    


    function eat(fruit){
       if(fruit==='apple'){
            appleTotal++;
        }
        if(fruit== 'pear'){
            pearsTotal++;
        }
    }
    function applesEaten(){
        return appleTotal;
    }
    function pearsEaten(){
        return pearsTotal;
    }
    return{
        eat,
        applesEaten,
        pearsEaten,

    }

}
