let objClock = {
    init:function(){
        this.objHourHand = document.querySelector('.hourHand');
        this.objMinuteHand = document.querySelector('.minuteHand');
        this.objSecondHand = document.querySelector('.secondHand');
        console.log(this);
    }
}

objClock.init();