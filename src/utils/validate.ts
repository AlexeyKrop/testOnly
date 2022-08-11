export function validateLogin(setError: (errorMessage: string) => void, login: string){
  if (!/\S/.test(login))
    { setError('пароль не должен содержать пробелы'); return false;}
  if(login.length < 4 || login.length > 20)
  { setError('пароль должен содержать от 4 до 20 символов'); return false;}
  if(parseInt(login.substr(0, 1)))
  {setError('пароль должен начинаться с буквы'); return false;}
  return true;
}