# confluence-unwatcher

This browser extension will automatically disable the "Notify watchers" option in a Confluence page.

#### Install

Chrome
- Go to chrome://extensions/
- Toggle Developer mode
- Go to Load Unpacked
- Select the directory where the manifest.json is located and open it

Firefox
- Go to about:debugging
- Go to "Load temporary add-on"
- Select the manifest.json file


#### Notes

Chrome will show some errors at the plugin install, this is caused by the "browser_specific_settings" key in the manifest.json that is not yet recognized by chrome.
It is required for Firefox, to access the storage API we have to provide a valid extension id, see here https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id

