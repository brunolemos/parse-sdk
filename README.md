# What is this?
This [Meteor](http://meteor.com/)'s [package](https://atmospherejs.com/brunolemos/parse-sdk) is a simple wrapper to Facebook's [Parse Javascript SDK](https://parse.com/docs/js/guide)

##### What does it do?
This package will simply add a global Parse object to your application and keep it updated for you.

##### What doesn't it do?
It does not provide any deep integration with your collections.

# Parse?
[Parse](https://parse.com/) is a cloud provided by Facebook to easily power cross-platform apps. It provides:

  - Database storage
  - Push notifications
  - Analytics
  - [More](https://parse.com/products)

# How to use it?
### Installation
In your meteor project:

```sh
meteor add brunolemos:parse-sdk
```

In your /lib folder:

```javascript
Meteor.startup(function() {
  Parse.initialize("APPLICATION ID", "JAVASCRIPT KEY");
});
```

### Docs
You will have to follow the Parse's official javascript [guide](https://parse.com/docs/js/guide) / [examples](https://parse.com/tutorials#javascript) to see how to use it.

### Version
This package will follow the Parse Javacript SDK versioning.

#### New version?

If you see that a newer version is available, ping me on twitter at [@brunolemos](https://twitter.com/brunolemos) :)
