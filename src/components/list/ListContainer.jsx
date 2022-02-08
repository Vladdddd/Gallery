import React from 'react';
import { connect } from 'react-redux';
import { getImages, getTotal, setCurrentPhoto } from '../../redux/list-reducer';
import List from './List';
import Paginator from '../common/paginator/Paginator';

class ListContainer extends React.Component {
    componentDidMount() {
        this.props.getImages(this.props.currentPage, this.props.pageSize);
        this.props.getTotal();
    }

    onImgClicked = (photo) => {
        this.props.setCurrentPhoto(photo);
    }

    onPageChanged = (pageNumber) => {
        let { pageSize } = this.props;
        this.props.getImages(pageNumber, pageSize);
    }

    render () {
        return (
            <List images={this.props.images} 
                onPageChanged={this.onPageChanged} 
                currentPage={this.props.currentPage} 
                totalPhotosCount={this.props.totalPhotosCount} 
                pageSize={this.props.pageSize}
                Paginator={Paginator}
                onImgClicked={this.onImgClicked}/>
        );
    }

}

let mapStateToProps = (state) => ({
    images: state.list.images,
    currentPage: state.list.currentPage,
    totalPhotosCount: state.list.totalPhotosCount,
    pageSize: state.list.pageSize
})  

export default connect(mapStateToProps, { getImages, getTotal, setCurrentPhoto })(ListContainer);