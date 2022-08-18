$(function () {
  //Can use slow and fast as a Value

  // Fade out red element over 5000ms
  $(".red-box").fadeOut(2000);

  // Fade out element over 3000ms
  $(".blue-box").fadeOut(3000);

  // Fade out element over 6000ms
  $(".green-box").fadeOut(4000);

  // Fade in element over 3000ms
  $(".red-box").fadeIn(5000);

  // // Fade in element over 3000ms
  // $(".blue-box").fadeIn(3000);

  // // Fade to element over 3000ms with 0.5 opacity
  // $(".blue-box").fadeTo(1000, 0.5);

  // Fade the  element over 3000ms as per the current element scenario
  $(".blue-box").fadeToggle(3000);
});
