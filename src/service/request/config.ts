let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://hi.org/dev'
  BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://hi.org/pro'
} else {
  BASE_URL = 'http://hi.org/test'
}

export { BASE_URL }
