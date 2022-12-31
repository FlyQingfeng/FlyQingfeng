function init_life_time() {
    function getAsideLifeTime() {
        /* 当前时间戳 */
        let nowDate = +new Date();
        /* 今天开始时间戳 */
        let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
        /* 今天已经过去的时间 */
        let todayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
        /* 今天已经过去的时间比 */
        let todayPassHoursPercent = (todayPassHours / 24) * 100;
        $('#dayProgress .date-text span').html(parseInt(todayPassHours));
        $('#dayProgress .progress .progress-bar').css('width', parseInt(todayPassHoursPercent) + '%');
        $('#dayProgress .progress .progress-bar').html(parseInt(todayPassHoursPercent) + '%');
        /* 当前周几 */
        let weeks = {
            0: 7,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6
        };
        let weekDay = weeks[new Date().getDay()];
        let weekDayPassPercent = (weekDay / 7) * 100;
        $('#weekProgress .date-text span').html(weekDay);
        $('#weekProgress .progress .progress-bar').css('width', parseInt(weekDayPassPercent) + '%');
        $('#weekProgress .progress .progress-bar').html(parseInt(weekDayPassPercent) + '%');
        /* 月 */
        let year = new Date().getFullYear();
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let monthAll = new Date(year, month, 0).getDate();
        let monthPassPercent = (date / monthAll) * 100;
        $('#monthProgress .date-text span').html(date);
        $('#monthProgress .progress .progress-bar').css('width', parseInt(monthPassPercent) + '%');
        $('#monthProgress .progress .progress-bar').html(parseInt(monthPassPercent) + '%');
        /* 年 */
        let yearPass = (month / 12) * 100;
        $('#yearProgress .date-text span').html(month);
        $('#yearProgress .progress .progress-bar').css('width', parseInt(yearPass) + '%');
        $('#yearProgress .progress .progress-bar').html(parseInt(yearPass) + '%');
        /* 生日倒计时 */
        let birthday=new Date(year+'-2-10 00:00:00');
        //获取当前的时间
        let ntime=new Date();
        let c=birthday.getTime()-ntime.getTime();
        if (c<0) {
            let nian=year+1;
            birthday=new Date(nian+'-2-10 00:00:00');
            ntime=new Date();
            c=birthday.getTime()-ntime.getTime();
        }
        //总差进行换算
        let day = parseInt(c / (1000 * 60 * 60 * 24));
        let hour=parseInt((c % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let min=parseInt((c % (1000 * 60 * 60)) / (1000 * 60));
        let sec=parseInt((c % (1000 * 60)) / 1000);
        $('#birthday_card #birthday #birthday-time-text').html(day+'天'+hour+'时'+min+'分'+sec+'秒');
        //day=0;
        if(day==0){
            //生日当天的事件
        }
        if (is_countdown) {//is_countdown在main.js中
            /* 跨年倒计时 */
            let countdown=new Date((year+1)+'-1-1 00:00:00');
            //获取当前的时间
            let dt=countdown.getTime()-ntime.getTime();
            //总差进行换算
            let countdown_day = parseInt(dt / (1000 * 60 * 60 * 24));
            let countdown_hour=parseInt((dt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let countdown_min=parseInt((dt % (1000 * 60 * 60)) / (1000 * 60));
            let countdown_sec=parseInt((dt % (1000 * 60)) / 1000);
            $('#countdown_card #countdown #countdown-time-text').html(countdown_day+'天'+countdown_hour+'时'+countdown_min+'分'+countdown_sec+'秒');   
            if (dt==0) {//放烟花
                
            }
        }
    }
    getAsideLifeTime();
    setInterval(() => {
        getAsideLifeTime();
    }, 1000);
}
init_life_time()

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