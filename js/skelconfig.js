window._skel_config = {
	prefix: 'css/style',
	boxModel: 'border',
	/*resetCSS: true,*/
	normalizeCSS: true,
	useOrientation: true,
	breakpoints: {
		normal: {
		    range: "*",
		    containers: 960,
		    grid: {
		        gutters: "2%"
			}		
		},
		narrow: {
		    range: "-960",
		    containers: "fluid",
		    grid: {
		        gutters: "2%"
		    }
		},
		mobile: {
		    range: "-480",
		    containers: "fluid",
		    grid: {
		        collapse: 2
		    }
		}
	}
};