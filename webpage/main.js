
        $(document).ready(function () {
          $(".blog__slide-wrapper").slick({
            customPaging: function(slider, i) {
                return '<button class="slick-number">' + (i + 1) + "</button>";
              },
            dots: true,
            infinite: false,
            adaptiveHeight: true,
            arrows: false,
          });
          $(".blog__media").slick({
            dots: false,
            adaptiveHeight: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,
            pauseOnHover: false,
            pauseOnFocus: false,
            cssEase: "linear",
            variableWidth: false,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: "50px",
            easing: "linear",
            useTransform: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: false,
                  slidesToShow: 1,
                },
              },
            ],
          });
        });

        function menuOnClick() {
          document.getElementById("menu-bar").classList.toggle("change");
          document.getElementById("nav").classList.toggle("change");
          document.getElementById("menu-bg").classList.toggle("change-bg");
        }