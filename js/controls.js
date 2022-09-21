export default function Controls({
    body,
    buttonLightTheme,
    buttonDarkTheme,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFireplace
}) {
    function changeTheme() {
        buttonLightTheme.classList.toggle('hide')
        buttonDarkTheme.classList.toggle('hide')
        body.classList.toggle('dark-mode')
    }

    function soundForest() {
        cardForest.classList.toggle('active')
    }

    function soundRain() {
        cardRain.classList.toggle('active')
    }

    function soundCoffeeShop() {
        cardCoffeeShop.classList.toggle('active')
    }

    function soundFireplace() {
        cardFireplace.classList.toggle('active')
    }

    return {
        changeTheme,
        soundForest,
        soundRain,
        soundCoffeeShop,
        soundFireplace
    }
}