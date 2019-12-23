    var duanshipin_list = document.querySelector(".duanshipin_list")

    var content_list2 = ""

    for (var i = 0; i < date2.length; i++) {
        content_list2 += `<div class="yi">
                    <div class="duanshipin">
                        <img src=`+ date2[i].img + ` alt="">
                    </div>
                    <div class="gerenxinxi">
                        <img class="touxiang" src=`+ date2[i].touxiang + ` alt="">
                        <span>`+ date2[i].biaoqian1 + `</span>
                        <span>`+ date2[i].biaoqian2 + `</span>
                        <div class="tubiao">
                            <img src="../images/pinlun.png" alt="">
                            <img src="../images/zhuanfa.png" alt="">
                            <img src="../images/shanchu.png" alt="">
                        </div>


                    </div>
                    <div class="biaoti">`+ date2[i].name + `</div>
                </div>`

    }
    duanshipin_list.innerHTML = content_list2