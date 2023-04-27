

const myEach= (collection, callback)=>{
    if(typeof collection === 'object'){
        for(const key in collection){
            callback(collection[key])
        }
    }else {
        for(const item in collection){
            callback(item)
        }
    }
    return collection
}

const myMap = (collection, callback) =>{
    let newArr = []
    if(typeof collection === 'object'){
        for(const key in collection){
            newArr.push(callback(collection[key]))
        }
    }else{
        for(const item of collection){
            newArr.push(callback(item))
        }
    }
    return newArr
}


const myReduce = (collection, callback, acc)=>{
    let sum=0
    if(typeof collection === 'object'){
        for(const key in collection){
          if( acc === undefined){
            acc = Object.values(collection)[0]
            sum = sum - acc
          }
          sum = sum + collection[key]
        }
            
    }else{
        for(const item of collection){
            if(acc === undefined){
                acc = collection[0]
                sum = sum - acc
            }
            sum = sum + item
        }
        
    }
  

    return callback(acc, sum, collection)
}


const myFind = (collection, predicate) =>{
    let getValue
    if(typeof collection === 'object'){
        for(const key in collection){
          if( predicate(collection[key])){
            getValue = collection[key]
            break
          }
        }
    }else{
        for(const item in collection){
            if(predicate(item)){
                getValue = item
                break
            }
        }
    }
    return getValue
}

const myFilter =(collection, predicate)=>{
    let newArr = []
    if(typeof collection === 'object'){
        for(const key in collection){
            if(predicate(collection[key])){
                newArr.push(collection[key])
            }
        }
    }else{
        for(const item of collection){
            if(predicate(item)){
                newArr.push(item)
            }
        }
    }
    return newArr
}

const mySize = (collection)=>{
    let count = 0
    for(const item in collection){
        count +=1
    }
    return count
}

const myFirst = (array, firstN=1) =>{
   
    if (firstN === 1){
        return array[0]
    }else{
        return array.slice(0, firstN)
    }
   
}

const myLast = (array, lastN=1)=>{
    const len = array.length
    let newArr = []
    if(lastN ===1){
        return array[len-1]
    }else{
        let i = 1
        while(lastN >0){
          newArr.unshift(array[len-i])
            i++;
            lastN--
        }
        return newArr
    }
   
}


const myKeys = (object) =>{
    let newArr = []
    for(const key in object){
        newArr.push(key)
    }
    return newArr
}



const mySortBy = (collection, callback)=>{
    let newArr = []
    let largest = callback(collection.slice(-1))

    for(const item of collection){
        newArr.push(item)
    }
    let n = newArr.length
    let key, j
    for(let i=1;i<n;i++){
         key = newArr[i]
        j = i -1
        while(j>=0 && callback(newArr[j]) > callback(key)){
            newArr[j+1] = newArr[j]
            j = j-1          
        }
        newArr[j+1] = key
    }
    return newArr
}



const myValues = (object) =>{
    let newArr = []
    for(const key in object){
        newArr.push(object[key])
    }
    return newArr
}