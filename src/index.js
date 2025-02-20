import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const phrases = ["Nguyen Thanh Long", "Dadadadas111", "Fullstack Developer", "Freelancer"];
let currentPhrase = 0;
let currentIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function typeText() {
    const currentText = phrases[currentPhrase];
    if (currentIndex < currentText.length) {
        typewriterElement.textContent += currentText.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (currentIndex > 0) {
        typewriterElement.textContent = typewriterElement.textContent.slice(0, -1);
        currentIndex--;
        setTimeout(deleteText, 50);
    } else {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typeText, 500);
    }
}

typeText();
