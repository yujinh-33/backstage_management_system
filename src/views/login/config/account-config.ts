export const rules = {
  name: [
    // {
    //   required: true,
    //   message: '账号不能为空',
    //   trigger: ['input', 'blur']
    // },
    {
      trigger: 'blur',
      validator: (rule: any, value: string): Promise<string> => {
        return new Promise((resolve, reject) => {
          if (value.length === 0) {
            reject(Error('账号不能为空'))
          } else if (value.length < 6 || value.length > 16) {
            reject(Error('账号位数应为6~16位')) // reject with error message
          } else {
            resolve('')
          }
        })
      }
    }
  ],
  password: [
    {
      required: true,
      trigger: ['input', 'blur'],
      message: '密码不能为空'
    }
  ]
}
