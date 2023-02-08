/*
This file was modified by the Flashtalking Service Suite
Version: 2.4.10
Tool: dynamiclite
Date: December 14, 2022 at 1:59:32 AM
Options Selected: {"preserveVariables":true}
Logged Changes: f_dlc,f_rec,f_exl
*/
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg_14837_970x250_2x = function() {
	this.initialize(img.bg_14837_970x250_2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.img01 = function() {
	this.initialize(img.img01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,166);


(lib.img03 = function() {
	this.initialize(img.img03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,124);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt_disc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// AT_T_may_temporarily_slow_data_speeds_if_the_network_is_busy_
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAFIAAgIIAIAAIAAAIg");
	this.shape.setTransform(301.75,43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1.setTransform(298.275,41.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_2.setTransform(293.575,41.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOASQgGgGgBgMQABgKAGgHQAGgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAANgEQgBgFgCgDQgEgFgGAAQgFAAgDAEQgDADgBAGIAZAAIAAAAg");
	this.shape_3.setTransform(288.65,41.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_4.setTransform(285.1,41.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_5.setTransform(280.775,41.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAhIARhBIAHAAIgSBBg");
	this.shape_6.setTransform(277.1,40.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAFIAAgIIAIAAIAAAIg");
	this.shape_7.setTransform(274.65,43.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_8.setTransform(272.475,40.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_9.setTransform(270.6,40.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_10.setTransform(267.125,41.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAXIgSgtIAJAAIAKAbIACAJIADgJIAKgbIAJAAIgSAtg");
	this.shape_11.setTransform(262.45,41.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_12.setTransform(257.725,41.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAFIAAgIIAIAAIAAAIg");
	this.shape_13.setTransform(251.6,43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_14.setTransform(247.725,40.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_15.setTransform(244.25,41.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_16.setTransform(240.675,40.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(236,34,69.19999999999999,14.100000000000001);


(lib.T_300x250_underlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00A9EC","rgba(0,169,236,0)"],[0,1],-6.4,-163.9,-6.4,-239.9).s().p("EhOHAnEMAAAhOHMCcPAAAMAAABOHg");
	this.shape.setTransform(500,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,500);


(lib.T_300x250_pass_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#006FAA","#0097DE","#00A9EC","#00C2FE"],[0,0.498,0.741,1],-380.4,439.3,223.4,439.3).s().p("EAKVA8BQr9k3roobQo4mdoHoHQlGlGj7k2MAAAgiEQECoPJbpMQItogL3n+QLanqLvleQL8ljJTh4UAAJByugABAR1QubgZuhl4g");
	this.shape.setTransform(251.7105,-4.1875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T_300x250_pass_2, new cjs.Rectangle(0.4,-428.3,502.6,848.3), null);


(lib.T_300x250_pass_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// source
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0097DE","#00A9EC","#00C2FE"],[0.008,0.49,1],0,-480.9,0,519).s().p("EgnDhK1QZsIETHOlQVZQSL7XkMAAAAlMQk0JroLIdQn2IHqfGjQqNGXr/EZQr5EXsuCHg");
	this.shape.setTransform(250,481);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T_300x250_pass_1, new cjs.Rectangle(0,0,500,1000), null);


(lib.img_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img03();
	this.instance.setTransform(-364,-45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-45,320,62);


(lib.img_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img01();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,83);


(lib.COPY_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(240.025,34.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAmQgGgEgDgHQgDgHAAgJQAAgJAEgGQADgHAGgDQAGgFAHAAQAGABAGADIAAgaIAVAAIAABSIgRAAIgBgGQgEADgEACQgEACgEAAQgHAAgGgEgAgFABQgDAEAAAGQAAAHADAEQACADAEAAQAFAAADgCIAAgXIgIgCQgEABgCACg");
	this.shape_1.setTransform(235.075,31.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAbQgHgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAIAAQAJAAAHAEQAHAEAEAHQAEAHAAAIQAAAJgEAHQgEAHgHAEQgHAEgJAAQgIAAgHgEgAgGgJQgDAEAAAFQAAAGADAEQACAEAEAAQAFAAACgEQADgEAAgGQAAgFgDgEQgCgEgFAAQgEAAgCAEg");
	this.shape_2.setTransform(228.525,32.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAbQgHgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAIAAQAJAAAHAEQAHAEAEAHQAEAHAAAIQAAAJgEAHQgEAHgHAEQgHAEgJAAQgIAAgHgEgAgGgJQgDAEAAAFQAAAGADAEQACAEAEAAQAFAAACgEQADgEAAgGQAAgFgDgEQgCgEgFAAQgEAAgCAEg");
	this.shape_3.setTransform(221.875,32.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHApIAAgjQAAgEgBgCQgCAAgEAAQgDAAgDABIAAAoIgVAAIAAhRIAVAAIAAAdIAGgFQAEgCAFAAQAJAAAFAHQAFAGAAAKIAAAkg");
	this.shape_4.setTransform(215.275,31.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IASAAIABAFQADgDAEgCQAEgCAFAAIAEABIgCASIgGgBQgHAAgFADIAAAmg");
	this.shape_5.setTransform(209.825,32.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAbQgHgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAIAAQAJAAAHAEQAHAEAEAHQAEAHAAAIQAAAJgEAHQgEAHgHAEQgHAEgJAAQgIAAgHgEgAgGgJQgDAEAAAFQAAAGADAEQACAEAEAAQAFAAACgEQADgEAAgGQAAgFgDgEQgCgEgFAAQgEAAgCAEg");
	this.shape_6.setTransform(203.925,32.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFApIgHgGIgDAGIgOAAIAAhSIAVAAIAAAcQAGgGAHAAQAHAAAGAFQAGADADAIQADAFAAAJQAAAKgEAGQgDAIgGADQgGAEgHAAQgFAAgEgBgAgIAAIAAAYIAHABQAFAAACgDQADgEAAgHQAAgGgDgEQgCgCgEgBQgEAAgEACg");
	this.shape_7.setTransform(197.375,31.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAHApIAAgjQAAgEgBgCQgCAAgEAAQgDAAgDABIAAAoIgVAAIAAhRIAVAAIAAAdIAGgFQAEgCAFAAQAJAAAFAHQAFAGAAAKIAAAkg");
	this.shape_8.setTransform(190.575,31.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAmIAEgPQAHADAJAAQAGAAADgDQADgDAAgGIAAgBQgGAEgHABQgHAAgGgFQgGgDgDgHQgDgGAAgJQAAgIAEgHQADgHAGgDQAGgFAHAAQAEABAEABQAEACAEADIACgFIAPAAIAAA0QAAAJgEAIQgEAGgHAEQgHAEgJAAQgLgBgLgEgAgFgVQgDADAAAGQAAAHADAEQACACAEAAQAFAAADgBIAAgXIgIgCQgEABgCADg");
	this.shape_9.setTransform(183.725,33.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAqIAAg5IATAAIAAA5gAgHgXQgDgDAAgFQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFQAAAFgDADQgDACgFAAQgEAAgDgCg");
	this.shape_10.setTransform(178.925,31.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAIAAAGAEQAGAEADAGQAEAHAAAIIAAAHIgjAAQAAAEAEACQADACAFAAIAIAAIAIgDIAFANQgGAEgGABQgFACgGAAQgIAAgIgEgAgHgFIARAAIAAAAQAAgEgDgDQgCgDgDAAQgIAAgBAKg");
	this.shape_11.setTransform(174.25,32.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAHAeIAAgjQAAgDgBgCQgCgBgEAAQgDAAgDACIAAAnIgVAAIAAg5IASAAIABAFQAEgDAEgCQAEgCAFAAQAJAAAFAGQAFAGAAALIAAAkg");
	this.shape_12.setTransform(167.925,32.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IASAAIABAFQADgDAEgCQAEgCAFAAIAEABIgCASIgGgBQgHAAgFADIAAAmg");
	this.shape_13.setTransform(160.175,32.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAXQgEgFAAgMIAAgjIAUAAIAAAiQAAAEABACQACABADABQADgBAEgCIAAgnIAVAAIAAA6IgSAAIgBgHQgEAEgFACQgDACgFAAQgIAAgGgHg");
	this.shape_14.setTransform(154.3,32.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAbQgHgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAIAAQAJAAAHAEQAHAEAEAHQAEAHAAAIQAAAJgEAHQgEAHgHAEQgHAEgJAAQgIAAgHgEgAgGgJQgDAEAAAFQAAAGADAEQACAEAEAAQAFAAACgEQADgEAAgGQAAgFgDgEQgCgEgFAAQgEAAgCAEg");
	this.shape_15.setTransform(147.725,32.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggAmIAEgOIAJABQAEAAACgCIAEgFIABgCIgYg5IAXAAIAKAlIAKglIAWAAIgYA7QgEAJgDAFQgDAFgFACQgDADgHAAQgIAAgIgEg");
	this.shape_16.setTransform(141.15,33.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHAeIAAgjQAAgDgBgCQgCgBgEAAQgDAAgDACIAAAnIgVAAIAAg5IASAAIABAFQAEgDAEgCQAEgCAFAAQAJAAAFAGQAFAGAAALIAAAkg");
	this.shape_17.setTransform(132.275,32.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAqIAAg5IATAAIAAA5gAgHgXQgDgDAAgFQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFQAAAFgDADQgDACgFAAQgEAAgDgCg");
	this.shape_18.setTransform(127.375,31.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAGgEAHAAQAIAAAGAEQAGAEADAGQAEAHAAAIIgBAHIgjAAQABAEAEACQADACAGAAIAHAAIAIgDIAFANQgGAEgFABQgGACgGAAQgJAAgGgEgAgIgFIARAAIAAAAQAAgEgCgDQgCgDgEAAQgHAAgCAKg");
	this.shape_19.setTransform(120.4,32.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJApIAAhRIATAAIAABRg");
	this.shape_20.setTransform(115.775,31.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFApIgHgGIgDAGIgOAAIAAhSIAVAAIAAAcQAGgGAHAAQAHAAAGAFQAGADADAIQADAFAAAJQAAAKgEAGQgDAIgGADQgGAEgHAAQgFAAgEgBgAgIAAIAAAYIAHABQAFAAACgDQADgEAAgHQAAgGgDgEQgCgCgEgBQgEAAgEACg");
	this.shape_21.setTransform(110.975,31.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAaQgFgFAAgJQAAgIAGgEQAFgFAJAAIANAAIAAAAQAAgEgCgCQgDgCgEAAIgIABIgJADIgFgPQANgGAMAAQAMAAAHAHQAHAGAAALIAAAjIgRAAIgBgFQgEADgFACQgDACgFAAQgIAAgFgFgAgEAHQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQADAAAEgCIAAgIIgHAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_22.setTransform(104.275,32.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJApIAAhRIATAAIAABRg");
	this.shape_23.setTransform(99.725,31.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAqIAAg5IATAAIAAA5gAgHgXQgDgDAAgFQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFQAAAFgDADQgDACgFAAQgEAAgDgCg");
	this.shape_24.setTransform(96.575,31.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAaQgFgFAAgJQAAgIAGgEQAFgFAJAAIANAAIAAAAQAAgEgCgCQgDgCgEAAIgIABIgJADIgFgPQANgGAMAAQAMAAAHAHQAHAGAAALIAAAjIgRAAIgBgFQgEADgFACQgDACgFAAQgIAAgFgFgAgEAHQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQADAAAEgCIAAgIIgHAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_25.setTransform(91.825,32.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAdIgXg5IAXAAIAJAjIAKgjIAXAAIgYA5g");
	this.shape_26.setTransform(85.55,32.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVAaQgFgFAAgJQAAgIAGgEQAFgFAJAAIANAAIAAAAQAAgEgCgCQgDgCgEAAIgIABIgJADIgFgPQANgGAMAAQAMAAAHAHQAHAGAAALIAAAjIgRAAIgBgFQgEADgFACQgDACgFAAQgIAAgFgFgAgEAHQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQADAAAEgCIAAgIIgHAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_27.setTransform(79.075,32.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74,22,169.6,18.4);


(lib.COPY_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKAdIgKgiIgIAiIgTAAIgTg5IAXAAIAHAiIAIggIARAAIAJAhIAHgjIAWAAIgTA5g");
	this.shape.setTransform(203.95,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAbQgHgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAIAAQAJAAAHAEQAHAEAEAHQAEAHAAAIQAAAJgEAHQgEAHgHAEQgHAEgJAAQgIAAgHgEgAgGgJQgDAEAAAFQAAAGADAEQACAEAEAAQAFAAACgEQADgEAAgGQAAgFgDgEQgCgEgFAAQgEAAgCAEg");
	this.shape_1.setTransform(196.025,20.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHAeIAAgiQAAgEgBgCQgCgCgEABQgDgBgDADIAAAnIgVAAIAAg6IASAAIABAHQAEgEAEgCQAEgCAFAAQAJAAAFAHQAFAGAAAKIAAAkg");
	this.shape_2.setTransform(189.525,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAZIAEgOQAKAEAJAAIAEgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIgBgDIgEgBIgEgBQgKgCgEgEQgFgDAAgIQAAgJAIgFQAHgGALAAQAKAAALAEIgFAPQgIgDgHAAQgHAAABADIABACIADACIAEABQAKACAEAEQAFADAAAIQAAAJgHAFQgHAGgLAAQgMAAgMgGg");
	this.shape_3.setTransform(181.4,20.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAqIAAg6IATAAIAAA6gAgHgYQgDgDAAgEQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_4.setTransform(177.225,19.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAfQgGgFABgNIAAgTIgJAAIAAgQIAKAAIACgPIAQAAIAAAPIAQAAIAAAQIgQAAIAAARQAAAFABADQACACAEAAQAEAAAEgCIAEANQgEADgEABQgFACgFAAQgKgBgFgGg");
	this.shape_5.setTransform(171,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQADAHAAAIIgBAHIgjAAQACAEADACQADACAGAAIAHAAIAIgDIAFANQgGAEgFABQgGACgHAAQgHAAgHgEgAgIgFIARAAIAAAAQAAgEgBgDQgDgDgEAAQgGAAgDAKg");
	this.shape_6.setTransform(165.65,20.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAHAeIAAgiQAAgEgBgCQgCgCgEABQgDgBgDADIAAAnIgVAAIAAg6IASAAIABAHQAEgEAEgCQAEgCAFAAQAJAAAFAHQAFAGAAAKIAAAkg");
	this.shape_7.setTransform(159.425,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAeIAAg6IASAAIABAHQADgEAEgCQAEgCAFAAIAEABIgCASIgGgBQgHAAgFACIAAAng");
	this.shape_8.setTransform(154.075,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAIAAAGAEQAGAEADAGQAEAHAAAIIAAAHIgjAAQAAAEAEACQADACAFAAIAIAAIAIgDIAFANQgGAEgGABQgFACgGAAQgIAAgIgEgAgHgFIARAAIAAAAQgBgEgCgDQgCgDgDAAQgIAAgBAKg");
	this.shape_9.setTransform(148.5,20.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAfQgGgFABgNIAAgTIgJAAIAAgQIAKAAIACgPIAQAAIAAAPIAQAAIAAAQIgQAAIAAARQAAAFABADQACACAEAAQAEAAAEgCIAEANQgEADgEABQgFACgFAAQgKgBgFgGg");
	this.shape_10.setTransform(143,19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAHAeIAAgiQAAgEgBgCQgCgCgEABQgDgBgDADIAAAnIgVAAIAAg6IASAAIABAHQAEgEAEgCQAEgCAFAAQAJAAAFAHQAFAGAAAKIAAAkg");
	this.shape_11.setTransform(137.475,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAqIAAg6IATAAIAAA6gAgHgYQgDgDAAgEQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_12.setTransform(132.675,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(19));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah9A1IAAhQIARAAIABAFQAEgDAEgCQAEgCAFAAQAHAAAGAEQAGAEADAHQADAHAAAHQAAAKgEAHQgDAHgGADQgGAEgHABQgIAAgFgEIAAAZgAhogKIAAAXIAHACQAGAAACgEQADgDAAgIQAAgFgDgEQgCgDgFAAQgEAAgEACgADkAaQgGgGAAgMIAAgUIgIAAIAAgPIAJAAIADgQIARAAIAAAQIAQAAIAAAPIgQAAIAAARQAAAFABACQACADADAAQAEAAAFgDIAEAOQgEADgEABQgFACgFAAQgLgBgFgFgAChAaIAEgPQAKAFAJAAIAGgBQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBIgBgCIgFgCIgEAAQgKgCgEgFQgEgCAAgIQAAgJAHgGQAHgFAMAAQAKAAALAEIgEAPQgJgDgHAAQgHAAAAADIABACIAFABIADABQAKACAFAEQAEAEAAAHQAAAKgHAFQgHAGgMAAQgMAAgMgGgABpAaQgFgEAAgJQAAgJAFgEQAFgEAKAAIANAAIAAgBQAAgEgCgBQgCgCgFAAIgIABIgJACIgFgOQANgGANAAQAMAAAGAGQAHAHAAAKIAAAkIgQAAIgCgFQgDACgFACQgFACgEABQgJgBgEgFgAB5AIQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQAEAAADgCIAAgIIgIAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAgAgtAbQgHgEgDgGQgEgIAAgJQAAgIAEgHQAEgGAGgEQAHgEAIAAQAIAAAGAEQAGADADAHQAEAGAAAJIgBAHIgkAAQABAEAEACQADACAGAAIAIAAIAIgEIAFAOQgGAEgGABQgFACgHAAQgJgBgHgEgAgogEIASAAIAAgBQAAgEgCgCQgCgDgEAAQgIAAgCAKgAi7AZQgFgGAAgLIAAgjIAVAAIAAAiQAAAEABABQACACADAAQAEAAAEgDIAAgmIAUAAIAAA5IgRAAIgCgGQgEADgEACQgEACgFABQgJAAgFgHgAj4AdIgNgEIAGgRQALAFAKgBIAIgBQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIgIgDIgFAAQgKgDgFgFQgEgGAAgJQAAgLAIgHQAIgGANAAQAHAAAHACIALADIgFARIgJgCIgJgBIgHABQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABQABAAAAABIAHACIAFABQAMAEAFAEQAFAFAAAJQAAALgJAIQgIAGgPABQgIgBgHgCgAA6AeIAAgqIgKAAIAAgPIAKAAIAAgBQAAgIADgGQADgFAGgDQAFgDAIAAQAIABAIADIgEAOIgKgBQgDAAgCABQgCACAAAFIAAABIAPAAIAAAPIgPAAIAAAqgAAFAeIAAg5IASAAIABAGQAEgEAFgCQAEgCAFAAIAEABIgDASIgGgBQgGAAgFACIAAAng");
	mask.setTransform(102.675,19.85);

	// gradient
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#0057B8","#0057B8","#FFFFFF","#FFFFFF"],[0.204,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_13.setTransform(-5.925,35.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#0056B7","#0056B7","#FFFFFF","#FFFFFF"],[0.204,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_14.setTransform(-3.175,35.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#0056B6","#0056B6","#FFFFFF","#FFFFFF"],[0.204,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_15.setTransform(0.625,35.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#0054B4","#0054B4","#FFFFFF","#FFFFFF"],[0.204,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_16.setTransform(6.825,35.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#0052B2","#0052B2","#FFFFFF","#FFFFFF"],[0.204,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_17.setTransform(16.125,35.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#0050AE","#0050AE","#FFFFFF","#FFFFFF"],[0.204,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_18.setTransform(29.125,35.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#004CAA","#004CAA","#FFFFFF","#FFFFFF"],[0.208,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_19.setTransform(46.375,35.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#0048A4","#0048A4","#FFFFFF","#FFFFFF"],[0.208,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_20.setTransform(68.575,34.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#00439D","#00439D","#FFFFFF","#FFFFFF"],[0.208,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_21.setTransform(90.725,34.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#003F99","#003F99","#FFFFFF","#FFFFFF"],[0.212,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_22.setTransform(108.025,34.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#003D95","#003D95","#FFFFFF","#FFFFFF"],[0.212,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_23.setTransform(120.975,34.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#003B93","#003B93","#FFFFFF","#FFFFFF"],[0.212,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_24.setTransform(130.275,33.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#003991","#003991","#FFFFFF","#FFFFFF"],[0.212,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_25.setTransform(136.525,33.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#003990","#003990","#FFFFFF","#FFFFFF"],[0.212,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_26.setTransform(140.325,33.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#00388F","#00388F","#FFFFFF","#FFFFFF"],[0.212,0.482,0.663,0.839],-151,0.1,151.1,0.1).s().p("A3mGcIAAs3MAvNAAAIAAM3g");
	this.shape_27.setTransform(142.275,33.775);

	var maskedShapeInstanceList = [this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{x:-5.925}}]}).to({state:[{t:this.shape_13,p:{x:-5.825}}]},1).to({state:[{t:this.shape_13,p:{x:-5.125}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{x:142.275}}]},1).to({state:[{t:this.shape_27,p:{x:142.975}}]},1).to({state:[{t:this.shape_27,p:{x:143.075}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74,10,136.7,18.4);


(lib.COPY_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgGgEgDgHQgDgHAAgJQAAgJAEgGQADgHAGgEQAGgDAHAAQAGAAAGADIAAgaIAVAAIAABSIgRAAIgBgGQgEAEgEABQgEACgEAAQgHAAgGgEgAgFABQgDADAAAHQAAAHADADQACAEAEAAQAFAAADgCIAAgXIgIgBQgEgBgCADg");
	this.shape.setTransform(131.225,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAbQgIgEgDgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAGgEAHAAQAIAAAGAEQAGAEADAGQAEAHAAAIIgBAHIgjAAQABAEAEACQADACAGAAIAHAAIAIgDIAFANQgGAEgFABQgGACgGAAQgJAAgGgEgAgIgFIARAAIAAAAQAAgEgCgDQgCgDgEAAQgHAAgCAKg");
	this.shape_1.setTransform(124.9,32.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAdIgYg5IAYAAIAJAjIAKgjIAWAAIgXA5g");
	this.shape_2.setTransform(118.55,32.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAqIAAg5IATAAIAAA5gAgHgXQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgDACgFAAQgEAAgDgCg");
	this.shape_3.setTransform(113.675,30.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IASAAIABAFQADgDAEgCQAEgCAFAAIAEAAIgCATIgGgBQgHAAgFADIAAAmg");
	this.shape_4.setTransform(109.975,32.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IASAAIABAFQADgDAEgCQAEgCAFAAIAEAAIgCATIgGgBQgHAAgFADIAAAmg");
	this.shape_5.setTransform(105.275,32.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAaQgFgFAAgJQAAgIAGgEQAFgFAJAAIANAAIAAAAQAAgEgCgCQgDgCgEAAIgIABIgJADIgFgPQANgGAMAAQAMAAAHAHQAHAGAAALIAAAjIgRAAIgBgFQgEADgFACQgDACgFAAQgIAAgFgFgAgEAHQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQADAAAEgCIAAgIIgHAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_6.setTransform(99.525,32.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAZIAEgOQAKAEAJAAIAEgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIgBgDIgEgBIgEgBQgKgCgEgEQgEgDgBgIQABgJAHgFQAHgGALAAQAKAAAKAFIgDAOQgJgDgHAAQgHAAAAADIABACIAEACIAEABQAKACAEAEQAFADAAAIQAAAJgHAFQgHAGgLAAQgNAAgLgGg");
	this.shape_7.setTransform(91.55,32.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAaQgFgFAAgJQAAgIAGgEQAFgFAJAAIANAAIAAAAQAAgEgCgCQgDgCgEAAIgIABIgJADIgFgPQANgGAMAAQAMAAAHAHQAHAGAAALIAAAjIgRAAIgBgFQgEADgFACQgDACgFAAQgIAAgFgFgAgEAHQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQADAAAEgCIAAgIIgHAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_8.setTransform(85.675,32.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAHApIAAgjQAAgEgBgCQgCAAgEAAQgDAAgDABIAAAoIgVAAIAAhRIAVAAIAAAdIAGgFQAEgCAFAAQAJAAAFAHQAFAGAAAKIAAAkg");
	this.shape_9.setTransform(79.425,31.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74,21.8,62.900000000000006,18.400000000000002);


(lib.COPY_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAfQgGgFAAgNIAAgTIgIAAIAAgQIAJAAIAEgOIAPAAIAAAOIAQAAIAAAQIgQAAIAAARQAAAFACADQABABADABQAEgBAFgBIAEANQgDADgFABQgFABgEABQgLAAgFgHg");
	this.shape.setTransform(171.05,19.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAIAAAGAEQAGAEADAGQAEAHAAAIIAAAHIgjAAQAAAEAEACQADACAFAAIAIAAIAIgDIAFANQgGAEgGABQgFACgGAAQgIAAgIgEgAgHgFIARAAIAAAAQgBgEgCgDQgCgDgDAAQgIAAgBAKg");
	this.shape_1.setTransform(165.6,20.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHAeIAAgiQAAgEgBgCQgCgBgEgBQgDABgDACIAAAnIgVAAIAAg6IASAAIABAHQAEgEAEgCQAEgCAFAAQAJAAAFAHQAFAFAAAMIAAAjg");
	this.shape_2.setTransform(159.275,20.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAeIAAg6IASAAIABAHQADgEAEgCQAEgCAFAAIAEAAIgCATIgGgBQgHAAgFACIAAAng");
	this.shape_3.setTransform(153.825,20.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAIAAAGAEQAGAEADAGQAEAHAAAIIAAAHIgjAAQAAAEAEACQADACAFAAIAIAAIAIgDIAFANQgGAEgGABQgFACgGAAQgIAAgIgEgAgHgFIARAAIAAAAQAAgEgDgDQgCgDgDAAQgIAAgBAKg");
	this.shape_4.setTransform(148.15,20.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAfQgGgFABgNIAAgTIgJAAIAAgQIAKAAIACgOIAQAAIAAAOIAQAAIAAAQIgQAAIAAARQAAAFABADQACABAEABQAEgBAEgBIAEANQgEADgEABQgFABgFABQgKAAgFgHg");
	this.shape_5.setTransform(142.55,19.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAHAeIAAgiQAAgEgBgCQgCgBgEgBQgDABgDACIAAAnIgVAAIAAg6IASAAIABAHQAEgEAEgCQAEgCAFAAQAJAAAFAHQAFAFAAAMIAAAjg");
	this.shape_6.setTransform(136.925,20.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAqIAAg6IATAAIAAA6gAgHgYQgDgDAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_7.setTransform(132.025,18.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAfQgGgFAAgNIAAgTIgIAAIAAgQIAJAAIAEgOIAPAAIAAAOIAQAAIAAAQIgQAAIAAARQAAAFACADQABABADABQAEgBAFgBIAEANQgDADgFABQgFABgEABQgLAAgFgHg");
	this.shape_8.setTransform(125.6,19.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAZIAEgOQAKAEAJAAIAEgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIgBgDIgEgBIgEgBQgKgCgEgEQgFgDAAgIQAAgJAIgFQAHgGALAAQAKAAALAFIgFAOQgIgDgHAAQgHAAABADIABACIADACIAEABQAKACAEAEQAFADAAAIQAAAJgHAFQgHAGgLAAQgMAAgMgGg");
	this.shape_9.setTransform(120.55,20.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAaQgFgFAAgJQAAgIAGgEQAFgFAJAAIANAAIAAAAQAAgEgCgCQgDgCgEAAIgIABIgJADIgFgPQANgGAMAAQAMAAAHAHQAHAGAAALIAAAjIgRAAIgBgFQgEADgFACQgDACgFAAQgIAAgFgFgAgEAHQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQADAAAEgCIAAgIIgHAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_10.setTransform(114.675,20.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAqIAAgqIgKAAIAAgQIAKAAIAAgBQAAgHACgGQAEgFAFgDQAFgDAIAAQAIAAAHAEIgEAOIgJgCQgEAAgCACQgCACAAAEIAAABIAQAAIAAAQIgQAAIAAAqg");
	this.shape_11.setTransform(109.45,18.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAeIAAg6IASAAIABAHQADgEAEgCQAEgCAFAAIAEAAIgCATIgGgBQgHAAgFACIAAAng");
	this.shape_12.setTransform(104.775,20.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAHAAQAIAAAGAEQAGAEADAGQAEAHAAAIIAAAHIgjAAQAAAEAEACQADACAFAAIAIAAIAIgDIAFANQgGAEgGABQgFACgGAAQgIAAgIgEgAgHgFIARAAIAAAAQAAgEgDgDQgCgDgDAAQgIAAgBAKg");
	this.shape_13.setTransform(99.1,20.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAqIAAhRIARAAIABAFQAEgDAEgCQADgCAFAAQAHAAAGAEQAGAEADAHQADAHAAAJQAAAJgEAGQgDAHgGAEQgGAEgHAAQgHAAgFgEIAAAagAgIgWIAAAXIAHACQAFAAACgDQADgDAAgHQAAgHgDgDQgCgEgEAAQgEAAgEACg");
	this.shape_14.setTransform(92.825,21.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAYQgGgHAAgKIAAgkIAVAAIAAAjQAAADABACQACABADAAQADAAAEgCIAAgnIAUAAIAAA5IgRAAIgCgGQgEAEgEACQgDACgFAAQgJAAgEgGg");
	this.shape_15.setTransform(86,20.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQAmIgNgFIAGgQQALAEAKAAIAHgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAIgHgDIgFgBQgKgDgFgFQgEgFAAgJQAAgMAIgGQAIgHAMAAQAHAAAHACIALAEIgFAQIgJgCIgJgBIgGABQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGADIAFABQAMAEAFADQAFAFAAAJQAAAMgJAHQgIAHgOAAQgIAAgHgCg");
	this.shape_16.setTransform(79.425,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74,9.8,101.69999999999999,18.4);


(lib.btn_clickTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Att_globe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjtKoQhugnhehIIAAgCIACAAQBHAoBfAYQB7AeCWAAQCnAACQguQBggfBCgsQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgBABQhhBVh3AuQh8AwiGAAQh5AAh0gogAmIIRQi/hOhCiNIAAgBIABAAQBFBlCoA6QCaA2C1AAQD3AADNhFQDVhIBQh2QAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAABQgTAwgZAqQglBBg0AqQhVBGiIAmQiAAkiLAAQkBAAi4hMgAmzFNQiag7hThXQgOgPgKgSQgJgRgDgNQgLg3AAhFIABAAIABAAQAcBrCEBRQCjBlD6AAQEaAAEbhvQB/gyBOg5QBSg6AJgzIABgBIABABIABAmQAAAygGAvQgIAzgMAeQgiBPhyA7Qi3BelTAAQkDAAjIhNgAniAgQithCgqhZQgEgJgCgHQAAgIACgLQAFgdAQgsQAPgvAPgeQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBABQgFAZAAARQAABrCaBLQCZBLDXAAQDrAAD+hUQEkhggEiAQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAAAABQAhBCAPA6QANAzgMApQgdBnipA7QiiA5j0AAQleAAjfhXgAl1jhQjZhJABhlQgBgOAYgdQAtg7A5gvIABAAIAAABQgeAkAAAmQAABEA/AsQBWA+C+AAQELAADEhRQBQghAvgnQAsgmAAgfQAAgJgFgHQAAgBABAAQAAAAAAAAQAAgBAAAAQAAABAAAAQAoAlAdAgQAdAhAJARQAMAWAAAZQAABVh6A8QiNBGjzAAQkBAAjNhEgAlAnYQhngkAAgyQAAgOANgOQALgMAagQQBTgzBegaQBhgcBjAAQDHAACpBmQAYAOAJAJQAKAKAAAMQAAA2h/AqQiFAti1AAQiyAAhwgpg");
	this.shape.setTransform(72,71.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,144);


(lib.att_fiber = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMoDjQgogYgWgoQgWgpAAgzQAAg0AXgpQAYgqAlgVQAngXAuABQAwAAAjAVQAkAXAUAmQATAkAAAwIgCAsIjTAAQAGAaAVAOQAVAMAiAAQAYAAAUgEQAWgFAagMIAdBQQgjATghAJQghAIgnABQg0gBgpgXgANFAlIBrAAIAAgDQAAgYgNgOQgOgPgWAAQgvAAgLA4gAHtDyQgWgJgYgVIgOAfIhQAAIAAnDIB3ghIAACjQAmgeAsABQAtAAAhAWQAhAXASApQARAnAAA1QAAA2gUAoQgVAqgiAVQgjAXgrAAQgegBgYgIgAHYABIAACNQAXAKAWAAQAfAAAQgVQAQgVAAgnQAAgngQgVQgPgUgeAAQgaAAgVAKgAriDfQgfgbAAgpQAAgcASgbQATgYAjgSQgVgWgJgTQgIgSAAgSQAAgbANgTQANgTAXgLQAYgLAdAAQAuABAbAVQAbAWAAAlQAAAyhIAnIAzA2IAhg7IBEAAIgfA3QgMAWgPAWIBPBVIhXAAIgigkQgXAWgXAJQgYALghgBQgzAAgfgZgAqwB5QgIAMAAAOQAAAUANAMQAPAMAVAAQAgAAAUgYIhDhIQgTAPgHALgAqSgrQgKAHAAAOQAAALAGALQAEAHASAUQAVgOAJgLQAKgKAAgNQAAgNgJgJQgJgJgPAAQgPAAgKAJgARDDzIAAlXIBoAAIAHAlQAXgXAZgLQAZgKAdAAQAMgBAMADIgPBqQgbgEgKgBQgkAAgfAPIAADogAC2DzIAAlXIB3AAIAAFXgAhPDzIAAj9Ig5AAIAAhaIA5AAIAAgGQAAgsATgfQATgfAhgSQAhgRArAAQAzAAArAWIgWBSQgcgJgdAAQgVAAgMAMQgLAMAAAXIAAAFIBcAAIAABaIhcAAIAAD9gAmIDzIAAkSIhmAAIAAhFIEZAAIAABFIhmAAIAAESgAu0DzIAAkSIhmAAIAAhFIEZAAIAABFIhmAAIAAESgAw0DzIgWhEIh9AAIgVBEIhTAAICBlXIBNAAICAFXgAyyBuIBTAAIgpiBgADCiSQgTgRAAgaQAAgaATgSQATgQAcgBQAeABASAQQASARAAAbQAAAagSARQgSARgeAAQgdAAgSgRg");
	this.shape.setTransform(132.775,25.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,265.6,50.1);


(lib.ctaswipeWHITEBAR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.533,1],-49.9,0,50.1,0).s().p("AnzD6IAAnzIPnAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-25,100,50);


(lib.mc_swipe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// T_pass_2
	this.instance = new lib.T_300x250_pass_2();
	this.instance.setTransform(160.05,1.7,0.6362,0.6362,0,0,0,250,435.1);
	this.instance.alpha = 0.6016;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({y:609.7},23,cjs.Ease.quadInOut).to({_off:true},1).wait(3));

	// T_pass_1
	this.instance_1 = new lib.T_300x250_pass_1();
	this.instance_1.setTransform(104,-442,1,1,0,0,0,250,500);
	this.instance_1.alpha = 0.3984;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:518},18,cjs.Ease.quadInOut).to({_off:true},1).wait(10));

	// T_underlay
	this.instance_2 = new lib.T_300x250_underlay("synched",0);
	this.instance_2.setTransform(-8.85,-42,0.3575,0.3575,0,0,0,0,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({alpha:1},11).wait(2).to({startPosition:0},0).to({y:93.15},9,cjs.Ease.cubicOut).to({_off:true},1).wait(6));

	// Layer_2
	this.instance_3 = new lib.bg_14837_970x250_2x();
	this.instance_3.setTransform(0,1,0.1649,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356.4,-940,812.9,1918);


(lib.mc_shine_m = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42));

	// masck_shine (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAA8QgYAAgRgSQgSgRAAgZIAAAAQAAgYASgRQARgSAYAAIAAAAQAZAAARASQASARAAAYIAAAAQAAAZgSARQgRASgZAAg");
	mask.setTransform(5.9939,5.9863);

	// WHITE_BAR
	this.instance = new lib.ctaswipeWHITEBAR("synched",0);
	this.instance.setTransform(-61.55,9.35,1.3285,1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:160.95},40,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.logo_att_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.att_fiber("synched",0);
	this.instance.setTransform(33.55,24.1,0.1996,0.1996,0,0,0,133,25.6);

	this.instance_1 = new lib.Att_globe("synched",0);
	this.instance_1.setTransform(22.85,-23.35,0.13,0.13,0,0,0,72.7,72.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-32.8,53,61.8);


(lib.img_3_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_3("synched",0);
	this.instance.setTransform(204,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,x:224.4,y:15.4},119,cjs.Ease.get(-0.6)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.9,-34,352,68.2);


(lib.img_1_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-32},69,cjs.Ease.get(-0.5)).wait(51));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,320,115);


(lib.btn_cta_mobile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine_mc
	this.shine_mc = new lib.mc_shine_m();
	this.shine_mc.name = "shine_mc";

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).to({_off:true},2).wait(2));

	// carrot
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,3).p("AgRgfIAfAfIgfAg");
	this.shape.setTransform(6.2018,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// mask_idn
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00388F").s().p("AAABzQgvAAghgiQgighAAgwIAAAAQAAgvAighQAhgiAvAAIAAAAQAwAAAhAiQAiAhAAAvIAAAAQAAAwgiAhQghAigwAAg");
	this.shape_1.setTransform(5.9968,5.9863,0.5221,0.5221);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


// stage content:
(lib.arp_fiber_new_green_version_a_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {".":224};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,242];
	// timeline functions:
	this.frame_0 = function() {
		this.clicktag_btn.addEventListener("click", f_ClickTag); //Main ClickTag
		this.cta_btn.addEventListener("click", f_ClickTag); //CTA ClickTag
		
		//this.details_btn.addEventListener("click", f_Details.bind(this)); // Disclamer Frame
		 
		 //CTA Rollover animation
		this.cta_btn.addEventListener("mouseover", f_rollOver.bind(this));
		
		function f_ClickTag() {
			 (function(){ if (!window.rightClick){ myFT.clickTag(1, myFT.instantAds.clickTag1_url) } })();
		// this code is for Flashtalking  check var dynamicURL
			 //canvas.onclick = function (){ myFT.clickTag(1, myFT.instantAds.clickTag1_url) }
			 //setTimeout(function(){ canvas.onclick = null });
		}
		//disclaimer function
		function f_Details() {
		    //this.disclaimerFrame_mc.play();
			discOpen();
		}
		
		function f_rollOver() {
		    this.cta_btn.shine_mc.play();
		}
	}
	this.frame_242 = function() {
		this.cta_btn.shine_mc.play();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(242).call(this.frame_242).wait(91));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},243).wait(90));

	// cta_btn
	this.cta_m_btn = new lib.btn_cta_mobile();
	this.cta_m_btn.name = "cta_m_btn";
	this.cta_m_btn.setTransform(281,15,1.6154,1.6154);
	this.cta_m_btn.alpha = 0;
	this.cta_m_btn._off = true;
	new cjs.ButtonHelper(this.cta_m_btn, 0, 1, 2, false, new lib.btn_cta_mobile(), 3);

	this.cta_btn = new lib.btn_cta_mobile();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.setTransform(281,15,1.6154,1.6154);
	new cjs.ButtonHelper(this.cta_btn, 0, 1, 2, false, new lib.btn_cta_mobile(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cta_m_btn}]},204).to({state:[{t:this.cta_btn}]},20).to({state:[]},19).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.cta_m_btn).wait(204).to({_off:false},0).to({_off:true,alpha:1},20).wait(109));

	// clicktag_btn
	this.clicktag_btn = new lib.btn_clickTag();
	this.clicktag_btn.name = "clicktag_btn";
	this.clicktag_btn.setTransform(150.05,25,1.0666,0.2,0,0,0,140.7,125);
	new cjs.ButtonHelper(this.clicktag_btn, 0, 1, 2, false, new lib.btn_clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clicktag_btn).to({_off:true},243).wait(90));

	// logo_att_color_ai
	this.logo_att_color = new lib.logo_att_color("single",0);
	this.logo_att_color.name = "logo_att_color";

	this.timeline.addTween(cjs.Tween.get(this.logo_att_color).wait(333));

	// disc
	this.txt_Disc = new lib.txt_disc("single",0);
	this.txt_Disc.name = "txt_Disc";
	this.txt_Disc.alpha = 0;
	this.txt_Disc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt_Disc).wait(224).to({_off:false},0).to({alpha:1},10).to({_off:true},9).wait(90));

	// COPY_4
	this.instance = new lib.COPY_4("synched",0);
	this.instance.setTransform(233.3,40.4,1,1,0,0,0,253.3,40.4);
	this.instance.alpha = 0.3008;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(187).to({_off:false},0).to({x:253.3,alpha:1},15,cjs.Ease.cubicOut).to({_off:true},41).wait(90));

	// COPY_3
	this.instance_1 = new lib.COPY_3("single",0);
	this.instance_1.setTransform(231.3,40.4,1,1,0,0,0,253.3,40.4);
	this.instance_1.alpha = 0.3008;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(184).to({_off:false},0).to({x:253.3,alpha:1,mode:"synched",loop:false},15,cjs.Ease.cubicOut).to({_off:true},44).wait(90));

	// mc_swipe
	this.instance_2 = new lib.mc_swipe("synched",0,false);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(168).to({_off:false},0).to({_off:true},75).wait(90));

	// COPY_2
	this.instance_3 = new lib.COPY_2("synched",0);
	this.instance_3.setTransform(232.5,40.4,1,1,0,0,0,253.3,40.4);
	this.instance_3.alpha = 0.3008;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({x:253.3,alpha:1},15,cjs.Ease.cubicOut).to({_off:true},187).wait(128));

	// COPY_1
	this.instance_4 = new lib.COPY_1("synched",0);
	this.instance_4.setTransform(232.3,40.4,1,1,0,0,0,253.3,40.4);
	this.instance_4.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:253.3,alpha:1},15,cjs.Ease.cubicOut).to({_off:true},190).wait(128));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_68 = new cjs.Graphics().p("AgjAjQgOgOAAgVQAAgUAOgPQAPgOAUAAQAVAAAOAOQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPg");
	var mask_graphics_69 = new cjs.Graphics().p("AiYCZQg/g/AAhaQAAhYA/hAQA/g/BZAAQBZAAA/A/QBABAAABYQAABahAA/Qg/A/hZAAQhZAAg/g/g");
	var mask_graphics_70 = new cjs.Graphics().p("AkHEIQhthtAAibQAAiZBthuQBthtCaAAQCbAABsBtQBuBuAACZQAACbhuBtQhsBtibAAQiaAAhthtg");
	var mask_graphics_71 = new cjs.Graphics().p("AlwFxQiZiZAAjYQAAjXCZiZQCZiZDXAAQDYAACZCZQCZCZAADXQAADYiZCZQiZCZjYAAQjXAAiZiZg");
	var mask_graphics_72 = new cjs.Graphics().p("AnUHUQjBjCAAkSQAAkRDBjDQDDjBERAAQESAADCDBQDCDDAAERQAAESjCDCQjCDCkSAAQkRAAjDjCg");
	var mask_graphics_73 = new cjs.Graphics().p("AoxIxQjojoAAlJQAAlIDojoQDpjpFIAAQFJAADoDpQDpDoAAFIQAAFJjpDoQjoDplJAAQlIAAjpjpg");
	var mask_graphics_74 = new cjs.Graphics().p("AqHKIQkNkMAAl8QAAl6ENkOQEMkMF7AAQF8AAEMEMQENEOAAF6QAAF8kNEMQkMENl8AAQl7AAkMkNg");
	var mask_graphics_75 = new cjs.Graphics().p("ArZLZQkukuAAmrQAAmqEukvQEvkuGqAAQGrAAEuEuQEvEvAAGqQAAGrkvEuQkuEvmrAAQmqAAkvkvg");
	var mask_graphics_76 = new cjs.Graphics().p("AskMlQlNlOAAnXQAAnWFNlOQFOlNHWAAQHXAAFNFNQFOFOAAHWQAAHXlOFOQlNFNnXAAQnWAAlOlNg");
	var mask_graphics_77 = new cjs.Graphics().p("AtpNqQlqlqAAoAQAAn+FqlrQFrlqH+AAQIAAAFqFqQFpFrABH+QgBIAlpFqQlqFqoAAAQn+AAlrlqg");
	var mask_graphics_78 = new cjs.Graphics().p("AuoOpQmEmEAAolQAAokGEmEQGEmEIkAAQIlAAGEGEQGEGEAAIkQAAIlmEGEQmEGEolAAQokAAmEmEg");
	var mask_graphics_79 = new cjs.Graphics().p("AvhPhQmcmbAApGQAApFGcmcQGcmcJFAAQJGAAGbGcQGdGcAAJFQAAJGmdGbQmbGdpGAAQpFAAmcmdg");
	var mask_graphics_80 = new cjs.Graphics().p("AwVQVQmwmxAApkQAApjGwmxQGymxJjAAQJkAAGwGxQGyGxAAJjQAAJkmyGxQmwGxpkAAQpjAAmymxg");
	var mask_graphics_81 = new cjs.Graphics().p("AxBRCQnEnEAAp+QAAp9HEnEQHEnEJ9AAQJ/AAHDHEQHEHEAAJ9QAAJ+nEHEQnDHEp/AAQp9AAnEnEg");
	var mask_graphics_82 = new cjs.Graphics().p("AxoRpQnUnUAAqVQAAqUHUnUQHUnUKUAAQKVAAHUHUQHUHUAAKUQAAKVnUHUQnUHUqVAAQqUAAnUnUg");
	var mask_graphics_83 = new cjs.Graphics().p("AyJSKQninhAAqpQAAqnHiniQHiniKnAAQKpAAHhHiQHiHiAAKnQAAKpniHhQnhHiqpAAQqnAAninig");
	var mask_graphics_84 = new cjs.Graphics().p("AykSlQntntAAq4QAAq3HtntQHsntK4AAQK5AAHsHtQHtHtAAK3QAAK4ntHtQnsHtq5AAQq4AAnsntg");
	var mask_graphics_85 = new cjs.Graphics().p("Ay5S6Qn2n1AArFQAArEH2n1QH1n2LEAAQLFAAH1H2QH2H1AALEQAALFn2H1Qn1H2rFAAQrEAAn1n2g");
	var mask_graphics_86 = new cjs.Graphics().p("AzITJQn8n8AArNQAArMH8n9QH8n7LMAAQLOAAH7H7QH8H9AALMQAALNn8H8Qn7H8rOAAQrMAAn8n8g");
	var mask_graphics_87 = new cjs.Graphics().p("AzRTSQoAn/AArTQAArSIAoAQH/n/LSAAQLTAAH/H/QIAIAAALSQAALToAH/Qn/IArTAAQrSAAn/oAg");
	var mask_graphics_88 = new cjs.Graphics().p("AzVTVQoAoAAArVQAArTIAoCQICoALTAAQLVAAIAIAQIBICAALTQAALVoBIAQoAIBrVAAQrTAAoCoBg");
	var mask_graphics_204 = new cjs.Graphics().p("AzVTVQoAoAAArVQAArTIAoCQICoALTAAQLVAAIAIAQIBICAALTQAALVoBIAQoAIBrVAAQrTAAoCoBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(68).to({graphics:mask_graphics_68,x:298.3,y:37.5}).wait(1).to({graphics:mask_graphics_69,x:284.925,y:38.925}).wait(1).to({graphics:mask_graphics_70,x:272.2,y:40.25}).wait(1).to({graphics:mask_graphics_71,x:260.175,y:41.525}).wait(1).to({graphics:mask_graphics_72,x:248.85,y:42.75}).wait(1).to({graphics:mask_graphics_73,x:238.225,y:43.875}).wait(1).to({graphics:mask_graphics_74,x:228.25,y:44.9}).wait(1).to({graphics:mask_graphics_75,x:218.975,y:45.925}).wait(1).to({graphics:mask_graphics_76,x:210.4,y:46.8}).wait(1).to({graphics:mask_graphics_77,x:202.5,y:47.625}).wait(1).to({graphics:mask_graphics_78,x:195.3,y:48.4}).wait(1).to({graphics:mask_graphics_79,x:188.775,y:49.125}).wait(1).to({graphics:mask_graphics_80,x:182.95,y:49.7}).wait(1).to({graphics:mask_graphics_81,x:177.775,y:50.275}).wait(1).to({graphics:mask_graphics_82,x:173.3,y:50.75}).wait(1).to({graphics:mask_graphics_83,x:169.525,y:51.125}).wait(1).to({graphics:mask_graphics_84,x:166.45,y:51.45}).wait(1).to({graphics:mask_graphics_85,x:164.025,y:51.725}).wait(1).to({graphics:mask_graphics_86,x:162.325,y:51.9}).wait(1).to({graphics:mask_graphics_87,x:161.275,y:52.025}).wait(1).to({graphics:mask_graphics_88,x:160.95,y:52.05}).wait(116).to({graphics:mask_graphics_204,x:160.95,y:52.05}).wait(129));

	// img_3_anim
	this.instance_5 = new lib.img_3_anim("synched",0);
	this.instance_5.setTransform(160,25);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(68).to({_off:false},0).to({_off:true},137).wait(128));

	// img_1_anim
	this.instance_6 = new lib.img_1_anim("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},120).wait(213));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-435,-915,789,1893);
// library properties:
lib.properties = {
	id: 'C617512025DE43EF9BA8B74025A6BF5F',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg_14837_970x250_2x.jpg", id:"bg_14837_970x250_2x"},
		{src:"images/img01.jpg", id:"img01"},
		{src:"images/img03.jpg", id:"img03"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C617512025DE43EF9BA8B74025A6BF5F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;