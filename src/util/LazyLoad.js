/**
* LazyLoad.js - A wrapper for Intersection Observer API
*
* Author - Joey Leger (2019)
* Description - Tracks divs or images for when they enter the viewport.
*               When they become visible the image is lazy loaded into the DOM
*
*/

export function lazyLoad(target, type) {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tgt = entry.target;
                const src = tgt.getAttribute('data-src');

                if (type === 'img') {
                    tgt.setAttribute('src', src);

                } if (type === 'div') {
                    tgt.style.backgroundImage = `url(${src})`;
                }

                observer.disconnect();
            }
        })
    });

    io.observe(target);
};