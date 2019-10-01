window.onload = () => {
    const self = this;
    const boundMethod = function (...params) {
        return method.apply(self, params);
    }



    let arr = ['a', 'b', 'c'];
    let arr1 = [...arr];
    let arr2 = Array.from(arr);
    // console.log(arr2);
    // console.log(arr1);
    let obj = { a: 1, b: 2 };
    let obj1 = {
        a: 1,
        b: 2,
    }
    // console.log(obj);
    // console.log(obj1);
    let str = `abjseisowsowlooooooooseessesoooooo`;
    let json = {};
    for (var i = 0; i < str.length; i++) {
        if (!json[str.charAt(i)]) {
            json[str.charAt(i)] = 1;

        } else {
            json[str.charAt(i)]++;
        }
    };
    let iMax = 0;
    let iIndex;
    for (let key in json) {

        if (json[key] > iMax) {
            iMax = json[key];
            iIndex = key;
        }
    }
    //    console.log(iIndex,iMax);

    let ipt = document.querySelectorAll("input");

    let cBoxList = [];
    let iptLen = ipt.length;

    while (iptLen--) {
        if (ipt[iptLen].type === 'checkbox') {
            cBoxList.push(ipt[iptLen]);

        }
        // ipt.length--;
    }
    // console.log(cBoxList);

    let str1 = `abcdefg`;
    str1 = str1.substr(4);
    // console.log(str1);


    let btn = document.getElementById('tc');
    foo();

    let sel = document.querySelector('#sel');
    let imgFj = document.querySelector('#pci');
    sel.value === 'fj' ? sel : showImg(sel);

    //    if(sel.value !=='fj'){
    //     showImg(sel);
    //    }
    sel.onchange = function () {

        showImg(this);
    }
    function foo() {
        let dio = document.form1.radioGroup;
        dio.forEach((item, i) => {

            item.onclick = function () {

                alert(`当前选择的是第${i + 1}`);
            }

        });
    }
    function showImg(OSel) {
        let str = OSel.value;
        // alert(str);
        document.querySelector('#pic').src = `img/${str}.jpg`;


    }

}



