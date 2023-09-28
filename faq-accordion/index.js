const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach(item => {
    let header = item.querySelector('header');
    let desc = item.querySelector('p');
    let icon = header.querySelector('img')
    header.addEventListener("click", () => {
        icon.classList.toggle('rotate');
        desc.classList.toggle('open');
        desc.style.height = desc.classList.contains("open") ? `${desc.scrollHeight + 15}px` : "0px";
    });
});    
