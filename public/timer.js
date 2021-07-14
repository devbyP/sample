(function(){
  const timerBtn = document.getElementById("trigger-timer");

  let timeCount = 0;

  let isStarted = false;

  const startTimer = () => {
    return setInterval(() => {
      timeCount = timeCount + 1;
      console.log(timeCount);
    }, 1000);
  }

  const stopTimer = (interval) => {
    timeCount = 0;
    return clearInterval(interval);
  }
  
  let interval = null;

  const triggerTimer = () => {
    isStarted = !isStarted;
    let text = '';
    let classes = '';
    if (isStarted) {
      text = 'stop';
      classes = 'stop-button';
      interval = startTimer();
    } else {
      text = 'start';
      classes = 'start-button';
      stopTimer(interval);
    }

    timerBtn.innerHTML = text;
    timerBtn.className = classes;
  }

  timerBtn.addEventListener("click", triggerTimer)

})()