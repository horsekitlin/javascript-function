[Introduce](introduce.md)

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

## function

什麼時候可以使用function

1. 重複使用的程式碼

2. 利用function 命名來增加程式的可讀性

3. 功能切割增加實踐功能的工作效率

##匿名 function

1. 就像衛生紙一樣，用完即丟

2. private function
(這個今天不會講，時間不夠！)

3. 在browser中防止污染全域變數時可以使用
