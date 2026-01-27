let bannerst = 0;
  let bannerhr = 1;
  let icnt = 1;
  let bannerInterval;

  function brun() {
    if (bannerst === 1) return;
    bannerst = 1;

    const pfrme = document.getElementById("pfrme");
    pfrme.style.maxHeight = "200px";
    pfrme.style.opacity = "1";

    bannerInterval = setInterval(() => {
      const imgElement = document.getElementById("infop");
      if (!imgElement) return;

      if (icnt == 1) {
        imgElement.src = "files/Update/UPDATE.jpg";
        icnt = 2;
      } else if (icnt == 2) {
        imgElement.src = "files/banner/i1-1.jpg";
        icnt = 0;
      } else if (icnt == 0) {
        imgElement.src = "files/banner/i1-1.jpg";
        icnt = 3;
      } else if (icnt == 3) {
        imgElement.src = "files/banner/i1-2.jpg";
        icnt = 4;
      } else if (icnt == 4) {
        imgElement.src = "files/banner/i1-3.jpg";
        icnt = 5;
      } else if (icnt == 5) {
        imgElement.src = "files/banner/i1-4.jpg";
        icnt = 6;
      } else if (icnt == 6) {
        imgElement.src = "files/banner/i1-5.jpg";
        icnt = 1;
      }
    }, 2000);
  }

  function hr() {
    const hrElement = document.getElementById("hr");
    if (bannerhr == 1) {
      hrElement.style.width = "90%";
      bannerhr = 2;
    } else if (bannerhr == 2) {
      hrElement.style.width = "50%";
      bannerhr = 3;
    } else {
      hrElement.style.width = "0%";
      bannerhr = 1;
    }
  }