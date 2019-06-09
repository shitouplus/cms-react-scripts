function loadModels () {
  const models = require.context('./', true, /\w+\/index.js/);
  const stores = {};
  models.keys().forEach(key => {
    const matched = key.match(/(\w+)(?=\/index.js)/i);
    console.log(matched);
    if (matched && matched.length > 1) {
      const name = matched[1];
      stores[name] = models(key).default;
    }
  });
  return stores;
}

const stores = loadModels();

export default stores;
