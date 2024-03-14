document.addEventListener('DOMContentLoaded', (e) => {
    


/*画面遷移前のURL取得*/
let url = new URL(window.location.href);
let param = url.search;/*?以降の値を取得*/
param = param.replace(/^\?/, '');/*取得した値の?を消す*/
let params = param.split('&');/*取得した値の＆の前後の値を分けて取得*/
query = [];
/*id=1,place=3000のように所得した値をa,bに分けてid=1ならaにid,bに1を入れる(Number(b)でbの値を文字列から数字に変換している)*/
for (let i = 0; i < params.length; i++) {
    [a, b] = params[i].split('=');
    query[a] = Number(b);
}

target = 'news' + query['id'];
element = document.getElementById(target);
element.classList.add('active');

});