export function validateLogin(setError: (errorMessage: string) => void, password: string){
  if (!/\S/.test(password))
    { setError('пароль не должен содержать пробелы'); return false;}
  if(password.length < 4 || password.length > 20)
  { setError('пароль должен содержать от 4 до 20 символов'); return false;}
  if(parseInt(password.substr(0, 1)))
  {setError('пароль должен начинаться с буквы'); return false;}
  return true;
}