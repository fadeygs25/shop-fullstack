const BASE_URL = 'http://localhost:5000';

export const FOODS_URL = BASE_URL + '/api/foods';
export const FOODS_TAGS_URL = FOODS_URL + '/tags';
export const FOODS_BY_SEARCH_URL = FOODS_URL + '/search/';
export const FOODS_BY_TAG_URL = FOODS_URL + '/tag/';
export const FOOD_BY_ID_URL = FOODS_URL + '/';

export const USER_URL = BASE_URL + '/api/user';
export const USER_FETCH_URL = USER_URL + '/getme';
export const USER_BY_ID_URL = USER_URL + '/find/';
export const USERS_FETCH_URL = USER_URL + '/all';
export const USER_LOGIN_URL = USER_URL + '/signin';
export const USER_REGISTER_URL = USER_URL + '/signup';
export const USER_LOGOUT_URL = USER_URL + '/logout';
export const USER_DELETE_URL = USER_URL + '/delete/';


export const PRODUCTS_URL = BASE_URL + '/api/product';
export const PRODUCTS_FETCH_URL = PRODUCTS_URL + '/all';
export const PRODUCT_CREATE_URL = PRODUCTS_URL + '/create';
export const PRODUCT_DELETE_URL = PRODUCTS_URL + '/delete/';
export const PRODUCT_BY_ID_URL = PRODUCTS_URL + '/find/';


export const CATEGORIES_URL = BASE_URL + '/api/category';
export const CATEGORIES_FETCH_URL = CATEGORIES_URL + '/all';
export const CATEGORY_CREATE_URL = CATEGORIES_URL + '/create';
export const CATEGORY_DELETE_URL = CATEGORIES_URL + '/delete/';
export const CATEGORY_BY_ID_URL = CATEGORIES_URL + '/find/';


export const RATINGS_URL = BASE_URL + '/api/rating';
export const RATINGS_FETCH_URL = RATINGS_URL + '/all';
export const RATING_CREATE_URL = RATINGS_URL + '/create';
export const RATING_DELETE_URL = RATINGS_URL + '/delete/';
export const RATING_BY_ID_URL = RATINGS_URL + '/find/';
export const RATING_BY_PRODUCT_URL = RATINGS_URL + '/byProduct/';


export const CARTS_URL = BASE_URL + '/api/cart';
export const CARTS_FETCH_URL = CARTS_URL + '/all';
export const CART_CREATE_URL = CARTS_URL + '/create';
export const CART_DELETE_URL = CARTS_URL + '/delete/';
export const CART_BY_ID_URL = CARTS_URL + '/find/';
export const CART_BY_PRODUCT_URL = CARTS_URL + '/byProduct/';
export const CART_BY_USER_URL = CARTS_URL + '/mine';
export const CART_UPDATE_URL = CARTS_URL + '/update/';



export const ORDERS_URL = BASE_URL + '/api/order';
export const ORDERS_FETCH_URL = ORDERS_URL + '/all';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';
