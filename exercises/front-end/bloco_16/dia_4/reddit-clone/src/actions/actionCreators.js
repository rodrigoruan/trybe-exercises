export const GET_TECH = 'GET_TECH'
export const REQUEST_TECH = 'REQUEST_TECH'
export const FAILED_REQUEST = 'FAILED_REQUEST'

export const getTech = (json) => ({
  type: GET_TECH,
  tech: json,
})

export const requestTech = () => ({
  type: REQUEST_TECH,
})

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  error,
})

export function fetchTech(tech) {
  return (dispatch) => {
    dispatch(requestTech())
    return fetch(`https://www.reddit.com/r/${tech}.json`)
      .then((r) => r.json())
      .then(
        (json) => dispatch(getTech(json)),
        (error) => dispatch(failedRequest(error)),
      )
  }
}
