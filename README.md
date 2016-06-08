# esca Web SDK

A simple javascript SDK that provides users with esca Experience payloads. The SDK is set up to authenticate if user's site has been configured through the esca dashboard.

# Examples

Simply include the `esca.js` script and initialize. 

### Fetch a payload:

```javascript
const clientKey = '123' // Retrieve from esca dashboard

esca.payload(clientKey)
    .then(function(payload) {
        // Do cool things
    }, function(error) {
        // Try again :(
    });
```


### Create an experience:

```javascript
const clientKey = '123' // Retrieve from esca dashboard

esca.createExperience({
    appKey: 'SrMHhq0M9ogmZHc18A72SvtzkNJCbOhiORGYd9Jo',
    name: 'Smart Car',
    url: 'http://s.box/esca',
    slots: [{
        key: "Car Details",
        keys: [
            {
                key: "make"
            },
            {
                key: "model"
            },
            {
                key: "color"
            }
        ]
    }]
})
.then(function(response) {
    // Success! Go build your IOT app
}, function(error) {
    // Error
});
```


## Full Workflow

Visit lionfish/apps
Make new app
Click the rightmost icon for a new JS app
Save
Refresh page
Click on your new app
Get the app key

Create an experience using this SDK. You need to include the SDK and configure your experience on a web page. Reference the documentation above. Use the app key we just got from the dashboard.

