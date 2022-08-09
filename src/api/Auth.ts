export const loginUser = (login: string, password: string) => {
  return new Promise((res, rej) => {
    if (login === 'steve.jobs@example.com' && password === 'password') {
      setTimeout(() => {
        res('вход успешный')
      }, 1000)
    } else {
      rej(`Пользователя ${login} не существует`)
    }
  }).then((data) => console.log(data))
    .catch(err => console.log(err))
}

// export const authAPI = {
//   me(){
//     return instance.get<ResponseType<{id: number, email: string, login: string}>>(`/auth/me`)
//   },
//   login(authParams: AuthParamsType){
//     return instance.post<AuthParamsType, AxiosResponse<ResponseType<{ userId?: number }>>>(`/auth/login`, authParams)
//   },
//   logout(){
//     return instance.delete<ResponseType>(`/auth/login`)
//   }
// }