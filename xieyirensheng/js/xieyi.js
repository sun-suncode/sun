
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // effect: `cube`,
        keyboard: true,
        autoplay: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            // el: '.swiper-scrollbar',
        },


    })


    // var pubu_wrap = document.querySelector(".pubu_wrap")
    // var width=document.querySelector(window.innerWidth)
    var pubu_wrap = $(".pubu_wrap")
    // var aaa = window.innerWidth


    var lie_w = 205
    var lie_num = parseInt(pubu_wrap.width() / lie_w)
    // console.log(lie_num)

    for (var i = 0; i < lie_num; i++) {

        pubu_wrap.append($(`<div class="lie"></div>`))

    }

    var imgs = []

    function loaded() {
        console.log("jiazaiwangcheng")

        for (var i = 0; i < imgs.length; i++) {
            console.log(imgs[i].src)
            var min_h_index = get_min_h_index()
            $(".lie").eq(min_h_index).append($(imgs[i]))
        }

    }

    function get_min_h_index() {
        var xiao_biao = 0
        var min_height = $(".lie").eq(0).height()
        $(".lie").each(function (index, item) {
            if ($(item).height() < min_height) {
                min_height = $(item).height()
                xiao_biao = index
            }
        })

        return xiao_biao

    }

    var span = $("span")
    console.log(span)

    for (var i = 0; i < 16; i++) {

        var one_img = new Image()
        console.log(one_img)

        one_img.src = "../images/P_0" + i + ".jpg"

        one_img.onload = function () {
            imgs.push(this)
            if (imgs.length >= 15) {

                loaded()
            }
        }
    }

    // Creat_img()
    // console.log(imgs)

    window.onresize = function () {
        // console.log(window.innerWidth)

        pubu_wrap.width = window.innerWidth
        return pubu_wrap.width
    }

    console.log(window.onresize())
