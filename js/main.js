// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 31.040949, lng: 31.378469 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}


//Scroll Smoothing
$('.navbar a, .form__btn').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault()
        const hash = this.hash
        $('html,body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800)
    }
})

//Opacity
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('.navbar').style.opacity = .8
    } else {
        document.querySelector('.navbar').style.opacity = 1
    }
})