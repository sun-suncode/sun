
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