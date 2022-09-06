let cars = [{ car_Name: "Maruthi Swift", price: 800000, color: "White" },
{ car_Name: "Maruthi Swift", brand: "Suzuki", price: 800000, color: "White" },
{ car_Name: "x1", brand: "BMW", price: 4000000, color: "black" },
{ car_Name: "Nexon", brand: "Tata", price: 1500000, color: "White" },
{ car_Name: "scroprio", brand: "Mahindra", price: 1800000, color: "black" },
{ car_Name: "Maruthi Swift", brand: "Suzuki", price: 800000, color: "red" },
{ car_Name: "No Name", brand: "Ferrai", price: 20000000, color: "pink" }]

for (car of cars) {
    if (car.color == "pink") {
        console.log(car)
    }
}