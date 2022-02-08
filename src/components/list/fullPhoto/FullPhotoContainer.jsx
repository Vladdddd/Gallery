import React from 'react';
import { connect } from 'react-redux';
import FullPhoto from './FullPhoto';
import { getImage, setImageId } from '../../../redux/list-reducer';

class FullPhotoContainer extends React.Component {

    componentDidMount() {
        this.props.setImageId();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.imageId !== this.props.imageId) {
            this.props.getImage(this.props.imageId);
        }
    }

    render() {
        return (
            <FullPhoto currentPhoto={this.props.currentPhoto} />
        );
    }

}

let mapStateToProps = (state) => ({
    currentPhoto: state.list.currentPhoto,
    imageId: state.list.imageId
})

export default connect(mapStateToProps, { getImage, setImageId })(FullPhotoContainer);