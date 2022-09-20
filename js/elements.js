const body = document.querySelector('body')
const buttonLightTheme = document.querySelector('.light-theme')
const buttonDarkTheme = document.querySelector('.dark-theme')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const buttonSoundForest = document.querySelector('.sound-forest')
const buttonSoundRain = document.querySelector('.sound-rain')
const buttonSoundCoffeeShop = document.querySelector('.sound-coffee-shop')
const buttonSoundFireplace = document.querySelector('.sound-fireplace')

const inputForestVolume = document.querySelector('#forest-volume')
const inputRainVolume = document.querySelector('#rain-volume')
const inputCoffeeShopVolume = document.querySelector('#coffee-shop-volume')
const inputFireplaceVolume = document.querySelector('#fireplace-volume')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

export {
    body,
    buttonLightTheme,
    buttonDarkTheme,
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace,
    inputForestVolume,
    inputRainVolume,
    inputCoffeeShopVolume,
    inputFireplaceVolume,
    minutesDisplay,
    secondsDisplay
}