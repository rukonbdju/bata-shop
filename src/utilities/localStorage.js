
const getItem=(key)=>{
    const item=window.localStorage.getItem(key);
    return item;
}

const setItem=(value)=>{
    const keyExist=getItem('bata');
    if(keyExist){
        window.localStorage.setItem("bata",JSON.stringify(value))
    }
    else{
        window.localStorage.setItem('bata',value)
    }
}

export{getItem,setItem};
