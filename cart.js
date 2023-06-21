const data = localStorage.getItem('cartItems')
const products = JSON.parse(data)

const container = document.querySelector('.container')
const parentList = document.createElement('div')
        parentList.classList.add('parentList')
products.forEach((product)=>{
    const item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = `
        <div><img src="${product.image}"/></div>
        <h1>${product.title}</h1>
        <p>ksh=${product.price}</p>
        <button class="deleteBtn">Delete</button>
    `   
    const deleteBtn = item.querySelector('.deleteBtn')
    deleteBtn.addEventListener('click', (e)=>{})
    
   
    container.appendChild(item)
})