document.querySelector('.simple').addEventListener('click', runEventOne);
document.querySelector('.speedy').addEventListener('click', runEventTwo);
document.querySelector('.easy').addEventListener('click', runEventThree);

function runEventOne(e){
    document.querySelector('.simple').classList.add('border');
    document.querySelector('.speedy').classList.remove('border');
    document.querySelector('.easy').classList.remove('border');
    document.querySelector('.tab-one').classList.remove('d-none');
    document.querySelector('.tab-two').classList.add('d-none');
    document.querySelector('.tab-three').classList.add('d-none');
}

function runEventTwo(e){
    document.querySelector('.simple').classList.remove('border');
    document.querySelector('.speedy').classList.add('border');
    document.querySelector('.easy').classList.remove('border')
    document.querySelector('.tab-one').classList.add('d-none');
    document.querySelector('.tab-two').classList.remove('d-none');
    document.querySelector('.tab-three').classList.add('d-none');
}

function runEventThree(e){
    document.querySelector('.simple').classList.remove('border');
    document.querySelector('.speedy').classList.remove('border');
    document.querySelector('.easy').classList.add('border');
    document.querySelector('.tab-one').classList.add('d-none');
    document.querySelector('.tab-two').classList.add('d-none');
    document.querySelector('.tab-three').classList.remove('d-none');
}

document.querySelector('.flex-one').addEventListener('mouseover', redOneAdd);
document.querySelector('.flex-one').addEventListener('mouseleave', redOneRemove);
document.querySelector('.flex-two').addEventListener('mouseover', redTwoAdd);
document.querySelector('.flex-two').addEventListener('mouseleave', redTwoRemove);
document.querySelector('.flex-three').addEventListener('mouseover', redThreeAdd);
document.querySelector('.flex-three').addEventListener('mouseleave', redThreeRemove);
document.querySelector('.flex-four').addEventListener('mouseover', redFourAdd);
document.querySelector('.flex-four').addEventListener('mouseleave', redFourRemove);


function redOneAdd(e){
    document.querySelector('.question-one').classList.add('hover')
}

function redOneRemove(e){
    document.querySelector('.question-one').classList.remove('hover')
}

function redTwoAdd(e){
    document.querySelector('.question-two').classList.add('hover')
}

function redTwoRemove(e){
    document.querySelector('.question-two').classList.remove('hover')
}

function redThreeAdd(e){
    document.querySelector('.question-three').classList.add('hover')
}

function redThreeRemove(e){
    document.querySelector('.question-three').classList.remove('hover')
}

function redFourAdd(e){
    document.querySelector('.question-four').classList.add('hover')
}

function redFourRemove(e){
    document.querySelector('.question-four').classList.remove('hover')
}


document.querySelector('.flex-one').addEventListener('click', openOne);
document.querySelector('.flex-two').addEventListener('click', openTwo);
document.querySelector('.flex-three').addEventListener('click', openThree);
document.querySelector('.flex-four').addEventListener('click', openFour);

function openOne(e){
    document.querySelector('.arrow-one').classList.toggle('rotate');
    document.querySelector('.answer-one').classList.toggle('show')
}

function openTwo(e){
    document.querySelector('.arrow-two').classList.toggle('rotate')
    document.querySelector('.answer-two').classList.toggle('show')
}

function openThree(e){
    document.querySelector('.arrow-three').classList.toggle('rotate')
    document.querySelector('.answer-three').classList.toggle('show')
}

function openFour(e){
    document.querySelector('.arrow-four').classList.toggle('rotate')
    document.querySelector('.answer-four').classList.toggle('show')
}

document.querySelector('.menu-icon').addEventListener('click', menuOpen);
document.querySelector('.close-btn').addEventListener('click', menuClose)

function menuOpen(e){
    document.querySelector('.main-menu').classList.add('open');
}

function menuClose(e){
    document.querySelector('.main-menu').classList.remove('open')
}

