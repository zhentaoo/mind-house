/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  // console.log(
  //   Vue, // the version of Vue being used in the VuePress app
  //   '\n',
  //   options, // the options for the root Vue instance
  //   '\n',
  //   router, // the router instance for the app
  //   '\n',
  //   siteData
  // )
  document.onclick = function(e){
      var e = (e||event);
      var o = e["target"] || e["srcElement"];
      var type = o.tagName.toLowerCase()
      if(type === 'img') {
        console.log(o);
        window.open(o.src)
      }
  }
}
