import 'intersection-observer';

const lazyLoad = (target, type) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const { target } = entry;
        let src = target.getAttribute('data-src');

        switch (type) {
          case 'img':
            target.setAttribute('src', src);
            break;
          case 'div':
            target.style.backgroundImage = `url(${src})`;
            break;
          case 'border':
            src = target.getAttribute('border-src');
            target.style.borderImageSource = `url(${src})`;
            break;
          default:
            console.log('Error: Not a valid type to lazy load');
        }

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

export { lazyLoad };
