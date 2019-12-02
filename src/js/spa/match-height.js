function changeHeight() {
  $('.main-slider__slide').matchHeight(
    {
      byRow: true,
      property: 'height',
      target: null,
      remove: false,
    },
  );
}

changeHeight();

$.event.add(window, "resize", changeHeight);
