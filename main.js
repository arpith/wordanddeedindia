import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

const options = {
  updateOnResizeDown : true,
  updateOnPinchZoom : true,
  fitImgTagToContainerWidth: true,
  fitImgTagToContainerHeight: true,
  pixelStep : 10,
  onChangeParamOverride: function(w, h) {
    var dpr = Math.ceil(window.devicePixelRatio*10) /10;
    return {
      "txt": "w:" + w + " h:" +h + " dpr:" + dpr,
      "txtalign": "center,bottom",
      "txtsize": 20,
      "txtfont": "Helvetica%20Neue,bold",
      "txtclr": "ffffffff",
      "txtpad": 20,
      "txtfit": 'max',
      "exp": -2
    }
  }
};

let mountNode = document.getElementById("react-mount");
let router = (
  <Router 
    history={browserHistory}
    routes={routes}
  />
);

render(router, mountNode);

imgix.onready(function() {
  imgix.fluid(options);
});
