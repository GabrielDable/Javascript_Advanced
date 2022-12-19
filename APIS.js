

/*

 - Fetch Method

It is afunction to request from the server and load the information on webpages.
I node.js this function is currently under implementation. It loads the metadata of a website into a promise object.

*/

fetch("http://example.com/api/endpoint")
  .then((response) => {
    // Do something with response
  })
  .catch(function (err) {
    console.log("Unable to fetch -", err);
  });


/*


- HTTP Request and URL

   - HTTP (Hypert-Text-Transfer-Protocol)
https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

HTTP is a client-side protocol to fetch reousrce such as HTML documents from the server therefore a http request is made by a client-browser.

The request made form the browser fetches sub.documents to build-up a complete wed-document made up of:

    Sub-documents 

        css for layout
        png for image
        hmtl for pages
        mp4 for videos
        jpg for adds.
        js for scripts


To make the request, the client uses the URL (Uniform Resource Location)
The URL locates a resource that exist on internet.
URL are mostly used when a client make a http request to a Server. 

Between the client request and the server resposnse, there are several entities named proxies.

To display a web-page:

    Client makes a http resquet - server responds with a html document - Cliet fetches the html document - The html document is parsed
    and therefore new solicitations are made to execute js scripts, css layout information and subfiles such jpgs and mp4 -
    The web browser combines the different documents and requested resources to display the wbe document.
    The web page is also a hyprtext document. It means it can have links (butons) to fetch another pages. The browser interprets
    the directions as new https requests


 Https is a necrypted version of HTTP
    
Proxies: 
    caching
    filtering
    load balacing - Allow different servers to handle multiple request.
    authentication - to control access to different controls.
    logging - storage of historical information 


     - URL

     Is a string the locates a web document.

     The componentes for a URL and its syntax


        scheme: the protocol to access the content from the internet (https out https)
        host: the name indentifier of the host the holds the resource.
        path: identifies the specific content the client wants to access. 
        fragment_identifier: followed by a hash #. It points the web browser to a function to the intem retrieved. its commonly used to indicate sunsection in a page.
    
        example: notion kanban boards are subsections indicated with the fragment identifier of the web documnt url. 


        scheme://host:port/path?query

        https://www.ibm.com/docs/en/cics-ts/5.3?topic=concepts-components-url#dfhtl_uricomp


        path: /docs/en/cics-ts/5.3
        query: topic=concepts-components-url
        host: IBM
        protocol: http. 
        fragment_indentifier: #dfhtl_uricomp

*/

