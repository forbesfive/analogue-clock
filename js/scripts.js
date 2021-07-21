let objClock = {
    init:function(){
        this.selectingElements();
        this.getCurrentTime();
        this.calculatingAngles();
        this.adjustHands();
        console.log(this);
    },
    selectingElements:function(){
        this.objHourHand = document.querySelector('.hourHand');
        this.objMinuteHand = document.querySelector('.minuteHand');
        this.objSecondHand = document.querySelector('.secondHand');
    },
    getCurrentTime:function(){
        let now = new Date();
        this.hours = now.getHours();
        if(this.hours >= 12){
            this.hours = this.hours - 12;
        }
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
    },
    calculatingAngles:function(){
        this.secondsAngle = (this.seconds/60) * 360;
        this.minutesAngle = this.calculateMinuteAngle();
        this.hoursAngle = this.calculateHourAngle();
    },
    calculateMinuteAngle:function(){
        let currentSeconds = this.minutes * 60;
        currentSeconds = currentSeconds + this.seconds;
        let percentage = currentSeconds / 3600;
        let angle = percentage * 360;
        return angle;
    },
    calculateHourAngle:function(){
        let currentSeconds = this.hours * 3600;
        currentSeconds = currentSeconds + (this.minutes * 60);
        currentSeconds = currentSeconds + this.seconds;
        let percentage = currentSeconds / 43200;
        let angle = percentage * 360;
        return angle;
    },
    adjustHands:function(){
        this.objSecondHand.style.transform = 'rotate('+this.secondsAngle+'deg)';
        this.objMinuteHand.style.transform = 'rotate('+this.minutesAngle+'deg)';
        this.objHourHand.style.transform = 'rotate('+this.hoursAngle+'deg)';
    }
}

objClock.init();