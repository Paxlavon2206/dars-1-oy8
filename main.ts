



let obj: {
    id: number,
    name: string,
    username: string,
    email: string,
    address:{
        street:string,
        suite: string,
        city: string,
        zipcode: number,
        geo: {
          lat: boolean,
          lng: string,  
        },
    }
} = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: 929983874,
    geo: {
      lat: true,
      lng: "81.1496",
    },
  },
};

function x (user: object){
 let a =  obj.email
return a
}

x(obj)

console.log(x(obj));
