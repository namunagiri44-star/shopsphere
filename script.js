/* Splash Screen */
#splash {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #000; /* or image */
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 0.5s ease;
    z-index: 1000;
}

/* Start Screen */
#start-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
}

/* Modal */
#promoModal {
    display: none;
    position: fixed;
    top:0; left:0;
    width: 100%; height:100%;
    background: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
}

/* Home Page */
#home-page {
    display: none;
    padding: 20px;
}

/* Cart */
#cart-count {
    font-weight: bold;
    color: red;
}
