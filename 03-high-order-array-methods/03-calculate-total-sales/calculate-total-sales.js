function calculateTotalSalesWithTax(products, taxes) {
    const totalProducts = products.reduce((sum,product) => sum + (product.price * product.quantity),0);
    const totalTaxes = (totalProducts*taxes)/100;
    const totalAmount = (totalProducts + totalTaxes);
    return parseFloat(totalAmount.toFixed(2));
    
}

module.exports = calculateTotalSalesWithTax;
