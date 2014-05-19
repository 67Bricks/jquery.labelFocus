/**
	labelFocus is a JQuery plugin to enable highlighting of the labels of form
	fields when those form fields are focussed. It is intended to increase
	the accessibility of form elements - particularly checkboxes and radio buttons -
	when accessed by the keyboard. The problem it aims to overcome is that 
	most browsers make it very hard to see when a checkbox or radio button
	has the focus.

	The plugin works by adding the "focus" CSS class (or other class specified
	by the focusClass option) to the label of a form field, when that form
	field receives focus. 

	When used on a form element within a table, it will also apply the same CSS
	class to any "th" elements that appear to be appropriate for the current item - 
	this is not very sophisticated, and may well fail or highlight the wrong 
	header if used on a table with colspans or rowspans. This behaviour can 
	be disabled by setting the highlightTables option to false.

	Typical usage:

	$(document).ready(function() {
		$('input[type=checkbox],input[type=radio]').labelFocus();
	});
	
	This plugin requires JQuery 1.3+ (it was developed under JQuery 1.3.2).

	Copyright (C) 2009, Inigo Surguy, 67 Bricks Ltd.
	Released under the terms of the Lesser GNU Public License.
	(see LICENSE.txt or http://www.gnu.org/licenses/lgpl-3.0.txt)
*/

(function($){ 
	$.fn.labelFocus = function(options) {  
		var defaults = {  
			focusClass : "focus",
			highlightTables : true
		};
		var options = $.extend(defaults, options);

		var addFocus = function(i, item) { $(this).addClass(options.focusClass); };
		var removeFocus = function(i, item) { $(this).removeClass(options.focusClass); };

		var applyFocus = function(fn, item) {	
			var id = item.attr('id') || item.attr('name');
			if (id) $("label[for='"+id+"']").each(fn);
			item.closest("label").each(fn);
			if (options.highlightTables) {
				item.closest("tr").find("th[scope=row]").each(fn);
				var table = item.closest("table");
				item.closest("td").each( function(i,td) {
					var offset = jQuery.inArray( td, td.parentNode.cells );
					table.find("tr:first th:eq("+offset+")").each(fn);
				});
			};
		};
		return this.focus( function() { applyFocus(addFocus, $(this)); } ).blur( function() { applyFocus(removeFocus, $(this)); } );
	};  
})(jQuery); 
