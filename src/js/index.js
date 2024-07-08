$('.financing__swiper').slick({
    rows: 2,
    slidesPerRow: 3,
    prevArrow: '.financing__button-prev',
    nextArrow: '.financing__button-next',
    infinite: false,
    responsive: [
        {
            breakpoint: 885,
            settings: {
                slidesPerRow: 1,
                rows: 1
            }
        },
        {
            breakpoint: 1312,
            settings: {
                slidesPerRow: 2,
                rows: 1
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesPerRow: 3,
                rows: 2
            }
        }
    ]
});
// ////////////////////////////////////////////////////////////////////////////////////
document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('open');
})