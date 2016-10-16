function onMaker(o, e, extra){
	var value
	var defaults= {
		setter: function(newValue){
			if(value){
				this.removeListener(value)
				value= newValue
			}
		},
		getter: function(){
			return value
		},
	}
	var props= Object.create({}, extra, defaults)
	Object.defineProperty(o, "on"+e, props)
	return o
}

module.exports= onMaker
module.exports.onMaker= onMaker
module.exports.default= onMaker
