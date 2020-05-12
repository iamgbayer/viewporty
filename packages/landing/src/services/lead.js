import axios from 'axios'

const URL = 'https://sheet.best/api/sheets/d7ab396d-8e1f-4fae-a947-f74d6e074f8a'

export const saveLeadAddress = email =>
  axios.post(URL, {
    email
  })
