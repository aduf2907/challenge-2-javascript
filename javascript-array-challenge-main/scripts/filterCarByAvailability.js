function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  cars.map(data => {
    if (data.available === true){
      result.push(data)
    }
  });
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  
  console.log(result);
  return result;
}
