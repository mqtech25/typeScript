const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
// function for selection
function selectItem(e) {}

// Select item
tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

const searchBtn= document.getElementById('search-btn');
searchBtn.addEventListener('click',(event)=>{
  event.preventDefault();
const slidersec= document.getElementById('slider-sec');
// console.log(slidersec.scrollHeight);
window.scrollTo({
  top: slidersec.scrollHeight,
  left: 0,
  behavior: 'smooth'
});
})