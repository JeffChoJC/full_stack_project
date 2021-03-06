import * as ApiUtil from '../util/favorite_api_util';

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';

const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE,
    favorite
})

const removeFavorite = id => ({
    type: REMOVE_FAVORITE,
    id
})

const receiveFavorites = favorites => ({
    type: RECEIVE_FAVORITES,
    favorites
})

export const createFavorite = favorite => dispatch => (
    ApiUtil.createFavorite(favorite).then(favorite => dispatch(receiveFavorite(favorite)))
)

export const fetchFavorites = userId => dispatch => (
    ApiUtil.fetchFavorites(userId).then(favorites => dispatch(receiveFavorites(favorites)))
);

export const deleteFavorite = favorite => dispatch => (
    ApiUtil.deleteFavorite(favorite.id).then(response => dispatch(removeFavorite(favorite.user_id)))
);