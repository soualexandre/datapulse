"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 2823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
function generateSiteMap({ hostname , users  }) {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>${hostname}</loc>
       </url>
       ${users.map((username)=>{
        return `
         <url>
             <loc>${`${hostname}/${username}`}</loc>
         </url>
       `;
    }).join("")}
     </urlset>
   `;
}
function SiteMap() {
// getServerSideProps will do the heavy lifting
}
async function getServerSideProps({ req , res  }) {
    const hostname = `https://precedent.dev`;
    // Generate dynamic data for the sitemap
    //   const users = await prisma.user.findMany({
    //     select: {
    //       username: true,
    //     },
    //   });
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap({
        hostname,
        users: []
    });
    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteMap);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2823));
module.exports = __webpack_exports__;

})();