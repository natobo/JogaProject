function sumarDias(fecha, dias) {
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

function removeItemFromArr(arr, item) {
  const i = arr.indexOf(item);

  if (i !== -1) {
    arr.splice(i, 1);
  }
}

module.exports = {
  sumarDias,
  removeItemFromArr,
};
