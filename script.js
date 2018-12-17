$('.left').on('click', () => directionClick('left'));
$('.right').on('click', () => directionClick('right'));

let rightCount = 0;
let leftCount = 0;

function directionClick(str) {
    event.preventDefault();

    if (str === 'right') {
        $('.container').animate({
            scrollLeft: '+=450px'
        }, 'slow')
        rightCount++
        checkCount(rightCount, 'right')
    } else if (str === 'left') {
        $('.container').animate({
            scrollLeft: '-=450px'
        }, 'slow')
        leftCount++
        checkCount(leftCount, 'left')
    }
}

function checkCount(countNum, str) {

    if (countNum >= 2 && str === 'right') {
        $('.right').toggleClass('hide')
    } else if (countNum >= 2 && str === 'left') {
        $('.left').toggleClass('hide')
    } else {
        return
    }
}