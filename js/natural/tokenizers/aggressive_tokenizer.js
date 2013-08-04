/*
Copyright (c) 2011, Chris Umbel

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

goog.provide('natural.AggressiveTokenizer');
goog.require('natural.AbstractTokenizer');



/**
 * Agrassive tokenizer.
 * @constructor
 */
natural.AggressiveTokenizer = function() {
  goog.base(this);
};
goog.inherits(natural.AggressiveTokenizer, natural.AbstractTokenizer);


/**
 * @inheritDoc
 */
AggressiveTokenizer.prototype.tokenize = function(text) {
  // break a string up into an array of tokens by anything non-word
  return text.split(/\W+/).map(function(x) {
    return x.trim();
  });
};

