// Dados dos produtos (sem preços individuais)
const products = {
    cafe: [
        { id: 1, name: "Expresso", image: "https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 2, name: "Cappuccino", image: "https://images.unsplash.com/photo-1572097459836-9ba0b73bca31?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 3, name: "Café com Leite", image: "https://images.unsplash.com/photo-1676506129134-c8aef41eb4d3?q=80&w=2613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 4, name: "Mocha", image: "https://images.pexels.com/photos/1006297/pexels-photo-1006297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, name: "Macchiato", image: "https://images.pexels.com/photos/18424335/pexels-photo-18424335/free-photo-of-cafe-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    doce: [
        { id: 6, name: "Brigadeiro", image: "https://images.unsplash.com/photo-1694006756798-5ba959c998d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJyaWdhZGVpcm98ZW58MHx8MHx8fDA%3D" },
        { id: 7, name: "Brownie", image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 8, name: "Torta de Limão", image: "https://images.unsplash.com/photo-1666812663733-7a4e23369f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VG9ydGElMjBkZSUyMExpbSVDMyVBM298ZW58MHx8MHx8fDA%3D" },
        { id: 9, name: "Bolo de Chocolate", image: "https://plus.unsplash.com/premium_photo-1715015440855-48e019b6faa1?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 10, name: "Cheesecake", image: "https://images.unsplash.com/photo-1702920375096-5ae53044d11c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],
    salgado: [
        { id: 11, name: "Coxinha", image: "https://images.pexels.com/photos/17409458/pexels-photo-17409458/free-photo-of-lanche-petisco-aperitivo-frito.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 12, name: "Empada", image: "https://i.postimg.cc/J075RMgK/typical-brazilian-cuisine-appetizer-called-empada-de-camar-o.jpg" },
        { id: 13, name: "Pão de Queijo", image: "https://i.postimg.cc/d383Nynx/istockphoto-1460067733-612x612.jpg" },
        { id: 14, name: "Fogaça", image: "https://i.postimg.cc/jdDtjNz0/fogazza.jpg" },
        { id: 15, name: "Croissant", image: "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    lanche: [
        { id: 16, name: "Misto Quente", image: "https://i.postimg.cc/CLRnVR5d/istockphoto-1313740015-612x612.jpg" },
        { id: 17, name: "Sanduiche Americano", image: "https://i.postimg.cc/6qrW9xkj/istockphoto-930271208-612x612.jpg" },
        { id: 18, name: "HotDog", image: "https://i.postimg.cc/52NvjfxF/hot-dog-with-ketchup-and-yellow-mustard.jpg" },
        { id: 19, name: "Tapioca", image: "https://i.postimg.cc/h42QwH8D/istockphoto-1256543084-612x612.jpg" },
        { id: 20, name: "X-Salada", image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    suco: [
        { id: 21, name: "Suco de Laranja", image: "https://images.unsplash.com/photo-1601711802544-b6647f0aa6f8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 22, name: "Suco de Abacaxi", image: "https://images.pexels.com/photos/30839488/pexels-photo-30839488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 23, name: "Suco de Morango", image: "https://images.pexels.com/photos/8771960/pexels-photo-8771960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 24, name: "Suco de Limão", image: "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 25, name: "Suco de Maracujá", image: "https://i.postimg.cc/sDL7NtPF/istockphoto-1367433025-612x612.jpg" }
    ]
};

// Carrinho de compras
let cart = [];
const FIXED_PRICE = 25.00;

// Configuração do checkout externo
const EXTERNAL_CHECKOUT_URL = "https://pay.compraeegurapay.com/checkout/ae112b25-35c5-4304-ab16-4cd87eb3ee9c"; // ← SEU LINK AQUI

// Elementos do DOM
const loadingScreen = document.querySelector('.loading-screen');
const mainContent = document.querySelector('.main-content');
const productsContainer = document.getElementById('products-container');
const categoryButtons = document.querySelectorAll('.category-btn');
const floatingCart = document.getElementById('floating-cart');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const overlay = document.getElementById('overlay');

// Função para exibir produtos por categoria
function showProducts(category) {
    productsContainer.innerHTML = '';
    
    products[category].forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <button class="add-to-cart" data-id="${product.id}">Adicionar</button>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
    
    // Adiciona eventos aos botões de adicionar ao carrinho
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId, this);
        });
    });
}

// Função para adicionar item ao carrinho com animação
function addToCart(productId, button) {
    // Encontra o produto
    let product;
    for (const category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) break;
    }
    
    if (!product) return;
    
    // Verifica se o produto já está no carrinho
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            quantity: 1
        });
    }
    
    // Atualiza o carrinho
    updateCart();
    
    // Cria elemento para animação
    const flyItem = document.createElement('div');
    flyItem.className = 'fly-item';
    flyItem.innerHTML = '🛒';
    flyItem.style.top = button.getBoundingClientRect().top + 'px';
    flyItem.style.left = button.getBoundingClientRect().left + 'px';
    
    // Posição final (carrinho)
    const cartRect = floatingCart.getBoundingClientRect();
    const endX = cartRect.left - button.getBoundingClientRect().left + cartRect.width / 2;
    const endY = cartRect.top - button.getBoundingClientRect().top + cartRect.height / 2;
    
    flyItem.style.setProperty('--endX', endX + 'px');
    flyItem.style.setProperty('--endY', endY + 'px');
    
    document.body.appendChild(flyItem);
    
    // Remove o elemento após a animação
    setTimeout(() => {
        flyItem.remove();
    }, 800);
}

// Função para atualizar o carrinho
function updateCart() {
    // Atualiza contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Atualiza lista de itens
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
                <span class="remove-item" data-id="${item.id}">×</span>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
    
    // Sempre mostra o valor fixo
    cartTotal.textContent = FIXED_PRICE.toFixed(2);
    
    // Adiciona eventos aos botões de quantidade
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            decreaseQuantity(productId);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            increaseQuantity(productId);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeItem(productId);
        });
    });
}

// Funções para manipular quantidade
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCart();
    }
}

function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Event Listeners
categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        showProducts(this.getAttribute('data-category'));
    });
});

floatingCart.addEventListener('click', function() {
    cartModal.classList.add('open');
    overlay.classList.add('active');
});

closeCart.addEventListener('click', function() {
    cartModal.classList.remove('open');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', function() {
    cartModal.classList.remove('open');
    overlay.classList.remove('active');
});

checkoutBtn.addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio! Adicione itens antes de finalizar.');
        return;
    }
    
    // Redireciona para o checkout externo
    window.location.href = EXTERNAL_CHECKOUT_URL;
});

// Fluxo inicial
setTimeout(() => {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
    showProducts('cafe');
}, 2000);