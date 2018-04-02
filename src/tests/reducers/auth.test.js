import authReducer from '../../reducers/auth';

test('should login using provided uid', () => {
    const action = {
        type: 'LOGIN',
        uid: 'Alskdjiwjkfjwije235lk2osd' 
    };
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(action.uid);
});

test('should logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({});
});

