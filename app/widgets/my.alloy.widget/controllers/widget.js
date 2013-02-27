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