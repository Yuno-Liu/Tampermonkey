// ==UserScript==
// @name         Redmine Extension
// @namespace
// @version      0.1
// @description  強化優化 redmine 顯示功能：新增圖片預覽功能、字體及圖片CSS調整
// @author       YunoLiu
// @match        http://192.168.1.53:3000/*
// @icon         https://play-lh.googleusercontent.com/HB-bwPWDCT97JalLGTVajbtoV3fk4g0hTTDoopCGVA22Xtddx_fN3xMIPNl-8BDC2QX6=w240-h480-rw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 在所有img標籤中添加CSS
    var imgs = document.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++)
    {
        imgs[i].style.border = "1px solid #ddd";
        imgs[i].style.borderRadius = "4px";
        imgs[i].style.padding = "5px";
        imgs[i].style.height = "400px";
    }

    // 在 div id = [content] 中的P標籤中添加CSS樣式
    var content = document.getElementById("content");
    var ps = content.getElementsByTagName("p");
    for (var x = 0; x < ps.length; x++)
    {
        ps[x].style.fontSize = "18px";
    };

    for (var z = 0; z < imgs.length; z++)
    {
        imgs[z].addEventListener("click", function() {
            // 創建一個新的 div 元素來顯示圖片
            var div = document.createElement("div");
            div.style.position = "fixed";
            div.style.top = "0";
            div.style.left = "0";
            div.style.width = "100%";
            div.style.height = "100%";
            div.style.backgroundColor = "rgba(0,0,0,0.5)";
            div.style.display = "flex";
            div.style.justifyContent = "center";
            div.style.alignItems = "center";
            div.style.zIndex = "1000";

            // 創建一個新的 img 元素並設定其 src 屬性
            var img = document.createElement("img");
            img.src = this.src;
            img.style.maxWidth = "80%";
            img.style.maxHeight = "80%";

            // 將 img 元素添加到 div 元素中
            div.appendChild(img);

            // 當點擊 div 元素時，將其從文檔中移除
            div.addEventListener("click", function() {
                this.parentNode.removeChild(this);
            });

    // 將 div 元素添加到文檔中
    document.body.appendChild(div);
});
}

}

)();
