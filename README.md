# Widget theming workaround

This project shows how to support both widget styling through the requiring controller and theming until [ALOY-378](https://jira.appcelerator.org/browse/ALOY-378) is resolved.

Clone or download the repo, run it and you'll see it in action.

## How to

Just add these lines to your widget controller:

```javascript
var args = arguments[0] || {};

if (args.styles) {
	var properties = {};
	_.each(args.styles, function(value,property) {
		if (typeof value === 'object') {
			$[property].applyProperties(value);
		} else {
			properties[property] = value;
		}
	});
	if (_.size(properties) > 0) {
		$.getView().applyProperties(properties);
	}
}
```

And pass any styling to your widget like this, either in the requiring controller's `TSS` or in a `TSS` file placed in a theme-folder using the controller's name.

```xml
"#myWidget": {
	
	styles: {
		backgroundColor: "#0000FF",
		
		childLabel: {
			color: "#00FFFF"
		}
	}
}
```
