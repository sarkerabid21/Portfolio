var typed= new Typed(".text",{
    strings:["Frontend Developer" , "Backend Developer" , "Web Developer"  , "Graphic Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
      let count = 0;
      let progressAnimation = setInterval(() => {
        count++;
        progress.setAttribute('data-text', `${count}%`);
        if (count >= value) {
          clearInterval(progressAnimation);
        }
      }, 15);
    });
  };