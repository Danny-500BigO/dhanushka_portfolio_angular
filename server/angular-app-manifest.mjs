
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/dhanushka_portfolio_angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-G6XQ7V7O.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 43204, hash: 'eb433731d998610ee02ac1789786a74fd661d2010b455bbb4062ada80d92197f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1503, hash: '85419d2caf9cf37075e01b8248f451f966d0af7d16b567d37de8fb5ae7857404', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TOGMHOO7.css': {size: 256988, hash: 'qyDUtPkz0/I', text: () => import('./assets-chunks/styles-TOGMHOO7_css.mjs').then(m => m.default)}
  },
};
