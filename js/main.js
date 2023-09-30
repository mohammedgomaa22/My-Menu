const linkPage = document.querySelectorAll(".links a");
// ------
const chosenBtn = document.querySelectorAll(".cart .chose_btn button");
// ------
const num = document.querySelector(".counter .num");
// ------
const deleteItem = document.querySelectorAll(".item button.bin");
// ------
const cartBtn = document.querySelector(".open_close_cart"),
    sidebar = document.querySelector(".cart");
// ------------------------------------

// Chose Page from links
const chosePage = () => {
    linkPage.forEach((link) => {
        link.addEventListener("click", () => {
            // Delete Class
            linkPage.forEach((lin) => { lin.classList.remove("active_link"); });
            // Add Class
            link.classList.add("active_link");
        })
    })
};
chosePage();

// ------------------------------------

// Chose Delivery Method
const deliveryMethod = () => {
    chosenBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Delete Class
            chosenBtn.forEach((bt) => { bt.classList.remove("active_chose"); });
            // Add Class
            btn.classList.add("active_chose");
        })
    })
};
deliveryMethod();

// ------------------------------------

// Plus & Minus Counter
const counter = () => {
    num.innerHTML = 1;
    document.addEventListener("click", (e) => {
        e.target.classList.contains("plus")
        ? num.innerHTML++ : null ;
        if (e.target.classList.contains("minus")) {
            num.innerHTML > 1 ? num.innerHTML-- : null;
        }
    });
};
counter();

// ------------------------------------

// Delete Items
const deleteItems = () => {
    deleteItem.forEach((del) => {
        del.addEventListener("click", () => {
            del.parentElement.parentElement.remove();
        })
    })
};
deleteItems();

// ------------------------------------

// Open Cart
    // ------------
    // open cart
    const openCart = () => {
        cartBtn.addEventListener("click", () => {
            if (sidebar.classList.contains("open_cart")) {
                sidebar.classList.remove("open_cart")
            } else {
                sidebar.classList.add("open_cart");
            }
        });
    };
    openCart();

