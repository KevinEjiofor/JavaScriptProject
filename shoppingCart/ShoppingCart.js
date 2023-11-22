function createRowElements(){
    return {
      shoppingCart: document.getElementsByTagName("tbody")[0],
      newRow: document.createElement("tr"),
      newItem: document.createElement("td"),
      itemPrice: document.createElement("td"),
      removeButton: document.createElement("button")
    }
  }
  function getUserInput(){
    item = document.getElementById("item");
    price = document.getElementById("price");
    return {
      item, price
    }
  }
  
  
  function addToCart(){
    let {item, price} =  getUserInput();
  
    if(item.value !== "" && price.value !== ""){
      let {newRow, shoppingCart, newItem, itemPrice, removeButton} = createRowElements();
      newItem.innerText = item.value;
      itemPrice.innerText = price.value;
  
      removeButton.innerText = "Remove";
      removeButton.onclick = function() {
        shoppingCart.removeChild(newRow);
      };
  
      newRow.appendChild(newItem);
      newRow.appendChild(itemPrice);
      newRow.appendChild(removeButton);
      shoppingCart.appendChild(newRow);
  
      item.value = "";
      price.value = "";

    
    }
  
  }
  
  function removeFromCart(){
    const shoppingCart = document.getElementsByTagName("tbody")[0];
    const rows = shoppingCart.getElementsByTagName("tr");
  
    if(rows.length > 0){
      shoppingCart.removeChild(rows[rows.length - 1]);
    }
  }

  function sum() {
    const shoppingCart = document.getElementsByTagName("tbody")[0];
    const rows = shoppingCart.getElementsByTagName("tr");
    let totalSum = 0;
  
    for (let i = 0; i < rows.length; i++) {
      const priceCell = rows[i].getElementsByTagName("td")[1]; 
      const priceValue = parseFloat(priceCell.innerText);
  
      if (!isNaN(priceValue)) {
        totalSum += priceValue;
      }
    }
  
    const totalSumDisplay = document.getElementById("totalSumDisplay");
    if (totalSumDisplay) {
      totalSumDisplay.innerText = "Total Sum: " + totalSum;
    } else {
      alert("Total Sum: " + totalSum);
    }
    
  }
  