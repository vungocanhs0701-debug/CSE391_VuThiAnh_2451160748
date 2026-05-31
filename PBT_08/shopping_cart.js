function createCart() {

    // Private data
    let items = [];
    let discount = 0;
    let freeShip = 0;

    return {

        // Thêm sản phẩm
        addItem(product, quantity = 1) {

            const existing = items.find(
                item => item.id === product.id
            );

            if (existing) {
                existing.quantity += quantity;
            } else {
                items.push({
                    ...product,
                    quantity
                });
            }
        },

        // Xóa sản phẩm
        removeItem(productId) {
            items = items.filter(
                item => item.id !== productId
            );
        },

        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {

            const item = items.find(
                item => item.id === productId
            );

            if (item) {
                item.quantity = newQuantity;
            }
        },

        // Tính tổng tiền
        getTotal() {

            const subtotal = items.reduce(
                (sum, item) =>
                    sum + item.price * item.quantity,
                0
            );

            const discountAmount =
                subtotal * discount / 100;

            return subtotal - discountAmount - freeShip;
        },

        // Áp dụng mã giảm giá
        applyDiscount(code) {

            discount = 0;
            freeShip = 0;

            switch (code) {

                case "SALE10":
                    discount = 10;
                    break;

                case "SALE20":
                    discount = 20;
                    break;

                case "FREESHIP":
                    freeShip = 30000;
                    break;

                default:
                    console.log("Mã giảm giá không hợp lệ");
            }
        },

        // In giỏ hàng
        printCart() {

            console.log("\n=== SHOPPING CART ===");

            console.log(
                "STT | Sản phẩm | SL | Đơn giá | Thành tiền"
            );

            items.forEach((item, index) => {

                const total =
                    item.price * item.quantity;

                console.log(
                    `${index + 1} | ${item.name} | ${item.quantity} | ${item.price.toLocaleString()}đ | ${total.toLocaleString()}đ`
                );
            });

            console.log("--------------------------------");

            console.log(
                "Tổng cộng:",
                this.getTotal().toLocaleString() + "đ"
            );
        },

        // Tổng số lượng sản phẩm
        getItemCount() {

            return items.reduce(
                (sum, item) =>
                    sum + item.quantity,
                0
            );
        },

        // Xóa toàn bộ giỏ
        clearCart() {

            items = [];
            discount = 0;
            freeShip = 0;
        }
    };
}

// =====================
// TEST
// =====================

const cart = createCart();

cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

cart.addItem(
    {
        id: 3,
        name: "AirPods Pro",
        price: 6990000
    },
    2
);

cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

cart.printCart();

cart.applyDiscount("SALE10");

cart.printCart();

console.log(
    "\nSố SP:",
    cart.getItemCount()
);

cart.removeItem(3);

console.log(
    "Sau xóa:",
    cart.getItemCount()
);