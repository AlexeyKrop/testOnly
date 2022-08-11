import {authAPI} from "./Auth";


test('check auth user', () => {
  return authAPI.login('steve.jobs@example.com', 'password', true).then(data => {
    expect(data).toStrictEqual({
      id: authAPI.userId,
      login: 'steve.jobs@example.com',
    })
  });
});