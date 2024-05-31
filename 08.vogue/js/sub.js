// 보그코리아 서브페이지 JS - sub.js //
let pm = location.href;
if(pm.indexOf("?")===-1){
    alert("비정상적인 접근입니다.");
    location.href = "index.html";
}
pm = pm.split("?")[1].split("=")[1];

$(function () {

    new Vue({
        el: "#cont",
        data: {
            items: {},
            catName: pm
        },
        mounted: function () {
            axios.get("./js/real.json")
                .then(response => (this.items = response))
        },
        methods:{
            chgTit: function(tit){
                document.querySelector("title").innerText = 
                tit + " | 보그 코리아 (Vogue Korea)";
            }
        }
    });
});