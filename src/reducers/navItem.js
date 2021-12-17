import { SELECTED_NAV} from '../actions/navItem'
export default function Nav(state={item:''}, action){
  switch (action.type) {
    case SELECTED_NAV:
      return { ...state, item: action.item };
    default:
      return state;
  }
}