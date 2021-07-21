let objClock = {
    init:function(){
        this.selectingElements();
        console.log(this);
    },
    selectingElements:function(){
        this.objHourHand = document.querySelector('.hourHand');
        this.objMinuteHand = document.querySelector('.minuteHand');
        this.objSecondHand = document.querySelector('.secondHand');
    }
}

objClock.init();