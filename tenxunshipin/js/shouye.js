tuijian_list = document.querySelector(".content_list")
var content_list1 = ""
for (var i = 0; i < re_date.length; i++) {
    content_list1 += `<div class="mm"><p>` + re_date[i].list_name + `</p></div>`

    for (var j = 0; j < re_date[i].xinxi.length; j++) {
        content_list1 += `<div class="shujia_rem" class="pp">

        <img src=`+ re_date[i].xinxi[j].img + ` alt="">
        <span class="vip">`+ re_date[i].xinxi[j].vip + `</span>
        <div class="rem_jishu">`+ re_date[i].xinxi[j].jishu + `</div>
            <p class="xiaoming">`+ re_date[i].xinxi[j].name + `</p>
            <p class="jianjie ni">`+ re_date[i].xinxi[j].jieshao + `</p>
        </div>`
    }
    content_list1 += `<div class="huanyihuan">
                        <img src="../images/huanyihuan.png" alt="">
                        <span>换一批试试</span>
                    </div>`

}

tuijian_list.innerHTML = content_list1


var my_ming = document.querySelector(".t_ming")
// console.log(my_ming)
var content_list4 = ""
for (var i = 0; i < T_date.length; i++) {

    content_list4 += `
                            <div class="ming">
                                 <img src=`+ T_date[i].img + ` alt="">
                                 <div class="mingri_jishu">`+ T_date[i].jishu + `</div>
                                 <p class="xiaoming">`+ T_date[i].name + `</p>
                                <p class="jianjie ">`+ T_date[i].jieshao + `</p>
                             </div>
                     `

    // content_list4 += 6666


}
// content_list4 = 6666
my_ming.innerHTML = content_list4