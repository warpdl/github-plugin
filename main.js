// This file includes the main logic of the extension, 
// you can import other files here using conventional 
// 'require' syntax.
// Example:
// const myModule = require('./myModule');

// extract function is called when the extension is 
// activated once the url to download has matched this 
// extension's regex pattern.
// This function should return the actual url to download.
// Example:
// let url be https://example.com/view/12345 but the actual download link is https://example.com/download/12345
// so the extract function should return https://example.com/download/12345 and hence we will replace 
// 'view' with 'download' in the url to get the actual download link.
function extract(url) {
    return url.replace('view', 'download');
}