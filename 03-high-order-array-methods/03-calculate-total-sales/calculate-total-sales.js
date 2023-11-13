function calculateTotalSalesWithTax(products, tax) {
    const price = products.reduce((acc, product) => acc +  product.price * product.quantity,0)
    const totalPrice = price * tax / 100 + price 
    return totalPrice;
}

module.exports = calculateTotalSalesWithTax;
