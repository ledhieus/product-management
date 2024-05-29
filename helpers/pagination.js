module.exports = (objectPagination,query,countProducts) => {
    if(query.page){
        objectPagination.currentPage = parseInt(query.page)
    }
    objectPagination.skip = (objectPagination.currentPage - 1)*objectPagination.limitIteam
    
    const totalPage = Math.ceil(countProducts/objectPagination.limitIteam);
    objectPagination.totalPage = totalPage
    return objectPagination
}