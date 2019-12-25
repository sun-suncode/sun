// 我的界面
var my_history = document.querySelector(".my_history")

console.log(watch_history_date)

var content_list3 = ""
for (var i = 0; i < watch_history_date.length; i++) {


    content_list3 += `<div class="history">
                        <img src=`+ watch_history_date[i].img + ` "alt="">
                        <p>`+ watch_history_date[i].name + `<p>

                    </div>`

}
my_history.innerHTML = content_list3






// 我的看单
var kandan = document.querySelector(".kandan_list")
var content_list5 = ""
for (var i = 0; i < my_kandan_date.length; i++) {
    content_list5 += ` <div class="one">
                        <div class="kandan_img">
                            <img src=`+ my_kandan_date[i].img + ` alt="">
                            <div class="biaoshi">
                                `+ my_kandan_date[i].biaoshi + `
                            </div>
                        </div>

                        <div class="kandan_xinxi">
                            <p>`+ my_kandan_date[i].name + `</p>
                            <p>`+ my_kandan_date[i].gengxin + `</p>
                        </div>

                    </div>
`
}
kandan.innerHTML = content_list5


