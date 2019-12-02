const tabsSlider = document.querySelector('.tabs__items');
const promoSlider = document.querySelector('.promo__slider-wrapper');

function horizontalScrollInit(item) {

  let isDown = false;
  let startX;
  let scrollLeft;

  item.addEventListener('mousedown', (e) => {
    isDown = true;

    startX = e.pageX - item.offsetLeft;
    scrollLeft = item.scrollLeft;
  });

  item.addEventListener('mouseleave', () => {
    isDown = false;

  });

  item.addEventListener('mouseup', () => {
    isDown = false;
  });

  item.addEventListener('mousemove', (e) => {
    if (!isDown) {
      return;
    }
    e.preventDefault();
    const x = e.pageX - item.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    item.scrollLeft = scrollLeft - walk;
  });
}

horizontalScrollInit(promoSlider);
horizontalScrollInit(tabsSlider);
