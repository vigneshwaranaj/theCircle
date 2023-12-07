const circle = document.getElementById('simple_circle');
let circleSize = 50;
let reachedMaxSize = false;

const handleClickOrTap = () => {
    if (circleSize * 2 <= window.innerWidth && circleSize * 2 <= window.innerHeight && !reachedMaxSize) {
        circleSize *= 2;
    } else {
        reachedMaxSize = true;
        circleSize = Math.max(circleSize / 2, 24);
        if(circleSize == 24){
            reachedMaxSize = false;
        }
    }

    updateCircleSize();
};


circle.addEventListener('click', handleClickOrTap);
circle.addEventListener('touchstart', handleClickOrTap);


function updateCircleSize() {
    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;
}