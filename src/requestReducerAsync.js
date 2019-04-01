export default function (state = null, action) {
  switch(action.type) {
    case 'REQUEST_ASYNC':
      return action;
    default:
      break;
  }
  return state;
}
