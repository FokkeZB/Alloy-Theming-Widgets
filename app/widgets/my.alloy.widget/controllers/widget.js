var args = arguments[0] || {};

if (args.styles) {
	_.each(args.styles, function(value,property) {
		if (typeof value === 'object') {
			$[property].applyProperties(value);
			delete args.styles[property];
		}
	});
	if (_.size(args.styles) > 0) {
		$.getView().applyProperties(args.styles);
	}
}