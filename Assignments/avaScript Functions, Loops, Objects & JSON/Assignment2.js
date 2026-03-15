function Invoice(gstRate = 0.18, ...items) {
    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.name === "STOP") {
            break;
        }

        // Ignore invalid items
        if (!item.price || !item.qty || item.price <= 0 || item.qty <= 0) {
            continue;
        }

        // Add valid item total
        subtotal += item.price  *item.qty;
    }

    const gst = subtotal * gstRate;
    const total = subtotal + gst;

    return {
        subtotal,
        gst,
        total
    };
}

const result = Invoice(
    0.18,
    { name: "Pen", price: 10, qty: 3 },
    { name: "Notebook", price: 50, qty: 2 },
    { name: "Invalid", price: -5, qty: 1 }, 
    { name: "STOP", price: 100, qty: 1 },   
    { name: "Pencil", price: 5, qty: 10 } 
);

console.log(result);