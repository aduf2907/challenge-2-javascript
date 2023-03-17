function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  result.sort((cars1, cars2) => cars1.year - cars2.year);

  // Rubah code ini dengan array hasil sorting secara ascending
  console.log(result);
  return result;
}
