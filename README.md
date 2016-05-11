# esca Web SDK

A simple javascript SDK that provides users with esca Experience payloads. The SDK is setup to authenticate if user site has been configured through the esca dashboard.

# Examples

Simply include the `esca.js` script and initialize. 

Fetch a resource:

```javascript
esca.init()
    .then(function(payload) {
        // build cool experience with payload data
    })
    .catch(function() {
        // error handling
    });
```