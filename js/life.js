
//弹窗样式
iziToast.settings({
    timeout: 10000,
    progressBar: false,
    close: false,
    closeOnEscape: true,
    position: 'topCenter',
    transitionIn: 'bounceInDown',
    transitionOut: 'flipOutX',
    displayMode: 'replace',
    layout: '1',
    backgroundColor: '#00000040',
    titleColor: '#efefef',
    messageColor: '#efefef',
    icon: 'Fontawesome',
    iconColor: '#efefef',
});

//判断时间
now = new Date(), hour = now.getHours()
if (hour < 6) {
    var hello = "凌晨好";
} else if (hour < 9) {
    var hello = "早上好";
} else if (hour < 12) {
    var hello = "上午好";
} else if (hour < 14) {
    var hello = "中午好";
} else if (hour < 17) {
    var hello = "下午好";
} else if (hour < 19) {
    var hello = "傍晚好";
} else if (hour < 22) {
    var hello = "晚上好";
} else {
    var hello = "夜深了";
}
/* 鼠标样式 */
const body = document.querySelector("body");
const element = document.getElementById("g-pointer-1");
const element2 = document.getElementById("g-pointer-2");
const halfAlementWidth = element.offsetWidth / 2;
const halfAlementWidth2 = element2.offsetWidth / 2;

function setPosition(x, y) {
    element2.style.transform = `translate(${x - halfAlementWidth2 + 1}px, ${y - halfAlementWidth2 + 1}px)`;
}

body.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(function () {
        setPosition(e.clientX, e.clientY);
    });
});



//加载完成后执行
window.addEventListener('load', function () {

    //载入动画
    $('#loading-box').attr('class', 'loaded');
    $('#bg').css("cssText", "transform: scale(1);filter: blur(0px);transition: ease 1.5s;");
    $('.cover').css("cssText", "opacity: 1;transition: ease 1.5s;");
    $('#section').css("cssText", "transform: scale(1) !important;opacity: 1 !important;filter: blur(0px) !important");
    //随机背景
    $('#bg').attr('src', `./img/background${1 + ~~(Math.random() * 21)}.webp`) //随机默认壁纸
    //用户欢迎
    setTimeout(function () {
        iziToast.show({
            timeout: 2500,
            icon: false,
            title: hello,
            message: '这里是清风的生活分享'
        });
    }, 800);

    //移动端去除鼠标样式
    if (Boolean(window.navigator.userAgent.match(/AppWebKit.*Mobile.*/))) {
        $('#g-pointer-2').css("display", "none");
    }

}, false)

setTimeout(function () {
    $('#loading-text').html("字体及文件加载可能需要一定时间")
}, 3000);


//屏蔽右键
document.oncontextmenu = function () {
    iziToast.show({
        timeout: 2000,
        icon: "fa-solid fa-circle-exclamation",
        message: '为了浏览体验，本站禁用右键'
    });
    return false;
}

//设置默认页面
$(".list ul").eq(0).show().siblings().hide();
$('#top_menu_btn').hide();//隐藏顶部按钮

//监听网页宽度
let is_sm = false;
window.addEventListener('load', function () {
    window.addEventListener('resize', function () {
        //获取网页宽度
        webWidth = window.innerWidth;
        //关闭移动端样式
        if (window.innerWidth >= 600) {
            $('#left_menu_p').css({
                "width": "25%"
            });
            $('#name_text').show();
            $('#top_menu_btn').hide();
            is_sm = false;
        } //启用移动端样式
        if (window.innerWidth <= 990) {
            $('#top_menu_btn').show();
            is_sm = true;
            $('#left_menu_p').css({
                "width": "0%"
            });
            $('#name_text').hide();

        }
    })
})

//移动端菜单打开
function left_menu_open() {
    $('#left_menu_p').css({
        "width": "100%"
    });
    $('#name_text').show();
}
//移动端菜单关闭
function left_menu_off() {
    $('#left_menu_p').css({
        "width": "0%"
    });
    $('#name_text').hide();
}
function getFile(path) {
    var temp_str = "null";
    var reader = path;
    reader.readAsText(this.files[0]);
    reader.onload = function () {
        if (reader.result) {
            temp_str = reader.result;
        }
    };
    console.log(temp_str);
    return temp_str;
}
function updateWeb() {
    //目前还不会做动态更新列表
    
    // let count = document.getElementById('#right_main').childElementCount;
    // let right_main_uls = document.getElementById('#right_main').children;
    // for (let i = 0; i < count; i++) {

    // }
}

$(function () {
    let is_left_menu_show = false;
    // 页面切换
    $('.list_bt .bt').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(".main_list ul").eq($(this).index()).show().siblings().hide();
        if (is_sm) {
            left_menu_off();
            is_left_menu_show = false;
        }
    })
    //分享内容
    $('.list_bt .write').click(function () {
        iziToast.show({
            timeout: 2000,
            icon: "fa-solid fa-circle-exclamation",
            message: '暂时不能写入内容'
        });
        if (is_sm) {
            left_menu_off();
            is_left_menu_show = false;
        }
    })
    //顶部菜单打开菜单
    $('#top_menu_btn').click(function () {
        if (is_left_menu_show) {
            //默认时
            left_menu_off();
            is_left_menu_show = false;
        } else {
            //点击后
            left_menu_open();
            is_left_menu_show = true;
        }
    });
    //设置页面列表内容
    updateWeb();
})