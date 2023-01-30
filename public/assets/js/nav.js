const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class="nav">
            <img src="./public/assets/images/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search Product, Brand">
                    <button class="search-button">Search</button>
                </div>
                <a href="#"><img src="/public/assets/images/user.png" alt=""></a>
                <a href="#"><img src="/public/assets/images/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#">home</a></li>
            <li class="link-item"><a href="#">women</a></li>
            <li class="link-item"><a href="#">man</a></li>
            <li class="link-item"><a href="#">kids</a></li>
            <li class="link-item"><a href="#">accessories</a></li>
        </ul>
    `;
};

createNav();