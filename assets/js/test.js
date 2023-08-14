function scrollTriggerHeterogenousAnimations(selector, options = {}) {
    let elements = document.querySelectorAll(selector)
    elements = Array.from(elements)
    for (let i = 0; i < elements.length; i++) {
        console.log(i);
        addObserver(elements[i], options, i);
    }
}

function scrollTriggerHomogenousAnimations(selector, options = {}) {
    let elements = document.querySelectorAll(selector)
    elements = Array.from(elements)
    for (let i = 0; i < elements.length; i++) {
        addObserver(elements[i], options, 0);
    }
}
// Receiving options passed from the scrollTrigger function
function addObserver(element, options, index) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animation_list[index])
                observer.unobserve(entry.target)
            }
        })
    }, options) // Passing the options object to the observer
    observer.observe(element)
}

let animation_list = document.currentScript.getAttribute('animation_list');
animation_list = animation_list.split(',')

console.log(animation_list.length);

let threshold = document.currentScript.getAttribute('threshold');

if (animation_list.length == 1) {
    scrollTriggerHomogenousAnimations('.scroll-reveal', {
        threshold: threshold
    });
}
else {
    scrollTriggerHeterogenousAnimations('.scroll-reveal', {
        threshold: threshold
    });
}