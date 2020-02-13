const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS"

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s320x320/79734556_773007619868345_7658556988103589888_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=P95JKNDm0doAX-gRa-5&oh=2c34ee00fa4bcc72aee14fb421c8cc74&oe=5E9F18D1',
            followed: true,
            fullName: 'Andrey',
            status: 'I\'m a boss!',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        },
        {
            id: 2,
            photoUrl: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s320x320/79734556_773007619868345_7658556988103589888_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=P95JKNDm0doAX-gRa-5&oh=2c34ee00fa4bcc72aee14fb421c8cc74&oe=5E9F18D1',
            followed: true,
            fullName: 'Nikolay',
            status: 'Sorry, but I\'m a boss too',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        },
        {
            id: 3,
            photoUrl: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s320x320/79734556_773007619868345_7658556988103589888_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=P95JKNDm0doAX-gRa-5&oh=2c34ee00fa4bcc72aee14fb421c8cc74&oe=5E9F18D1',
            followed: true,
            fullName: 'Taras',
            status: 'Hello World!',
            location: {
                city: 'Poltava',
                country: 'Ukraine'
            }
        },
        {
            id: 4,
            photoUrl: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s320x320/79734556_773007619868345_7658556988103589888_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=P95JKNDm0doAX-gRa-5&oh=2c34ee00fa4bcc72aee14fb421c8cc74&oe=5E9F18D1',
            followed: false,
            fullName: 'Denis',
            status: 'I\'m a Boss!',
            location: {
                city: 'Kharkiv',
                country: 'Ukraine'
            }
        }
    ],
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAc = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default userReducer;