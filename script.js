const balloonContainer = document.getElementById('balloons');
const colors = ['#ff66cc','#ff99cc','#ffccff','#ffb3e6','#ff99ff','#ff66ff'];

for(let i=0;i<30;i++){
  const balloon = document.createElement('div');
  balloon.className='balloon';
  const size = 20 + Math.random()*30;
  balloon.style.width = size+'px';
  balloon.style.height = size*1.2+'px';
  balloon.style.left = Math.random()*100+'vw';
  balloon.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
  const speed = 5 + Math.random()*8; // different speeds for parallax
  balloon.style.animationDuration = speed + 's';
  balloon.style.boxShadow = `0 0 ${10+Math.random()*20}px ${colors[Math.floor(Math.random()*colors.length)]}`;
  
  // Optional: click heart effect
  balloon.addEventListener('click',()=>{
    const heart = document.createElement('div');
    heart.className='heart';
    heart.style.left = balloon.offsetLeft+'px';
    heart.style.top = balloon.offsetTop+'px';
    heart.innerText = '❤️';
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),1500);
  });
  
  balloonContainer.appendChild(balloon);
}
