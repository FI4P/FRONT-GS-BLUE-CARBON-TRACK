const generateId = () => {  
    const id = Math.floor(Math.random(1) * 100000).toString()
    return id
}


const formatResponse = (responseObject) => {
    const response = Object.keys(responseObject).map(key => ({
        ...responseObject[key]
    }))

    return response
}

export {
    generateId,
    formatResponse
}