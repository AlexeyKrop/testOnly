import {v1} from "uuid";

export const loginUser = (login: string, password: string) => {
  return new Promise((res, rej) => {
    if (login === 'steve.jobs@example.com' && password === 'password') {
      setTimeout(() => {
        res('вход успешный')
      }, 1000)
    } else {
      rej(`Пользователя ${login} не существует`)
    }
  })
}

export const authAPI = {
  login(login: string, password: string){
    return new Promise((res, rej) => {
      if (login === 'steve.jobs@example.com' && password === 'password') {
        setTimeout(() => {
          res({id: v1(), login: 'steve.jobs@example.com'})
        }, 1000)
      } else {
        setTimeout(() => {
          rej(`Пользователя ${login} не существует`)
        }, 1000)
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