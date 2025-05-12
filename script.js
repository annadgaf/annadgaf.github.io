window.addEventListener("load", function () {
    const heartImage = document.querySelector('#valentines');
  
    function initializeParticles() {
      const heart = new NextParticle({
        renderer: 'webgl',
        image: heartImage,
        width: window.innerWidth,
        height: window.innerHeight,
        particleGap: 2,
        particleSize: 1.5,
        mouseForce: 50,
        noise: 0,
        layerCount: 1,
        layerDistance: 2
      });
    }
  
    if (!heartImage.complete) {
      heartImage.onload = initializeParticles;
    } else {
      initializeParticles();
    }
  });