function each(array,callback){
    for ( let index = 0; index< array.length; index++){
        callback(array[index],index)
    }
}
const stringArray = ['1','cat','dog','2','3','4','5']
each(stringArray,function(element,index){
   console.log('element',element,'index',index)

});


//each(stringArray,listItems);
function listItems(items,index){
    console.log(items,index);

}


function map(array,callback){
    results = [];

    for (let index= 0; index< array.length; index++){
        results.push(callback(array[index],index))
    }
    return results;
}

let result = map(stringArray, function(element,index){
    return parseInt(element,10);
});
//console.log(result);


function filter(array,callback){
    const results = [];
    for (let index = 0; index < array.length; index++){
       if(callback(array[index],index)){
           results.push(array[index])
       }

    }
    return results;
}

result = filter(result,function(element){
    return !(isNaN (element));
});

//console.log(result);

function reject(array,callback){
    const results = [];
    for (let index = 0; index< array.length; index++){
        if (!callback(array[index],index)){
            results.push(array[index]);
            
        }
    }
    return results;
}

result = reject(result,function(element){
    return (isNaN (element));
});

//console.log(result)


function find(array,callback){

  for (let index = 0; index<array.length ; index++){
      if (callback(array[index],index))
      return index;  /// I swtiched it to index, to find the location of the value
  }

}
let found = find(result,function(item){
    return item === 3 ;   // question : how can we put a dynamic value ? instead of a number 
});
//console.log(found);

function reduce(array,callback,memo){
    results = [].concat(array);
    if (memo === undefined){
        memo = results.pop();
    }
    for (let index = 0; index < array.length; index ++ ){
        memo = callback(memo,array[index],index);
    }
    return memo;
}

//result = reduce(result,add)
function add(num1,num2,num3){
    return num1 + num2 + num3;
}

//console.log(result);

var _ = {
    map: function(array,callback){
        results = [];
    
        for (let index= 0; index< array.length; index++){
            results.push(callback(array[index],index))
        }
        return results;
    },
    reduce : function(array,callback,memo){
        results = [].concat(array);
        if (memo === undefined){
            memo = results.pop();
        }
        for (let index = 0; index < array.length; index ++ ){
            memo = callback(memo,array[index],index);
        }
        return memo;
    },
    filter : function(array,callback){
        const results = [];
        for (let index = 0; index < array.length; index++){
           if(callback(array[index],index)){
               results.push(array[index])
           }
    
        }
        return results;

    },
    reject :function(array,callback){
        const results = [];
        for (let index = 0; index< array.length; index++){
            if (!callback(array[index],index)){
                results.push(array[index]);
                
            }
        }
        return results;
    },

    find : function(array,callback){

        for (let index = 0; index<array.length ; index++){
            if (callback(array[index],index))
            return index;  /// I swtiched it to index, to find the location of the value
        }
      
      }

}

var odd = _.filter(['1','2','3','4','5'],function(num){return !(num %  2 === 0);});
console.log(odd);
var even = _.reject(['1','2','3','4','5'],function(num){return !(num % 2 === 0); });
console.log(even);
//let memo = 1;
var product = _.reduce(['1','2','3','4','5'],function(num1,num2){return num1*num2; },1);
console.log(product);