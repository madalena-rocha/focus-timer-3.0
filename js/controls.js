export default function Controls({
    body,
    buttonLightTheme,
    buttonDarkTheme,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
}) {
    function changeTheme() {
        buttonLightTheme.classList.toggle('hide')
        buttonDarkTheme.classList.toggle('hide')
        body.classList.toggle('dark-mode')
    }

    function soundForest() {
        buttonSoundForest.classList.contains('active') 
        ? buttonSoundForest.classList.remove('active')
        : buttonSoundForest.classList.add('active')
    }

    function soundRain() {
        buttonSoundRain.classList.contains('active') 
        ? buttonSoundRain.classList.remove('active')
        : buttonSoundRain.classList.add('active')
    }

    function soundCoffeeShop() {
        buttonSoundCoffeeShop.classList.contains('active') 
        ? buttonSoundCoffeeShop.classList.remove('active')
        : buttonSoundCoffeeShop.classList.add('active')
    }

    function soundFireplace() {
        buttonSoundFireplace.classList.contains('active') 
        ? buttonSoundFireplace.classList.remove('active')
        : buttonSoundFireplace.classList.add('active')
    }

    return {
        changeTheme,
        soundForest,
        soundRain,
        soundCoffeeShop,
        soundFireplace
    }
}