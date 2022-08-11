import {v1} from "uuid";


export const authAPI = {
  userId: v1(),
  login(login: string, password: string, rememberMe: boolean){
    return new Promise((res, rej) => {
      if (login === 'steve.jobs@example.com' && password === 'password') {
        setTimeout(() => {
          res({id: authAPI.userId, login: 'steve.jobs@example.com'})
        }, 1000)
      } else {
        if(password === 'password'){
          setTimeout(() => {
            rej(`Пользователя ${login} не существует`)
          }, 1000)
        }else{
          setTimeout(() => {
            rej(`Неверный пароль`)
          }, 1000)
        }
      }
    })
  },
  logout(){
    return new Promise((res, rej) => {
        setTimeout(() => {
          res('Успешный выход')
        }, 1000)
    })

  }
  // logout(){
  //   return instance.delete<ResponseType>(`/auth/login`)
  // }
}