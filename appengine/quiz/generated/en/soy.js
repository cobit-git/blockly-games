// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Quiz.soy.
 */

goog.provide('Quiz.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Quiz.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Quiz_animal1">Duck</span><span id="Quiz_animal1Pic">duck.jpg</span><span id="Quiz_animal1PicHeight">70</span><span id="Quiz_animal1PicWidth">100</span><span id="Quiz_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Quiz_animal1Trait1">Feathers</span><span id="Quiz_animal1Trait2">Beak</span><span id="Quiz_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Quiz_animal2">Cat</span><span id="Quiz_animal2Pic">cat.jpg</span><span id="Quiz_animal2PicHeight">70</span><span id="Quiz_animal2PicWidth">100</span><span id="Quiz_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Quiz_animal2Trait1">Whiskers</span><span id="Quiz_animal2Trait2">Fur</span><span id="Quiz_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Quiz_animal3">Bee</span><span id="Quiz_animal3Pic">bee.jpg</span><span id="Quiz_animal3PicHeight">70</span><span id="Quiz_animal3PicWidth">100</span><span id="Quiz_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Quiz_animal3Trait1">Honey</span><span id="Quiz_animal3Trait2">Stinger</span><span id="Quiz_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Quiz_animal4">Snail</span><span id="Quiz_animal4Pic">snail.jpg</span><span id="Quiz_animal4PicHeight">70</span><span id="Quiz_animal4PicWidth">100</span><span id="Quiz_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Quiz_animal4Trait1">Shell</span><span id="Quiz_animal4Trait2">Slime</span><span id="Quiz_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Quiz_picture">picture:</span><span id="Quiz_qlegs">legs:</span><span id="Quiz_qlegsChoose">choose...</span><span id="Quiz_traits">traits:</span><span id="Quiz_error0">Perfect!\\nAll %1 blocks are correct.</span><span id="Quiz_error1">Almost! One block is incorrect.</span><span id="Quiz_error2">%1 blocks are incorrect.</span><span id="Quiz_tryAgain">The highlighted block is not correct.\\nKeep trying.</span></div>';
};
if (goog.DEBUG) {
  Quiz.soy.messages.soyTemplateName = 'Quiz.soy.messages';
}


Quiz.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Quiz.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Quiz', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="quiz1Button" class="primary">Quiz 1</button>'}, null, opt_ijData) + '<div id="my_point_head_quiz">My point is<div id="my_point_quiz"></div></div><div id= "guiztext">Look at following blocks. If you run these blocks, what is the value of \'sum\'?</div><div id="quizblock_web"></div><div class="farSide" style="padding: 1ex 3ex 0; float: left;"><button id = answer1_web class="secondary" >25</button><button id = answer2_web class="secondary">30</button><button id = answer3_web class="secondary">35</button></div><div id="quizResultText_web"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Look at following blocks. If we run following blocks, what is value of "sum"?</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="quiz1" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Look at following blocks. If we run following blocks, what is value of "sum"?</div><div id="quizblock" class="readonly"></div><div class="farSide" style="padding: 1ex 3ex 0"><button id = answer1 class="secondary">25</button><button id = answer2 class="secondary">30</button><button id = answer3 class="secondary">35</button></div></div><div id="quizresult" class="dialogHiddenContent"><div id="quizResultText"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Quiz.soy.start.soyTemplateName = 'Quiz.soy.start';
}
