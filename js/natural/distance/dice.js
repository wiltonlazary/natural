/*
 Copyright (c) 2011, John Crepezzi, Chris Umbel

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

goog.provide('natural.distance.Dice');



/**
 * Dice coefficient.
 * @constructor
 */
natural.distance.Dice = function() {

};


/**
 * Get all of the pairs of letters for a string
 * @param {string} str
 * @return {Array.<string>}
 * @protected
 */
natural.distance.Dice.letterPairs = function(str) {
  var numPairs = str.length - 1;
  var pairs = new Array(numPairs);
  for (var i = 0; i < numPairs; i++) {
    pairs[i] = str.substring(i, i + 2);
  }
  return pairs;
};


/**
 * Get all of the pairs in all of the words for a string
 * @param {string} str
 * @return {Array.<string>}
 * @protected
 */
natural.distance.Dice.wordLetterPairs = function(str) {
  var allPairs = [], pairs;
  var words = str.split(/\s+/);
  for (var i = 0; i < words.length; i++) {
    pairs = natural.distance.Dice.letterPairs(words[i]);
    allPairs.push.apply(allPairs, pairs);
  }
  return allPairs;
};


/**
 * Perform some sanitization steps
 * @param {string} str
 * @return {string}
 * @protected
 */
natural.distance.Dice.sanitize = function(str) {
  return str.toLowerCase().replace(/^\s+|\s+$/g, '');
};


/**
 * Compare two strings, and spit out a number from 0-1
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
natural.distance.Dice.compare = function(str1, str2) {
  var pairs1 = natural.distance.Dice.wordLetterPairs(
      natural.distance.Dice.sanitize(str1));
  var pairs2 = natural.distance.Dice.wordLetterPairs(
      natural.distance.Dice.sanitize(str2));
  var intersection = 0, union = pairs1.length + pairs2.length;
  var i, j, pair1, pair2;
  for (i = 0; i < pairs1.length; i++) {
    pair1 = pairs1[i];
    for (j = 0; j < pairs2.length; j++) {
      pair2 = pairs2[j];
      if (pair1 == pair2) {
        intersection++;
        delete pairs2[j];
        break;
      }
    }
  }
  return 2 * intersection / union;
};
