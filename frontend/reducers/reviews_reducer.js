// import {
//     RECEIVE_RESTAURANT,
//     RECEIVE_REVIEW,
//     REMOVE_REVIEW
// } from '../actions/restaurant_actions';

// const reviewsReducer = (state = {}, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_RESTAURANT:
//             return Object.assign({}, state, action.reviews);
//         case RECEIVE_REVIEW:
//             const { review } = action;
//             return Object.assign({}, state, { [review.id]: review });
//         case REMOVE_REVIEW:
//             let newState = Object.assign({}, state);
//             delete newState[action.reviewId];
//             return newState;
//         default:
//             return state;
//     }
// }

// export default reviewsReducer;