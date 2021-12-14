export const SELECTED_NAV= 'SELECTED_NAV'

export function activeNavItem (item) {
    return {
      type: SELECTED_NAV,
      item,
    }
  }
  