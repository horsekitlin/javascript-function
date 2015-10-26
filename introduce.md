#Introduce

function 是一個小工廠，依據你的輸入值去完成特定的工作之後
回傳相對應的值或是不回傳值

Function 重要的組成：

    * Input : 函數的輸入值
    * logic : 函數中的邏輯運算
    * output : 函數回傳值

Demo

    var prod = {
        price : 50,
        name : '豪吃香雞排'
    };

    var count = 5;

    function bill(prod, count){
        /**
        * @params prod : 產品細項 object
        *   @ params price : 商品價格 number
        *   @ params name : 商品名稱 string
        * @params count : 購買數量 number
        *
        * return : 這筆訂單的總價格 (number)
        **/
        return prod.price * count;
    }

    var total = bill(prod, count);

    alert('您的訂單總額為:' + total);

Javascript的Function 可分為三個種類:

    * function : 一般常見的function

    * 匿名function : 沒有名稱的function

    * callback function : 完成某些特定的工作後通知程式繼續完成工作

