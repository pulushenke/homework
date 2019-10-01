window.onload = function(){
    function getRandom(istart, iend) {   /******取10到100的随机数****/
        let iChoice = istart - iend;
        return Math.floor(Math.random() * iChoice + istart);
    }
    let iArray = [];
    for (let i = 0; i < 10; i++) {
        let result = getRandom(10, 100);
        iArray.push(result);
    }
    console.log(iArray);
    
    function serilizeUrl(url) {
        let result = {};
       
       /*  url = url.split("?")[1];
        let map = url.split("&"); */
    }
    
}

