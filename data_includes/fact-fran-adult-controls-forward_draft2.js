define_ibex_controller({
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

var manualSendResults = true;

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
var shuffleSequence = seq( "preload", "consent", "warning", "task", "clues", "soundtest",
                             "T1",  "T2",   "T3",   "T4",   "T5",   "T6",  "T7",   "T8",   "T9",   "T10",
                             "T11", "T12",  "T13",  "T14",  "T15",  "T16", "T17",  "T18",  "T19",  "T20",
                             "T21", "T22",  "T23",  "T24",  "T25",  "T26", "T27",  "T28",  "T29",  "T30",
                             "T31", "T32",  "T33",  "T34",  "T35",  "T36", "T37",  "T38",  "T39",  "T40",
                             "T41", "T42",
                             "finished","subj_info","sr","code");
var defaults = [

"Message", {hideProgressBar: true},
"Message2", {hideProgressBar: true},
"FrenchForm", {hideProgressBar: true},
"FrenchDoneForm", {hideProgressBar: true},
"PictureAccept2", {hideProgressBar: true}
];

var items = [
    ["preload", "FrenchPreloader", { }],
    ["sr", "__SendResults__", { }],
    ["consent", "FrenchForm", {html: {include: 'french_agreement.html'}}],
    ["warning", "Message", {html: {include: 'fact_fran_warning.html'}}],
    ["task","Message", {html: {include: 'fact_fran_task.html'}}],
    ["clues","Message", {html: {include: 'fact_fran_clues.html'}}],
    ["soundtest", "Message", {html: {include: 'fact_fran_sound.html'}}],
    ["finished", "Message", {html: {include: 'fact_fran_finish.html'}}],
    ["subj_info", "FrenchForm", {html: {include: 'french_questionary.html'}}],
    ["code", "FrenchDoneForm", {html: {include: 'french_number_fact.html'}}],
    ["T1", "PictureAccept2", {html: {include: 'sait_ne_ind_pas_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T2", "PictureAccept2", {html: {include: 'pense_ne_ind_pas_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T3", "PictureAccept2", {html: {include: 'sait_ind_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T4", "PictureAccept2", {html: {include: 'ne_pense_pas_subj_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T5", "PictureAccept2", {html: {include: 'pense_ind_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T6", "PictureAccept2", {html: {include: 'ne_sait_pas_ind_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T7", "PictureAccept2", {html: {include: 'ne_ind_pas_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T8", "PictureAccept2", {html: {include: 'sait_ind_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T9", "PictureAccept2", {html: {include: 'ne_pense_pas_subj_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T10", "PictureAccept2", {html: {include: 'ne_ind_pas_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T11", "PictureAccept2", {html: {include: 'pense_ind_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T12", "PictureAccept2", {html: {include: 'sait_ne_ind_pas_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T13", "PictureAccept2", {html: {include: 'ne_sait_pas_ind_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T14", "PictureAccept2", {html: {include: 'pense_ne_ind_pas_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T15", "PictureAccept2", {html: {include: 'ne_pense_pas_subj_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T16", "PictureAccept2", {html: {include: 'ne_sait_pas_ind_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T17", "PictureAccept2", {html: {include: 'pense_ind_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T18", "PictureAccept2", {html: {include: 'sait_ind_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T19", "PictureAccept2", {html: {include: 'ne_ind_pas_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T20", "PictureAccept2", {html: {include: 'sait_ne_ind_pas_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T21", "PictureAccept2", {html: {include: 'pense_ne_ind_pas_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T22", "PictureAccept2", {html: {include: 'ne_ind_pas_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T23", "PictureAccept2", {html: {include: 'ne_sait_pas_ind_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T24", "PictureAccept2", {html: {include: 'sait_ne_ind_pas_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T25", "PictureAccept2", {html: {include: 'ne_pense_pas_subj_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T26", "PictureAccept2", {html: {include: 'pense_ind_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T27", "PictureAccept2", {html: {include: 'pense_ne_ind_pas_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T28", "PictureAccept2", {html: {include: 'sait_ind_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T29", "PictureAccept2", {html: {include: 'ne_sait_pas_ind_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T30", "PictureAccept2", {html: {include: 'sait_ne_ind_pas_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T31", "PictureAccept2", {html: {include: 'ne_pense_pas_subj_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T32", "PictureAccept2", {html: {include: 'ne_ind_pas_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T33", "PictureAccept2", {html: {include: 'sait_ind_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T34", "PictureAccept2", {html: {include: 'pense_ind_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T35", "PictureAccept2", {html: {include: 'pense_ne_ind_pas_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T36", "PictureAccept2", {html: {include: 'ne_sait_pas_ind_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T37", "PictureAccept2", {html: {include: 'pense_ind_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T38", "PictureAccept2", {html: {include: 'ne_ind_pas_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T39", "PictureAccept2", {html: {include: 'ne_pense_pas_subj_rouge.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T40", "PictureAccept2", {html: {include: 'sait_ne_ind_pas_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T41", "PictureAccept2", {html: {include: 'sait_ind_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],
    ["T42", "PictureAccept2", {html: {include: 'pense_ne_ind_pas_bleue.html'}, as: [["B",'https://imgur.com/POQybWv.png'], ["R",'https://imgur.com/FPY6N5z.png']]}],


  ]
