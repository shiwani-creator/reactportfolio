(function () {
    let screen = document.getElementsByClassName('screen')[0];
    let header = document.getElementById('header');
    let header1 = document.getElementById('header1');
    let header2 = document.getElementById('header2');
    let header3 = document.getElementById('header3');
    let header4 = document.getElementById('header4');
    let header5 = document.getElementById('header5');
    let header6 = document.getElementById('header6');
    let header7 = document.getElementById('header7');
    let header8 = document.getElementById('header8');
    let header9 = document.getElementById('header9');
    let headers = document.getElementById('headers');
    let main = document.getElementById('main');
    let main1 = document.getElementById('main1');
    let main2 = document.getElementById('main2');
    let main3 = document.getElementById('main3');
    let equal = document.getElementsByClassName('btn-equal')[0];
    let clear = document.getElementsByClassName('btn-clear')[0];

    function swap(e){
        let value = e.target.dataset.number;
            screen.value += value;
    }


    (function () {
        header.addEventListener('click', swap)
          
    })();
    (function () {
        header1.addEventListener('click',swap)
    })();
    (function () {
        header2.addEventListener('click', swap)
          
    })();
    (function () {
        header3.addEventListener('click', swap)
    })();
    (function () {
        header4.addEventListener('click',swap)
    })();
    (function () {
        header5.addEventListener('click',swap)
    })();
    (function () {
        header6.addEventListener('click',swap)
    })();
    (function () {
        header7.addEventListener('click',swap)
    })();
    (function () {
        header8.addEventListener('click',swap)
    })();
    (function () {
        header9.addEventListener('click',swap)
    })();
    (function () {
        headers.addEventListener('click', swap)
    })();
    (function () {
        main.addEventListener('click', swap)
    })();
    (function () {
        main1.addEventListener('click',swap)
    })();
    (function () {
        main2.addEventListener('click', swap)
    })();
    (function () {
        main3.addEventListener('click', swap)
    })();
    equal.addEventListener('click', function (e) {
        if (screen.value == '') {
            screen.value == "";
        }
        else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener('click', function (e) {
        screen.value = "";
    })
})();