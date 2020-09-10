(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return y})),n.d(t,"default",(function(){return w}));var r=n(2),a=n(6),i=n(0),o=n.n(i),s=n(84),u=n(91),l=n(86),c=n(80),p=n.n(c),d=37,b=39;var f=function(e){var t=e.block,n=e.children,r=e.defaultValue,a=e.values,s=e.groupId,c=Object(u.a)(),f=c.tabGroupChoices,m=c.setTabGroupChoices,h=Object(i.useState)(r),g=h[0],y=h[1],O=Object(i.useState)(!1),w=O[0],v=O[1];if(null!=s){var j=f[s];null!=j&&j!==g&&a.some((function(e){return e.value===j}))&&y(j)}var T=function(e){y(e),null!=s&&m(s,e)},P=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},x=function(){v(!1)};return Object(i.useEffect)((function(){window.addEventListener("keydown",k),window.addEventListener("mousedown",x)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},a.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(l.a)("tabs__item",p.a.tabItem,{"tabs__item--active":g===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e),k(e)},onFocus:function(){return T(t)},onClick:function(){T(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))};var m=function(e){return o.a.createElement("div",null,e.children)},h={title:"Quickstart - Rebuild",id:"rebuild-quickstart",sidebar_label:"Quickstart"},g={unversionedId:"products/rebuild-api/rebuild/rebuild-quickstart",id:"products/rebuild-api/rebuild/rebuild-quickstart",isDocsHomePage:!1,title:"Quickstart - Rebuild",description:"This page can be used as a guide to getting started using the Rebuild API. It describes getting the product key and executing a request to the API.",source:"@site/docs/products/rebuild-api/rebuild/quickstart-rebuild.mdx",slug:"/products/rebuild-api/rebuild/rebuild-quickstart",permalink:"/glasswall-it-infosec-site/docs/products/rebuild-api/rebuild/rebuild-quickstart",version:"current",sidebar_label:"Quickstart"},y=[],O={rightToc:y};function w(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This page can be used as a guide to getting started using the Rebuild API. It describes getting the product key and executing a request to the API."),Object(s.b)("p",null,"Just want to call the API?"),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.getpostman.com/run-collection/dc8ba5f0a4ecfa29ad12"}),Object(s.b)("img",Object(r.a)({parentName:"a"},{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"})))),Object(s.b)("div",null,Object(s.b)("h2",null,"Get Token"),Object(s.b)("p",null,"A token is required to access the Glasswlal Rebuild API, one can be purchased ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://glasswall-store.com/products/glasswall-rebuild-cloud-in-shared-cloud-environment?variant=33476559274124"}),"here")),Object(s.b)("h2",null,"Http Code - Rebuild File"),Object(s.b)("p",null,"In the following examples choose a language to get started with using the endpoints programmatically."),Object(s.b)("p",null,"A known good file for executing the request can be downloaded  ",Object(s.b)("a",{href:"/examples/Rebuild_Example_Image_That_Rebuilds.bmp",download:!0},"here")),Object(s.b)("h3",null,"Code Examples"),Object(s.b)(f,{defaultValue:"nodejs",values:[{label:"NodeJs",value:"nodejs"},{label:"Python",value:"py"},{label:"C#",value:"c#"}],mdxType:"Tabs"},Object(s.b)(m,{value:"nodejs",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'// This Javascript snippet makes use of the request library\n// Get it with npm: "npm install request" or read the docs:\n// https://www.npmjs.com/package/request\n\nconst request = require("request");\nconst fs = require("fs");\n\nconst jwtToken = "YOUR_JWT_TOKEN";\nconst url = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file";\nconst inputFilePath = "YOUR/INPUT/FILE.docx";\nconst outputFilePath = "YOUR/INPUT/FILE.docx"\n\nconst options = {\n    "encoding": null,\n    "method": "POST",\n    "url": url,\n    "headers": {\n        "Authorization": jwtToken,\n        \'Accept\': \'application/octet-stream\'\n    },\n    formData: {\n        "file": {\n            "value": fs.createReadStream(inputFilePath),\n            "options": {\n                "filename": "/" + inputFilePath,\n                "contentType": null\n            }\n        }\n    }\n}\n\n// Send a file to Glasswall\'s Rebuild API\n// callback passed to request library\nrequest(options, function (error, res) {\n  if (error) throw new Error(error);\n  if (!(res.statusCode == 200 && res.body)) return;    \n\n  // Glasswall has now sanitised and returned this file\n  let data = res.body\n  let buf = Buffer.from(data);\n\n  // Write the sanitised file to the output file path\n  let file = fs.createWriteStream(outputFilePath);\n  file.write(buf);\n  file.end();\n});\n\n'))),Object(s.b)(m,{value:"py",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'# This Python snippet makes use of the requests library\n# Get it with pip: "pip install requests" or read the docs:\n# https://requests.readthedocs.io/en/master/user/install/\n\nimport os\nimport requests\n\njwt_token = "YOUR_JWT_TOKEN"\nurl = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file"\ninput_file_path = r"YOUR/INPUT/FILE.docx"\noutput_file_path = r"YOUR/OUTPUT/FILE.docx"\n\n# Send a file to Glasswall\'s Rebuild API\nwith open(input_file_path, "rb") as f:\n    response = requests.post(\n        url=url,\n        files=[("file", f)],\n        headers={\n            "Authorization": jwt_token,\n            "accept": "application/octet-stream"\n        }\n    )\n\nif response.status_code == 200 and response.content:\n    # Glasswall has now sanitised and returned this file\n    # Create output directory if it does not already exist\n    os.makedirs(os.path.dirname(output_file_path), exist_ok=True)\n    # Write the sanitised file to output file path\n    with open(output_file_path, "wb") as f:\n        f.write(response.content)\n    print("Successfully wrote file to:", os.path.abspath(output_file_path))\nelse:\n    # An error occurred, raise it\n    response.raise_for_status()\n'))),Object(s.b)(m,{value:"c#",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'using System;\nusing System.Globalization;\nusing System.IO;\nusing System.Net;\nusing System.Net.Http;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace RebuildFile\n{\n    class Program\n    {\n        public static void Main()\n        {\n            MainAsync().GetAwaiter().GetResult();\n        }\n\n        static async Task MainAsync()\n        {\n            const string jwtToken = "YOUR_JWT_TOKEN";\n            const string url = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file";\n            const string inputFilePath = @"YOUR/INPUT/FILE.docx";\n            const string outputFilePath = @"YOUR/OUTPUT/FILE.docx";\n\n            var request = new HttpRequestMessage(HttpMethod.Post, url);\n            request.Headers.Add("Accept", "application/octet-stream");\n            request.Headers.Add("Authorization", jwtToken);\n\n            request.Content = new MultipartFormDataContent("Boundary----" + DateTime.Now.ToString(CultureInfo.InvariantCulture))\n            {\n                {new ByteArrayContent(File.ReadAllBytes(inputFilePath)), "file", "/" + inputFilePath}\n            };\n\n            using (var client = new HttpClient())\n            {\n                // Send a file to Glasswall\'s Rebuild API\n                using (var message = await client.SendAsync(request, CancellationToken.None))\n                {\n                    if (message.StatusCode == HttpStatusCode.OK && message.Content != null)\n                    {\n                        // Glasswall has now sanitised and returned this file\n                        var rebuiltFile = await message.Content.ReadAsByteArrayAsync();\n\n                        // Write the sanitised file to output file path\n                        File.WriteAllBytes(outputFilePath, rebuiltFile);\n                    }\n                }\n            }\n        }\n    }\n}\n'))))),Object(s.b)("p",null,"In the next documents, there will be information surrounding how the API works, how to configure requests and alternative endpoints to use."))}w.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},90:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},91:function(e,t,n){"use strict";var r=n(0),a=n(90);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);