// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

const boxes = document.querySelectorAll(".bbox");
window.addEventListener('scroll', checkboxes);
    checkboxes();

    function checkboxes(){
        const triggerBottom = window.innerHeight / 5 * 4.8;
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom){
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            };
        });
    };                                                                                                                                                                                                                                                                                                                                              

    const boxes2 = document.querySelectorAll(".bbox2");
    window.addEventListener('scroll', checkboxes2);
        checkboxes2();
    
        function checkboxes2(){
            const triggerBottom2 = window.innerHeight / 5 * 4.8;
            boxes2.forEach(box2 => {
                const boxTop2 = box2.getBoundingClientRect().top;
                if(boxTop2 < triggerBottom2){
                    box2.classList.add('show');
                } else {
                    box2.classList.remove('show');
                };
            });
        };                                                                                                                                                                                                                                                                                                                                              

        
const boxes3 = document.querySelectorAll(".ttxt");
window.addEventListener('scroll', checkboxes3);
    checkboxes3();

    function checkboxes3(){
        const triggerBottom3 = window.innerHeight / 5 * 4.8;
        boxes3.forEach(box3 => {
            const boxTop3 = box3.getBoundingClientRect().top;
            if(boxTop3 < triggerBottom3){
                box3.classList.add('show');
            } else {
                box3.classList.remove('show');
            };
        });
    };                                                                                                                                                                                                                                                                                                                                              

function vermais(){
    var dots = document.getElementById("ddttss");
    var more = document.getElementById("vermais");
    var text = document.getElementById("btnVerMais");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        text.innerHTML = "Ver Mais";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        text.innerHTML = "Ver Menos";
        more.style.display = "flex";
    };
};