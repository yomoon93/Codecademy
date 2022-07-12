import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
// we created a switch statement in the function
function getMaxPrice(price:PriceBracket){
  switch(price){
    case PriceBracket.Low:
      return 10.0
    case PriceBracket.Medium:
      return 20.0
    case PriceBracket.High:
      return 30.0
  }
}

/// Add your getOrders() function below:
// this function is using two things
// one is PriceBracket that has a enum and in it three things
// Low, Medium, and High
//Next we want to go through orders, its a 2 dimensional
// when we exported it was 2 dimensional so it stays like that with the code 

function getOrders(price:PriceBracket, orders:Order[][]){
    // we create a variable that has the same setup as Order but as a empty array
  let filteredOrders: Order[][] = [] 
  // we use forEach to go through the orders
  orders.forEach((order)=>
  // we start from the first position which is 0
  //and we filter throught the order that is using the setup of Order
  // we are trying to filter the price according to the getMaxPrice function we created
  //we take the order and see if its less than or equal to getMaxPrice
    orders[0].filter((order: Order)=> order.price <= getMaxPrice(price));
//we take orders and use forEach to go through the restaurant and take the Order 
    orders.forEach((restaurant: Order[]) => {
// we save the result and chain filter which we created in the forEach
// we take order again and we take the price to see if its less than or equal to getMaxPrice
      const result = restaurant.filter((order: Order)=> order.price <= getMaxPrice(price))
//we take the array we created and we push the new information into it 
      filteredOrders.push(result);
    })
    //just return the filtered info after
    return filteredOrders;
}




/// Add your printOrders() function below:
//created a printOrders that takes restaurants and orders
function printOrders(restaurants:Restaurant[], orders:Order[][]){
    //for each restaurant we want to see orders that are more than 0
    // we take the index also for this part
    restaurants.forEach((restaurant:Restaurant, index:number)=>{
        if(orders[index].length > 0){
        console.log(restaurant.name)
//the orders plus the index will give us the info we need
        orders[index].forEach((order)=>{
          console.log(` - ${order.name}: ${order.price}`)
        })
      }
  
    })
  }
  
  
  
  


/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
console.log(elligibleOrders);
  printOrders(restaurants, elligibleOrders);


