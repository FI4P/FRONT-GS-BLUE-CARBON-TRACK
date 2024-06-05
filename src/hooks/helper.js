const generateId = () => {  
    const id = Math.floor(Math.random(1) * 100000).toString()
    return id
}


export {
    generateId
}