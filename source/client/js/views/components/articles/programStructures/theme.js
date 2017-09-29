import { theme } from "react-treebeard";
import { merge } from "lodash";

const Theme = merge(theme, {
	tree: {
		base: {
			listStyle: 'none',
			backgroundColor: '#f5fafa',
			color: '#23221f',
		},
		node: {
			activeLink: {
				background: '#daecf1'
			},
			header: {
				base: {
					color: '#23221f'
				},
				bundle: {
					color: '#666'
				},
				libs: {
					color: '#9DA5AB'
				}
			}
		}
	}
});
export default Theme;

// eslint-disable-next-line
const a = {
	tree: {
		base: {
			listStyle: 'none',
			backgroundColor: '#BBB6AC',
			margin: 0,
			padding: 0,
			color: '#9DA5AB',
			fontFamily: 'lucida grande ,tahoma,verdana,arial,sans-serif',
			fontSize: '14px'
		},
		node: {
			base: {
				position: 'relative'
			},
			link: {
				cursor: 'pointer',
				position: 'relative',
				padding: '0px 5px',
				display: 'block'
			},
			activeLink: {
				background: '#31363F'
			},
			toggle: {
				base: {
					position: 'relative',
					display: 'inline-block',
					verticalAlign: 'top',
					marginLeft: '-5px',
					height: '24px',
					width: '24px'
				},
				wrapper: {
					position: 'absolute',
					top: '50%',
					left: '50%',
					margin: '-7px 0 0 -7px',
					height: '14px'
				},
				height: 14,
				width: 14,
				arrow: {
					fill: '#9DA5AB',
					strokeWidth: 0
				}
			},
			header: {
				base: {
					display: 'inline-block',
					verticalAlign: 'top',
					color: '#9DA5AB'
				},
				connector: {
					width: '2px',
					height: '12px',
					borderLeft: 'solid 2px black',
					borderBottom: 'solid 2px black',
					position: 'absolute',
					top: '0px',
					left: '-21px'
				},
				title: {
					lineHeight: '24px',
					verticalAlign: 'middle'
				}
			},
			subtree: {
				listStyle: 'none',
				paddingLeft: '19px'
			},
			loading: {
				color: '#E2C089'
			}
		}
	}
};