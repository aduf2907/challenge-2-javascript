function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  result.sort(function(cars1, cars2){
    return cars2.year - cars1.year;
  });
  
  // Rubah code ini dengan array hasil sorting secara descending
  console.log(result);
  return result;
}
