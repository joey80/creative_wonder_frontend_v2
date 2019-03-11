import 'intersection-observer';

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
                let src = tgt.getAttribute('data-src');

                switch (type) {
                    case 'img':
                        tgt.setAttribute('src', src);
                        break;
                    case 'div':
                        tgt.style.backgroundImage = `url(${src})`;
                        break;
                    case 'border':
                        src = tgt.getAttribute('border-src');
                        tgt.style.borderImageSource = `url(${src})`;
                        break;
                    default:
                        console.log('Error: Not a valid type to lazy load');
                }

                observer.disconnect();
            }
        })
    });

    io.observe(target);
};