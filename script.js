// setting position in js by array of objects

let svgArray = [
  {
    objectId: "postgresql",
    documentId: "postgresqldoc",

    viewbox: "-9000 -3900 19000 5000",
  },
  {
    objectId: "django",
    documentId: "djangodoc",

    viewbox: "-2300 -2700 8000 5000",
  },
  {
    objectId: "wordpress",
    documentId: "wordpressdoc",
    viewbox: "-2200 -1600 5000 2500",
  },
  {
    objectId: "nodejs",
    documentId: "nodejsdoc",
    viewbox: "-3050 -1150 9000 2500",
  },
  {
    objectId: "mySql",
    documentId: "mySqldoc",
    viewbox: "-9050 -2850 18000 3500",
  },
  /* {
    objectId: "svg5",
    x: -280,
    y: -150,
    height: 700,
    width: 600,
  },

  {
    objectId: "svg7",
    x: 520,
    y: -280,
    height: 700,
    width: 600,
  },
  {
    objectId: "svg8",
    x: -220,
    y: 150,
    height: 700,
    width: 600,
  },

  {
    objectId: "svg10",
    x: 940,
    y: 70,
    height: 700,
    width: 600,
  },
  {
    objectId: "svg11",
    x: -5,
    y: 260,
    height: 700,
    width: 550,
  },
  {
    objectId: "svg12",
    x: -550,
    y: 620,
    height: 1800,
    width: 2000,
  },
  {
    objectId: "svg13",
    x: -50,
    y: 620,
    height: 500,
    width: 500,
  },
  {
    objectId: "svg14",
    x: 450,
    y: 320,
    height: 500,
    width: 500,
  },
  {
    svg_id: "svg15",
    x: 550,
    y: -60,
    height: 1500,
    width: 1800,
  },
  {
    svg_id: "svg16",
    x: 180,
    y: 80,
    height: 500,
    width: 500,
  },
  {
    svg_id: "svg17",
    x: 850,
    y: -100,
    height: 50,
    width: 50,
  }, */
];

/* function loadSVG(svgFilePath) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    document.body.insertAdjacentHTML("beforeend", this.responseText);
  };
  xhr.open("GET", svgFilePath);
  xhr.send();
} */
//passing array in loop
// using setAttribute for setting positions inside array of objects

function svgObject() {
  for (var i = 0; i < svgArray.length; i++) {
    const svgObject = document.getElementById(svgArray[i].objectId);
    console.log(svgObject);

    const svgDoc = svgObject.contentDocument;
    console.log(svgDoc);

    var element = svgDoc.getElementById(svgArray[i].documentId);
    console.log(element);

    element.setAttribute("viewBox", svgArray[i].viewbox);
  }
}

setTimeout(svgObject, 1000);

/* 
var svgObject = document.getElementById("postgresql");

svgObject.addEventListener(
  "load",
  function () {
    svgDoc = svgObject.contentDocument;
    console.log(svgObject);
    alert("SVG contentDocument Loaded!");
  },
  false
); */

/* 
var element = svgDoc.getElementById("postgressql"); */

/* var svgElements = document.querySelectorAll("section#tech svg"); */
/* var icon_group = document.getElementById("icon_group");
var svgElements = icon_group.querySelectorAll("postgressql");

console.log(svgElements);
for (var i = 0; i < svgElements.length; i++) {
  svgElements[i].addEventListener("load", function (e) {
    loadimage(this);
  });

  svgElements[i].addEventListener("mouseover", function (e) {
    changeColor(this);
  });

  svgElements[i].addEventListener("mouseout", function (e) {
    loadimage(this);
  });
}

function loadimage(selectedSvg) {
  var svgInnerElements = selectedSvg.getElementsByTagName("*");

  for (var i = 0; i < svgInnerElements.length; i++) {
    var element = svgInnerElements[i];
    var styles = window.getComputedStyle(element);
    if (styles.fill && styles.stroke) element.style.originalFill = styles.fill;
    element.style.originalStroke = styles.stroke;
    if (
      styles.fill !== "rgb(255, 255, 255)" &&
      styles.stroke !== "rgb(255, 255, 255)"
    ) {
      element.style.fill = "rgb(255, 255, 255)";
      element.style.stroke = "rgb(255, 255, 255 )";
    } else if (
      styles.fill !== "rgb(255, 255, 255)" &&
      styles.stroke == "rgb(255, 255, 255)"
    ) {
      element.style.fill = "rgb(255, 255 ,255)";
      element.style.stroke = "rgb(0 ,0 ,0 )";
    } else if (
      styles.fill == "rgb(255, 255, 255)" &&
      styles.stroke !== "rgb(255, 255, 255)"
    ) {
      element.style.fill = "rgb(0, 0, 0)";
      element.style.stroke = "rgb( 255, 255 ,255 )";
    } else {
      element.style.fill = "rgb(0, 0, 0)";
      element.style.stroke = "rgb( 0, 0, 0 )";
    }
  }
  if (styles.fill) {
    element.style.originalFill = styles.fill;
    if (styles.fill !== "rgb(255, 255, 255)") {
      element.style.fill = "rgb(255, 255, 255)";
    } else {
      element.style.fill = "rgb(0 , 0 , 0)";
    }
  } else if (styles.stroke) {
    element.style.originalStroke = styles.stroke;
    if (element.style.stroke !== "rgb(255, 255, 255)") {
      element.style.stroke = "rgb(255, 255, 255)";
    } else {
      element.style.stroke = "rgb(0, 0 , 0 )";
    }
  }
}
function changeColor(selectedSvg) {
  var svgInnerElements = selectedSvg.getElementsByTagName("*");
  for (var i = 0; i < svgInnerElements.length; i++) {
    var element = svgInnerElements[i];
    if (element.style.originalFill && element.style.originalStroke) {
      element.style.fill = element.style.originalFill;
      element.style.stroke = element.style.originalStroke;
    } else if (element.style.originalFill) {
      element.style.fill = element.style.originalFill;
    } else if (element.style.originalStroke) {
      element.style.stroke = element.style.originalStroke;
    }
  }
}
 */
