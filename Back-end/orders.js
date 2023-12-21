export let orders=JSON.parse(localStorage.getItem("orders"));
if(!orders)
{
    orders=[]
}


export function saveOrdersToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
  }