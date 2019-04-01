
var shuffleSequence = seq(
                             "preload",
                             "consent",
                             "warning",
                             "instructions",
                             "soundtest",
                             "T1", //"T2", "T3", "T4", "T5",
                             // "T6", "T7", "T8", "T9", "T10",
                             // "T11", "T12", "T13", "T14", "T15",
                             // "T16", "T17", "T18", "T19", "T20",
                             // "T21", "T22", "T23", "T24", "T25",
                             // "T26", "T27", "T28", "T29", "T30",
                             // "T31", "T32", "T33", "T34", "T35",
                             // "T36", "T37", "T38", "T39", "T40",
                             // "T41", "T42",
                             "finished",
                             "subj_info",
                             "sr",
                             "code"
                            );

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Veuillez attendre la phrase suivante.",
        errorMessage: "Faux. Veuillez attendre la phrase suivante."
    },
    "SuivantMessage", {
        hideProgressBar: false,
    },
    "CommencerMessage", {
        hideProgressBar: false,
    },
    "FinirMessage", {
        hideProgressBar: false,
    },
    "FrenchMessage", {
        hideProgressBar: false,
    },
    "FrenchForm", {
        hideProgressBar: false,
        continueOnReturn: true,
    },
    "AcceptabilityJudgment", {
        hideProgressBar: false,
        instructions: null,
        hasCorrect: false,
        presentAsScale: true,
        presentHorizontally: true,
    },
];

var manualSendResults = true;

var IMAGES_TO_PRELOAD = [

    "https://imgur.com/CKEa3Zr.png", // 8-4c0s -   every-circle,                 conj & known conditions
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

var items = [


    ["preload", "FrenchPreloader", { }],

    ["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    ["setcounter", "__SetCounter__", { }],

    ["consent", "FrenchForm", {html: {include: 'french_agreement.html'}}],

    ["warning", "SuivantMessage", {html: {include: 'fact_fran_warning.html'}}],

    ["instructions","SuivantMessage", {html: {include: 'fact_fran_instructions.html'}}],

    ["soundtest", "CommencerMessage", {html: {include: 'fact_fran_sound.html'}}],

    ["finished", "FinirMessage", {html: {include: 'fact_fran_finish.html'}}],

    ["subj_info", "FrenchForm", {html: {include: 'french_questionary.html'}}],

    ["code", "FrenchDoneForm", {html: {include: 'french_number_fact.html'}}],

    ["T1", "AcceptabilityJudgment", {s: "Rachel sait qu'il n’est pas dans la boite bleue."},
                                      {q: "Laquelle est votre choix?"},
                                      {as: "Certainement dans la bleue", "Certainement dans la rouge"}],
];
