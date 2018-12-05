var magneticWords = "a, a, about, after, always, am, an, and, and, and, angst, are, as, ass, at, awe, awesome, baby, bag, be, beauty, bed, believe, beneath, best, better, between, bounce, boss, boy, but, butt, by, can, can't, cheese, chocolate, cocktail, come, confess, control, could, crazy, crush, cry, cute, d, d, dear, decide, did, do, doesn't, don't, doormat, dream, dress, drink, e, eat, ed, emotional, er, es, ever, every, exuberant, fabulous, fantastic, fashion, fat, feel, feisty, fill, for, friend, from, full, fulfilled, fun, get, girl, give, go, goddess, going, gorgeous, gossip, great, hand, happiness, happy, has, have, he, her, here, hey, him, his, hope, hour, house, how, husband, I, I, if, in, ing, ing, inner, is, is, issue, it, job, kill, kiss, know, laugh, less, let, like, like, listen, little, look, love, luck, ly, ly, magnificent, make, majestic, man, me, mean, medicate, men, mess, miss, mister, more, mother, must, my, nasty, naughty, need, never, new, night, no, nothing, of, of, old, on, one, or, our, out, pair, pleasure, poetry, power, prissy, proud, push, put, quick, quiet, r, r, ready, really, reasonable, reveal, ridiculous, rule, s, s, said, scream, screw, see, sensible, sensual, sex, she, she, shoe, shove, smart, so, some, sophisticated, soul, swear, taco, tell, than, that, the, the, their, there, they, thing, think, this, through, time, time, to, too, toy, trick, trouble, up, un, un, use, useful, want, was, way, we, welcome, were, which, white, who, will, wine, wink, with, woman, women, wonderful, work, worst, would, wreck, y, you, you, young, your, yummy".split(', ');

(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);

$(document).ready(function () {
	var w = window.innerWidth;

	$('body').disableSelection();

	_.each(magneticWords, function (word) {
		$('<div>', {
		class: 'magnet',
		style: 'position:absolute',
		text: word
		}).css({
			top: Math.random()*180, 
			left: Math.random()*w*0.75 + 140
		}).draggable().appendTo('#magnet_container');
	});

});