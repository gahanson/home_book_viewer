import axios from 'axios'
/*
export function someAction (context) {
}
*/
export function showSection({commit}, sectionName) {
    commit('showSection', sectionName)
}

export function setBooks({commit}) {
    let config = {
        headers : {
        'Authorization' : 'Token '+process.env.VUE_APP_BOOK_API_KEY
      }
    }
    axios
    .get('http://'+process.env.VUE_APP_BOOK_API_IPADDRESS+'/bookapi/book/', config)
    .then(response => {
      // console.log('setbooks', response.data)
      commit('setBooks', response.data);
    })
    .catch(error => {
        console.log('setBooks:', error);
    })            
}

export function setAvailableBooks({commit}) {
  let config = {
      headers : {
      'Authorization' : 'Token '+process.env.VUE_APP_BOOK_API_KEY
    }
  }
  axios
  .get('http://'+process.env.VUE_APP_BOOK_API_IPADDRESS+'/bookapi/availablebook/', config)
  .then(response => {
    // console.log('setbooks', response.data)
    commit('setAvailableBooks', response.data);
  })
  .catch(error => {
      console.log('setAvailableBooks:', error);
  })            
}
