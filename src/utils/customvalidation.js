export const checkTitle=(data)=>{

    if (data.length<5){
        return false;
    }

    return true;
}


export const checkDescription=(data)=>{

    if (data.length<5){
        return false;
    }

    return true;
}

export const checkTag=(data)=>{

    if (data.length<5){
        return false;
    }

    return true;
}