/*
export function someMutation (state) {
}
*/
export function showSection (state, sectionName) {
    switch (sectionName) {
      case 'current':
        state.showCurrentBook = true
        state.showAvailableBooks = false
        state.showManageBooks = false
        break;

      case 'available':
        state.showCurrentBook = false
        state.showAvailableBooks = true
        state.showManageBooks = false
        break;

      case 'manage':
        state.showCurrentBook = false
        state.showAvailableBooks = false
        state.showManageBooks = true
        break;
      
      default:
        break;
    }
}

export function setBooks (state, newList) {
  state.books = newList
}

export function setAvailableBooks (state, newList) {
  state.available_books = newList
}
