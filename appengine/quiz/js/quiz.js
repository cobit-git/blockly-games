/**
 * @license
 * Copyright 2013 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview JavaScript for Quiz game.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Quiz');

goog.require('Blockly.utils.math');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');

goog.require('Quiz.soy');
goog.require('Quiz.Blocks');

BlocklyGames.NAME = 'quiz';

Quiz.pass = false;

/**
 * Initialize Blockly and the Quiz.  Called on page load.
 */
Quiz.init = function() {
  var rtl = BlocklyGames.isRtl();
  // Render the Soy template.
  document.body.innerHTML = Quiz.soy.start({}, null,
      {lang: BlocklyGames.LANG,
       html: BlocklyGames.IS_HTML});

  BlocklyInterface.init();

  BlocklyGames.bindClick("answer1_web", Quiz.wrongAnswer);
  BlocklyGames.bindClick("answer2_web", Quiz.rightAnswer);
  BlocklyGames.bindClick("answer3_web", Quiz.wrongAnswer);

  BlocklyGames.bindClick("answer1", Quiz.wrongAnswer);
  BlocklyGames.bindClick("answer2", Quiz.rightAnswer);
  BlocklyGames.bindClick("answer3", Quiz.wrongAnswer);

  var xml = [
    '<xml>',
      '<block type="quiz_init" x="5" y="5">',
      '<value name="NUMBER">',
        '<block type="quiz_var">',
        '</block>',
      '</value>',
        '<next>',
          '<block type="quiz_repeat">',
            '<statement name="LOOP">',
              '<block type="quiz_add">',
                '<value name="NUMBER">',
                  '<block type="quiz_var">',
                  '</block>',
                '</value>',
              '</block>',
            '</statement>',
          '</block>',
        '</next>',
      '</block>',
    '</xml>'];

  BlocklyInterface.injectReadonly('quizblock_web', xml);

  // Conner display my total point 
  var my_point_div_quiz = document.getElementById('my_point_quiz');
  my_point_div_quiz.textContent = window.localStorage['my_point_storage']

  //BlocklyGames.bindClick('checkButton', Quiz.checkAnswers);
  //BlocklyGames.bindClick('quiz_1_Button', Quiz.doTest1);
  //BlocklyGames.bindClick('quiz_2_Button', Quiz.doTest2);
  BlocklyGames.bindClick('helpButton', function(){Quiz.showHelp(true);});
  BlocklyGames.bindClick('quiz1Button', function(){Quiz.showQuiz1(true);});
};


/**
 * 
 */
Quiz.wrongAnswer = function() {
  console.log("wrong answer!");
  var textDiv = document.getElementById('quizResultText_web');
  textDiv.textContent = 'Failed!!';
  Quiz.pass =false;
  setTimeout(Quiz.showFinalResult, 1000);
  BlocklyDialogs.hideDialog(true);
}

/**
 * 
 */
Quiz.rightAnswer = function() {
  console.log("right answer!");
  var textDiv = document.getElementById('quizResultText_web');
  textDiv.textContent = 'Passed!!';
  Quiz.pass = true;
  setTimeout(Quiz.showFinalResult, 1000);
  BlocklyDialogs.hideDialog(true);
}

/**
 * 
 */
Quiz.checkAnswers = function() {
  var errors = 0;
  var content = document.getElementById('answers');
  var button = document.getElementById('checkButton');
  var rtl = BlocklyGames.isRtl();
  var style = {
    width: '25%',
    left: rtl ? '5%' : '70%',
    top: '5em'
  };
  var action = errors ? BlocklyDialogs.stopDialogKeyDown :
      BlocklyInterface.indexPage;
  BlocklyDialogs.showDialog(content, button, true, true, style, action);
  BlocklyDialogs.startDialogKeyDown();

};

/**
 *  
 */
Quiz.doTest1 = function() {
  console.log("Quiz.doTest1");
  BlocklyDialogs.doTest();
}

/**
 *  
 */
Quiz.doTest2 = function() {
  console.log("Quiz.doTest2");
}

/**
 * Show the help pop-up.
 * @param {boolean} animate Animate the pop-up opening.
 */
Quiz.showHelp = function(animate) {
  var xml = [
      '<xml>',
        '<block type="quiz_init" x="5" y="5">',
        '<value name="NUMBER">',
          '<block type="quiz_var">',
          '</block>',
        '</value>',
          '<next>',
            '<block type="quiz_repeat">',
              '<statement name="LOOP">',
                '<block type="quiz_add">',
                  '<value name="NUMBER">',
                    '<block type="quiz_var">',
                    '</block>',
                  '</value>',
                '</block>',
              '</statement>',
            '</block>',
          '</next>',
        '</block>',
      '</xml>'];

  BlocklyInterface.injectReadonly('quizblock', xml);

  var help = document.getElementById('help');
  var button = document.getElementById('helpButton');
  var style = {
    width: '50%',
    left: '25%',
    top: '5em'
  };
  BlocklyDialogs.showDialog(help, button, animate, true, style,
      BlocklyDialogs.stopDialogKeyDown);
  BlocklyDialogs.startDialogKeyDown();
};

/**
 * Show the help pop-up.
 * @param {boolean} animate Animate the pop-up opening.
 */
Quiz.showQuiz1 = function(animate) {
  var xml = [
      '<xml>',
        '<block type="quiz_init" x="5" y="5">',
        '<value name="NUMBER">',
          '<block type="quiz_var">',
          '</block>',
        '</value>',
          '<next>',
            '<block type="quiz_repeat">',
              '<statement name="LOOP">',
                '<block type="quiz_add">',
                  '<value name="NUMBER">',
                    '<block type="quiz_var">',
                    '</block>',
                  '</value>',
                '</block>',
              '</statement>',
            '</block>',
          '</next>',
        '</block>',
      '</xml>'];

  BlocklyInterface.injectReadonly('quizblock', xml);

  var help = document.getElementById('quiz1');
  var button = document.getElementById('helpButton');
  var style = {
    width: '50%',
    left: '25%',
    top: '5em'
  };
  BlocklyDialogs.showDialog(help, button, animate, true, style,
      BlocklyDialogs.stopDialogKeyDown);
  BlocklyDialogs.startDialogKeyDown();
};

Quiz.showFinalResult = function(animate){
  var content = document.getElementById('quizresult');
  var textDiv = document.getElementById('quizResultText');
  var style = {
    width: '50%',
    left: '25%',
    top: '5em'
  };
  var line = "Failed!!";
  if(Quiz.pass){
    textDiv.textContent = 'Passed!';
    
  }else{
    textDiv.textContent = 'Failed!!';
  }
  BlocklyDialogs.showDialog(content, null, animate, true, style,
    BlocklyDialogs.stopDialogKeyDown);
  BlocklyDialogs.startDialogKeyDown();
};

window.addEventListener('load', Quiz.init);
