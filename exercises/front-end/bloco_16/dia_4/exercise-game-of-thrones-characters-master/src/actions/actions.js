export const GET_CHARACTER = 'GET_CHARACTER'
export const REQUEST_CHARACTER = 'REQUEST_CHARACTER'
export const FAILED_REQUEST = 'FAILED_REQUEST'

export const getCharacter = (json) => ({
  type: GET_CHARACTER,
  character: json,
})

export const requestCharacter = () => ({
  type: REQUEST_CHARACTER,
})

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  error,
})

const APIURL = 'https://anapioficeandfire.com/api/characters?name='

export const charAPI = (char) => {
  return (dispatch) => {
    dispatch(requestCharacter())
    return fetch(`${APIURL}${char.split().join('+')}`).then((response) =>
      response.json().then(
        (json) => dispatch(getCharacter(json)),
        (error) => dispatch(failedRequest(error)),
      ),
    )
  }
}
