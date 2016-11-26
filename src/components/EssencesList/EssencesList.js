import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import loaderHOC from '../../hoc/LoaderHOC/LoaderHOC';
import EssenceItem from '../EssenceItem/EssenceItem';

@loaderHOC('ids')
export default class EssencesList extends Component {
	static propTypes = {
		ids: PropTypes.array.isRequired,
		essences: PropTypes.object.isRequired,
		pageSize: PropTypes.number.isRequired,
		ownerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		getItemProps: PropTypes.func.isRequired
	};

	render() {
		return (
			<div>
				{this.props.ids.map(this.renderItem)}
			</div>
		);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	renderItem = id => {
		return <EssenceItem {...this.props.getItemProps(this.props.essences[id])}/>;
	};
}
