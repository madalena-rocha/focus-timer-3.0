import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
    body,
    buttonLightTheme,
    buttonDarkTheme,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

const controls = Controls({
    body,
    buttonLightTheme,
    buttonDarkTheme,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay
})

const sound = Sound()

Events({controls, timer, sound})