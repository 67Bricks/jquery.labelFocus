jquery.labelFocus
=================

A JQuery plugin to increase accessibility of form elements for keyboard users

labelFocus is a JQuery plugin to enable highlighting of the labels of form fields when those form fields are focussed. It is intended to increase the accessibility of form elements - particularly checkboxes and radio buttons - when accessed by the keyboard. The problem it aims to overcome is that most browsers make it very hard to see when a checkbox or radio button has the focus.

The plugin works by adding the “focus” CSS class (or other class specified by the focusClass option) to the label of a form field, when that form field receives focus.

When used on a form element within a table, it will also apply the same CSS class to any “th” elements that appear to be appropriate for the current item - this is not very sophisticated, and may well fail or highlight the wrong header if used on a table with colspans or rowspans. This behaviour can be disabled by setting the highlightTables option to false.

Typical usage:

    $(document).ready(function() {
      $('input[type=checkbox],input[type=radio]').labelFocus();
    });

This plugin requires JQuery 1.3+ (it was developed under JQuery 1.3.2).
