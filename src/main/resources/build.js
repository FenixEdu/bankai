({
	appDir:"${r.js.app.dir}",
	baseUrl:"js",
	
	paths: {
		'jquery' : 'empty:',
		'jquery.ui' :'empty:',
		'jquery.tokeninput' :'empty:',
		'jquery.datatables' :'empty:',
		'jquery.scroll' :'empty:',
		'jquery.bootstrap' :'empty:',
		'moment' :'empty:',
		'moment.pt' :'empty:',
		'underscore' :'empty:',
		'mustache' :'empty:',
		'bootstrap.notify' :'empty:',
		'backbone' :'empty:',
		'marionette' :'empty:',
		'less' :'empty:',
		'app' : 'empty:',
        'text': '../../bankai/js/libs/require/text',
        'i18n': '../../bankai/js/libs/require/i18n',
        'templates' : '../templates',
	},
	
	locale:"pt-pt",
	
	skipModuleInsertion:true,
	findNestedDependencies:true,
	skipDirOptimize: true,
	removeCombined:true,
	modules : [
	           {
	        	   name : "router",
	        	   include:["i18n!nls/messages"],
	        	   exclude : [	
								'text',
								'i18n'
							 ]
	           }
	    ],
	dir:"${r.js.dir}",
	optimize:"uglify2",
//	uglify2: {
//		output: { beautify:true},
//		compress : false,
//		mangle:false
//	},
	
})