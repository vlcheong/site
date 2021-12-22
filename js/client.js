$(document).ready(function () {
    resizeSVG();

    // make the chart
    const s = Snap('#clients');
    s.attr ({ viewBox: '0 0 952 526' });

    Snap.load("images/clients.svg?a=0", function (f) {
        const circle1 = f.select('#circle-1');
        const circle2 = f.select('#circle-2');
        const circle3 = f.select('#circle-3');
        const circle4 = f.select('#circle-4');

        const circleClick1 = f.select('#Aeon');
        const circleClick2 = f.select('#MnS');
        const circleClick3 = f.select('#MetroSG');
        const circleClick4 = f.select('#Alpro');

        const icons = f.selectAll('.icon');
        s.append(f);

        const iconsAnim = 1500;
        const smallCircleAnim = 4000;
        let currentIcon = 0;
        let circleTimeout, iconTimeout;

        let bbox = circle1.getBBox();
        const r1 = {transform: 'r-360, ' + bbox.cx + ', ' + bbox.cy};

        bbox = circle2.getBBox();
        const r2 = {transform: 'r-360, ' + bbox.cx + ', ' + bbox.cy};

        bbox = circle3.getBBox();
        const r3 = {transform: 'r-360, ' + bbox.cx + ', ' + bbox.cy};

        bbox = circle4.getBBox();
        const r4 = {transform: 'r-360, ' + bbox.cx + ', ' + bbox.cy};

        animateSmallCircle();
        animateIcons();

        circleClick1.click(function () {
            //$("#client-aeon").modal();
            $.magnificPopup.open({
                items: {
                    src: '#client-aeon' // can be a HTML string, jQuery object, or CSS selector
                },
                type: 'inline',
                showCloseBtn: false
            });
        });
        circleClick2.click(function () {
            $.magnificPopup.open({
                items: {
                    src: '#client-mns'
                },
                type: 'inline',
                showCloseBtn: false
            });
        });
        circleClick3.click(function () {
            $.magnificPopup.open({
                items: {
                    src: '#client-metro'
                },
                type: 'inline',
                showCloseBtn: false
            });
        });
        circleClick4.click(function () {
            $.magnificPopup.open({
                items: {
                    src: '#client-alpro'
                },
                type: 'inline',
                showCloseBtn: false
            });
        });

        if (!jQuery.browser.mobile) {
            $('.tooltip1').powerTip({
                followMouse: true
            });
            $('#helper-text').hide();
        } else {
            $('#helper-text').show();
        }

        // Loop the animation
        function animateSmallCircle () {
            circle1.transform('');
            circle2.transform('');
            circle3.transform('');
            circle4.transform('');

            circle1.animate(r1, smallCircleAnim, mina.linear);
            circle2.animate(r2, smallCircleAnim, mina.linear);
            circle3.animate(r3, smallCircleAnim, mina.linear);
            circle4.animate(r4, smallCircleAnim, mina.linear);
            if (circleTimeout) {
                clearTimeout(circleTimeout);
            }
            circleTimeout = setTimeout(animateSmallCircle, smallCircleAnim);
        }

        function animateIcons () {
            icons[currentIcon].addClass('flash');
            currentIcon += 1;
            if (currentIcon !== icons.length) {
                const time = Math.floor((Math.random() * iconsAnim));
                if (iconTimeout) {
                    clearTimeout(iconTimeout);
                }
                iconTimeout = setTimeout(animateIcons, time);
            }
        }
    });
});

function resizeSVG () {
    const windowWidth = $('#clients-container').width();
    const height = (windowWidth / 952) * 526;
    $('#clients-container').height(height);
}

$(window).resize(function () {
    resizeSVG();
})