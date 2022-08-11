import {authAPI} from "./Auth";


test('check success auth user', () => {
  return authAPI.login('steve.jobs@example.com', 'password', true).then(data => {
    expect(data).toStrictEqual({
      id: authAPI.userId,
      login: 'steve.jobs@example.com',
    })
  });
});
test('check fails auth user', () => {
  return expect(
    authAPI.login('login', 'password', true)).rejects.toMatch("Пользователя login не существует");
});
test('check fails password', () => {
  return expect(
    authAPI.login('steve.jobs@example.com', 'pass', true)).rejects.toMatch("Неверный пароль");
});

test('check success out', () => {
  return expect(authAPI.logout()).resolves.toBe('Успешный выход');
});