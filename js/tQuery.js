/**封装TQObjeck**/

var $ = function (selector) {
    this.tqObjeck = new TQobject();
    if (selector.substring(0, 1) === "#") {
        var ele = document.getElementById(selector.substring(1));
        this.tqObjeck.data.push(ele);
    } else if (selector.substring(0, 1) === ".") {
        var eles = document.getElementsByTagName('*');
        console.log();
        var reg = new RegExp("(^|\\s)" + selector.substring(1) + "($|\\s)");
        for (var i = 0; i < eles.length; i++) {
            if (reg.test(eles[i].className)) {
                this.tqObjeck.data.push(eles[i]);
            }
        }
    }
    else {
        var elems = document.getElementsByTagName(selector);
        this.tqObjeck.data = elems;
    }
    return tqObjeck;
};
var TQobject = function () {
    this.data = [];
};
TQobject.prototype = {
    size: function () {
        return this.data.length;
    },
    html: function (content) {
        if (content) {
            for (var i = 0; i < this.data.length; i++) {
                this.data[i].innerHTML = content;
            }
        } else {
            if (this.data.length < 2) {
                return this.data[0].innerHTML;
            }
        }
    },
    text: function (content) {
        if (window.navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
            if (content) {
                for (var i = 0; i < this.data.length; i++) {
                    this.data[i].textContent = content;
                }
            } else {
                if (this.data.length < 2) {
                    return this.data[0].textContent;
                }
            }
        } else {
            if (content) {
                for (var i = 0; i < this.data.length; i++) {
                    this.data[i].innerText = content;
                }
            } else {
                if (this.data.length < 2) {
                    return this.data[0].innerText;
                }
            }
        }
    },
    attr: function (name, value) {
        if (name && value) {
            for (var i = 0; i < this.data.length; i++) {
                this.data[i].setAttribute(name, value);
            }
            return this;
        } else if (name) {
            if (this.data.length < 2) {
                this.data[0].value = value;
            }
        }
    }, slideUp: function () {
        /**获取元素高度*/
        var ele = this.data[0];
        var height = ele.offsetHeight; //获取外部
        console.log(height);
    }


};

/*
function $(selector) {
    var c = selector.substring(0, 1);
    if (c == '#') {
        return document.getElementById(selector.substring(1, selector.length));
    }
}

function $(selector) {
    var clsName = selector.substring(1);
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(clsName)
    } else {
        var clsTgName = document.getElementsByTagName('*');
        var RegExp = new RegExp('(^|\\s)' + clsName + '($|\\s)');
        var arr = [];
        clsTgName.forEach(function (val) {
            if (RegExg.test(val.clsName)) {
                arr.push(val);
            }
        });
        return arr;
    }
}*/
