import { listAPI } from '../api/api';

const SET_IMAGES = '/list/SET_IMAGES';
const SET_CURRENT_PAGE = '/list/SET_CURRENT_PAGE';
const SET_TOTAL_PHOTOS_COUNT = '/list/SET_TOTAL_PHOTOS_COUNT';
const SET_CURRENT_PHOTO = '/list/SET_CURRENT_PHOTO';
const SET_IMAGE_ID = '/list/SET_IMAGE_ID';

let initialState = {
    images: [],
    currentPage: 1,
    totalPhotosCount: 10,
    pageSize: 4,
    currentPhoto: null,
    imageId: null
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES: {
            return {
                ...state,
                images: action.images
            };
        }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        case SET_TOTAL_PHOTOS_COUNT:
            return {
                ...state,
                totalPhotosCount: action.count
            }

        case SET_CURRENT_PHOTO:
            sessionStorage.setItem("Image_id", action.photo.id);
            
            return {
                ...state,
                currentPhoto: action.photo
            }

        case SET_IMAGE_ID:
            const id = sessionStorage.getItem("Image_id");

            return {
                ...state,
                imageId: id
            }

        default:
            return state;
    }
}

export const setImages = (images) => ({ type: SET_IMAGES, images })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalPhotosCount = (count) => ({ type: SET_TOTAL_PHOTOS_COUNT, count })
export const setCurrentPhoto = (photo) => ({ type: SET_CURRENT_PHOTO, photo })
export const setImageId = () => ({ type: SET_IMAGE_ID })

export const getImages = (page, size) => async (dispatch) => {
    let data = await listAPI.getImages(page, size);

    dispatch(setCurrentPage(page));
    dispatch(setImages(data));
}

export const getTotal = () => async (dispatch) => {
    let data = await listAPI.getTotal();

    dispatch(setTotalPhotosCount(data.photos));
}

export const getImage = (id) => async (dispatch) => {
    let data = await listAPI.getImage(id);

    dispatch(setCurrentPhoto(data));
} 

export default listReducer;