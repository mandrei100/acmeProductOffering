const PRODUCTS_URL = 'https://acme-users-api-rev.herokuapp.com/api/products';
const COMPANIES_URL = 'https://acme-users-api-rev.herokuapp.com/api/companies';
const OFFERINGS_URL = 'https://acme-users-api-rev.herokuapp.com/api/Offerings';
const array = [];

Promise.all([fetch(PRODUCTS_URL),fetch(COMPANIES_URL),fetch(OFFERINGS_URL)])
.then(response => Promise.all(response.map(r=> r.json())))
.then(data => {
    const products = data[0];
    const company = data[1];
    const offering = data[2];
    
    array.push(products, company, offering);
    console.log(array);
const productsArray = products.map( data =>`
<div class='productName>
    <div><a href="#${data.id}">${data.name}</a></div>
    <div>${data.description}</div>
    <div></div>
    </div>`
).join('');

document.querySelector('#container').innerHTML = productsArray;
//document.querySelector('#lower').innerHTML = companyArray;
//document.querySelector('#container').innerHTML = productsArray;
console.log(userArray);
})
.catch(e => console.log(e));



// const afunc = async() => {
//     const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/products')
//     const json = await response.json()

//     const usersList = json

//     const userArray = usersList.map( data =>`
//         <div class='productName>
//         <div><a href="#${data.id}">${data.name}</a></div>
//         <div>${data.description}</div>
//         <ul>
//         <li>Offered by: $${data.suggestedPrice}</li>
//         <li>Offered by: $${processOfferings(array[0])}</li>

//         </ul>
//         </div>`
//     ).join('');
//     document.querySelector('#container').innerHTML = userArray;
// }
// afunc()