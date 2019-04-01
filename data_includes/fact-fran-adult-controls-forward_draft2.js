define_ibex_controller({ //combines question and message controller so that we can present the target sentence and picture at the same time
  name: "tvjt",

  jqueryWidget: {
    _init: function() {
      //this.options.transfer = null;
      this.element.VBox({
        options: this.options,
        triggers: [0],
        children: [
          "Question", this.options,
          "Message", this.options,
        ]
      });
    }
  },
  properties: { }
});

define_ibex_controller({ //combines FlashSentence and Message controller so that we can have text and picture at the same time. I tried to do this with two
  //htmls but didn't make it.
  name: "msgmsg",

  jqueryWidget: {
    _init: function() {
      //this.options.transfer = null;
      this.element.VBox({
        options: this.options,
        triggers: [1],
        children: [
          "FlashSentence", this.options,
          "Message", this.options,
        ]
      });
    }
  },
  properties: { }
});


define_ibex_controller({
  name: "msgmsg2",

  jqueryWidget: {

    _init: function() {
      //this.options.transfer = null;
      //Message2 controller is there just cause it's transfer is null, so there's no 'click to continue' message
    this.element.VBox({
        options: this.options,
        padding: "0.5em",
        triggers: [2],
        children: [
          "FlashSentence", this.options,
          "Message2", this.options,
          "Question", this.options,
        ]
      });
    }
  },
  properties: {
     }

});

define_ibex_controller({
  name: "msgmsg3",

  jqueryWidget: {
    _init: function() {
      //this.options.transfer = null;
      //Message2 controller is there just cause it's transfer is null, so there's no 'click to continue' message
      this.element.VBox({
        options: this.options,
        triggers: [1],
        children: [
          "FlashSentence", this.options,
          "Question", this.options,
        ]
      });
    }
  },
  properties: { }
});

define_ibex_controller({ //combines FlashSentence and Message controller so that we can have text and picture at the same time. I tried to do this with two
  //htmls but didn't make it.
  name: "PictureAccept2",

  jqueryWidget: {
    _init: function() {
      //this.options.transfer = null;
      this.element.VBox({
        options: this.options,
        triggers: [1],
        children: [
          "Message2", this.options,
          "PictureAccept", this.options,
        ]
      });
    }
  },
  properties: { }
});

// var manualSendResults = true;

var IMAGES_TO_PRELOAD = [

    "https://imgur.com/4Y12FOw.png", // two boxes image
    "https://imgur.com/POQybWv.png", // blue box
    "https://imgur.com/FPY6N5z.png", // red box
];


define_ibex_controller({
    name: "FrenchPreloader",
    jqueryWidget: {
        _init: function () {
            this.element.append("Chargement de fichiers...");

            this.preloadedImages = [ ];
            var numToPreload = IMAGES_TO_PRELOAD.length;
            for (var i = 0; i < IMAGES_TO_PRELOAD.length; ++i) {
                var img = new Image();
                img.src = IMAGES_TO_PRELOAD[i];
                var self = this;
                img.onload = function () {
                    --numToPreload;
                    if (numToPreload == 0) {
                        self.options._finishedCallback([ ]);
                    }
                }
                this.preloadedImages.push(img);
            }
        }
    },
    properties: {
        countsForProgressBar: false

    }
});


//shuffleSequence = seq(anyType);
var shuffleSequence = seq( "preload",
                             "consent",
                             "warning",
                             "instructions",
                             "soundtest",
                             "T1",
                             "finished",
                             "subj_info",
                             // "sr",
                             "code");
var defaults = [

"tvjt", {hideProgressBar: true},
"Message", {hideProgressBar: true},
"msgmsg", {hideProgressBar: true},
"msgmsg2", {hideProgressBar: true, presentHorizontally: true},
"msgmsg3", {hideProgressBar: true, presentHorizontally: true},
"Form", {hideProgressBar: true},
"PictureAccept2", {hideProgressBar: true}
];

picture58 = "<center><img src='http://cogexpe.scicog.fr/KNPIM1/Slide58.PNG' width='300'></center>"





var items = [
    ["preload", "FrenchPreloader", { }],
    // ["sr", "__SendResults__", { }],
    ["consent", "Form", {html: {include: 'french_agreement.html'}}],
    ["warning", "Message", {html: {include: 'fact_fran_warning.html'}}],
    ["instructions","Message", {html: {include: 'fact_fran_instructions.html'}}],
    ["soundtest", "Message", {html: {include: 'fact_fran_sound.html'}}],
    ["finished", "Message", {html: {include: 'fact_fran_finish.html'}}],
    ["subj_info", "Form", {html: {include: 'french_questionary.html'}}],
    ["code", "Form", {html: {include: 'french_number_fact.html'}}],
["T1", "PictureAccept2", {html: picture58, as: [["A", 'http://cogexpe.scicog.fr/KNPIM1/Slide8.PNG'], ["B", 'http://cogexpe.scicog.fr/KNPI3/black.PNG']]}]
  ]
