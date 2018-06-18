function findElement(arraySearch, elementSearch) {
  const result = arraySearch.find(element => {
    if (element._id === elementSearch) {
      return true;
    }
    return false;
  });
  return result;
}
module.exports = findElement;
