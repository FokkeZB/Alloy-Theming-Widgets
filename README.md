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

And pass any styling to your widget like this either in the requiring controller's `TSS` or in a `TSS` files placed in a theme-folder set up to override.

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

## Notes

The Alloy compiler does not not allow to have `"#childLabel"` like keys, so the script assumes the keys like `childLabel` to correspondent to IDs. Styling for the toplevel view of the widget can be passed like the `backgroundColor` in the exampel.

Any further ideas are welcome :)