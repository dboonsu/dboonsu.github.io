function scrollTrigger(selector, options = {}) {
    let elements = document.querySelectorAll(selector)
    elements = Array.from(elements)
    elements.forEach(element => {
        addObserver(element, options)
    })
}
// Receiving options passed from the scrollTrigger function
function addObserver(element, options) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
                observer.unobserve(entry.target)
            }
        })
    }, options) // Passing the options object to the observer
    observer.observe(element)
}

scrollTrigger('.scroll-reveal', {
    rootMargin: '-150px'
});