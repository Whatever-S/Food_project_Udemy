function timer(id, deadLine) {
//Timer

    function getTimeRemaining(end){
        const temp = end - new Date();
        let days, hours, minutes, seconds;
        if (temp <=0){
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else{
            days = Math.floor(temp / 1000 / 60 / 60 / 24), 
            hours = Math.floor( (temp /1000 / 60 / 60) % 24),
            minutes = Math.floor((temp / 1000/ 60) % 60),
            seconds = Math.floor((temp/1000)  % 60);
        }

        return {total:temp, days, hours, minutes, seconds};
    }
    function addZero(item){
        if (item < 10 && item >=0 ){
            return '0'+item;
        }
        else return item;
    }
    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds");
        

        function updateClock(){
            const actualTime = getTimeRemaining(deadLine);

            days.innerHTML = actualTime.days;
            hours.innerHTML = addZero(actualTime.hours);
            minutes.innerHTML = addZero(actualTime.minutes);
            seconds.innerHTML = addZero(actualTime.seconds);

            const timerId = setInterval(updateClock, 1000);

            if (actualTime.total <= 0){
                clearInterval(timerId);
            }
        }

        updateClock();
    }

    setClock(id, deadLine);

}

export default timer;