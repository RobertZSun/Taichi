const cssInBody = document.getElementById("css_in_body");
const textContainer = document.getElementById("text_container");

const cssContent = `/* Hello，我叫 Robert
 * 接下来我小秀一下我的前端基础功底
 * 首先我要准备一个div
 **/
#taiChi {
    width: 200px;
    height: 200px;
    border: 2px solid black;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 * 再加点阴影
 **/
#taiChi {
    border-radius: 50%;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#taiChi {
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}
/* 现在让其形成阴阳鱼，并画鱼点睛 */
#taiChi::before {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: 50px;
    top: 0;
    background: radial-gradient(circle, rgba(0, 0, 0, 2) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%, rgba(0, 0, 0, 1) 100%);
}
#taiChi::after {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: 50px;
    top: 100px;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
}`;

let index = 0;

const printStr = function () {
  setTimeout(() => {
    index++;
    if (index > cssContent.length) return;
    textContainer.innerText = cssContent.substring(0, index);
    cssInBody.innerText = cssContent.substring(0, index);
    window.scrollTo(0, document.body.scrollHeight);
    textContainer.scrollTo(0, document.body.scrollHeight);
    printStr();
  }, 50);
};

printStr();
