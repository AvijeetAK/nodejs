// transforming a particular element in an array

const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

console.log(fruits.map(fruit => {

    if(fruit == ' ')
    {
        return 'empty string'
    }
    else{
        return fruit;
    }

}
       
     ));


     console.log(fruits);
