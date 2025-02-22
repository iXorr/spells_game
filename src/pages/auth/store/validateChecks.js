export const checks = [
  { regExp: new RegExp(/^[^\u0400-\u04FF]*$/), errMsg: 'есть киррилица' },
  { regExp: new RegExp(/^\S*$/), errMsg: 'есть пробел(ы)' },
  { regExp: new RegExp(/^.{4,}$/), errMsg: 'меньше четырёх символов' },
  { regExp: new RegExp(/.*[a-z].*[a-z].*$/), errMsg: 'меньше двух строчных' },
  { regExp: new RegExp(/.*\d.*\d.*$/), errMsg: 'меньше двух цифр' },
  { regExp: new RegExp(/.*[A-Z].*[A-Z].*$/), errMsg: 'меньше двух заглавных' }
]