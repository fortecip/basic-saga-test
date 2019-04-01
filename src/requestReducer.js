export default function(state=null,action){
  switch(action.type){
    case 'REQUEST':
      return action.data;
    default:
      break;
  }
  return state;
}
