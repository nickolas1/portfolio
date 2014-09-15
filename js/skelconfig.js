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
		        gutters: 4
			}		
		},
		narrow: {
		    range: "-960",
		    containers: "fluid",
		    grid: {
		        gutters: 4
			}
		},
		mobile: {
		    range: "-480",
		    containers: "fluid",
		    grid: {
		        gutters: 4,
		        collapse: true
			}
		}
	}
};