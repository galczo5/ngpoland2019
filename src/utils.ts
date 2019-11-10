function showApplicationAreas(selector: string) {
  const element = document.querySelector(selector);
  element.classList.add('app-area');
}

function hideApplicationAreas(selector: string) {
  const element = document.querySelector(selector);
  element.classList.remove('app-area');
}

// tslint:disable-next-line:only-arrow-functions
(function() {

  const apps = [
    'app-root',
    'app-header',
    'app-widget',
    'app-footer'
  ];

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === '1') {
      apps.forEach(x => showApplicationAreas(x));
    }

    if (event.key.toLowerCase() === '2') {
      apps.forEach(x => hideApplicationAreas(x));
    }
  });

})();
