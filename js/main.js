$(".slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/left.png' style='z-index: 999; left: 0;'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='../images/right.png'>",

  // arrows: true,
  // arrrosColor: purple,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
