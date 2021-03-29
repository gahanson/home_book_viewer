<template>
  <div v-if="$store.state.bookstore.showAvailableBooks">

    <div class="row" v-for="availablebook in this.$store.state.bookstore.available_books">
      <div class="col-4">{{ availablebook.title }}</div>
      <div class="col-4">{{ availablebook.author }}</div>
      <div class="col-4"><a :href="viewerbaseurl + availablebook.book.viewer_path" target="_blank">view</a></div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted: function() { 
      this.$store.dispatch('bookstore/setAvailableBooks');
      this.getViewerBaseUrl();
    },
    data: function() {
      return {
        viewerbaseurl: 'unknown'
      }
    },
    methods: {
      getViewerBaseUrl: function() {
        let config = {
            headers : {
            'Authorization' : 'Token '+process.env.VUE_APP_BOOK_API_KEY
          }
        }
        axios
        .get('http://'+process.env.VUE_APP_BOOK_API_IPADDRESS+'/bookapi/settings/', config)
        .then(response => {
          // console.log(response.data[0]['source_viewer_base_url'])
          this.viewerbaseurl = response.data[0]['source_viewer_base_url'];
        })
        .catch(error => {
            console.log('getViewerBaseUrl:', error);
        })            
      }

    }

}
</script>

<style>

</style>