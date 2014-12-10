function markForDeletion(array,index) {
  array[index] = undefined;
}

function deleteMarked(array) {
  var newIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      array[newIndex] = array[i];
      newIndex += 1;
    }
  }
  return array.slice(0,newIndex);
}
