function Scooter(year, color, model){
    this.year=year;
    this.color=color;
    this.model=model;
}
const subaru=new Scooter("2017", "red", "mitsubishi")
console.log(subaru)
function Driver(name, age, experience){
    this.name=name;
    this.age=age;
    this.experience=experience;
}
const Bob=new Driver("Bob", "36", "Good")
console.log(Bob)
function PickupLocation(address, city){
    this.address=address;
    this.city=city;
}
const poshHotel=new PickupLocation("123 Broadway", "New York City")
console.log(poshHotel)