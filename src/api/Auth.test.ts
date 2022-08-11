import {authAPI} from "./Auth";


test('check success auth user', () => {
  return authAPI.login('steve.jobs@example.com', 'password', true).then(data => {
    expect(data).toStrictEqual({
      id: authAPI.userId,
      login: 'steve.jobs@example.com',
    })
  });
});
test('the fetch fails with an error', () => {
  return expect(authAPI.login('login', 'password', true)).rejects.toMatch("Пользователя login не существует");
});