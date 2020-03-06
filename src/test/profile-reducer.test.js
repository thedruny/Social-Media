import profileReducer, { addPostActionCreator, deletePost } from "../redux/profile-reducer";


let state = {
    posts: [
        { id: 1, message: 'Hi, how are you', likesCount: 12 },
        { id: 2, message: 'Hi guys, it\'s my first post', likesCount: 34 },
        { id: 3, message: 'I love this year 2019', likesCount: 3 },
        { id: 4, message: 'Post Malone best writer', likesCount: 123 }
    ],
};

it('new post length should be incremented', () => {
    let action = addPostActionCreator('TheDruny')

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5)
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator('TheDruny')

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe('TheDruny')
});

it('after deleting should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3)
});

it('after deleting length should be decrement if Id is incorrect', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4)
});