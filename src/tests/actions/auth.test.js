import { login, logout } from '../../actions/auth';

test('should return login action', () => {
    const uid = 'foo';
    const result = login(uid);
    expect(result).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should return logout action', () => {
    const result = logout();
    expect(result).toEqual({
        type: 'LOGOUT'
    });
});

