export const setLocalStorage = (key, value) => {
    try{
        const serializedState = JSON.stringify(value)
        localStorage.setItem(key, serializedState)
    }catch(error){
        console.log(error)
    }
  }
  
  
  export const loadLocalStorage = (key) => {
    try{
        const serializedState =  localStorage.getItem(key)
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch(e){
        console.log(e)
        return undefined
    }
}


