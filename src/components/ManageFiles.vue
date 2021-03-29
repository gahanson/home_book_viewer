<template>
  <div v-if="$store.state.bookstore.showManageBooks">
    <div class="q-pa-md" style="max-width: 600px">
      <q-list>
        <div v-for="book in this.$store.state.bookstore.books">
          <q-item>
            <q-item-section>
              <q-item-label>{{ book.local_path }}</q-item-label>
            </q-item-section>

            <q-item-section side top>
              {{ book.id }}
              <q-btn color="primary" @click="open = true;currentBook = book" label="add" />
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

        </div>

      </q-list>
    </div>
  <q-dialog v-model="open" persistent>
      <q-card style="min-width: 350px">
        
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >

          <q-input
            filled
            v-model="title"
            label="title here"
            :rules="[val => !!val || 'Field is required']"
          />

          <q-input
            filled
            v-model="author"
            label="author here"
            :rules="[val => !!val || 'Field is required']"
          />

          <q-item>{{ this.currentBook.local_path }}</q-item>

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>

        </q-form>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  mounted: function() { 
        this.$store.dispatch('bookstore/setBooks');       
  },
  data: function() {
    return {
      open: false,
      title: '',
      author: '',
      currentBook: {}
    }
  },
  methods: {
    onSubmit: function() {
      // alert('title: ' + this.title + '\nauthor: ' + this.author + '\nbook: ' + this.currentBook.local_path);
      let config = {
          headers : {
          'Content-Type' : 'multipart/form-data',
          'Authorization' : 'Token '+process.env.VUE_APP_BOOK_API_KEY
          }
      }
      var upload = new FormData();
      upload.append('title', this.title);
      upload.append('author', this.author);
      upload.append('book_id', this.currentBook.id);
      axios.defaults.xsrfCookieName = 'csrftoken'
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
      axios
        .post('http://'+process.env.VUE_APP_BOOK_API_IPADDRESS+'/bookapi/availablebook/', upload, config)
        .then(response => {
          //alert(response.data);
          this.open = false;
          this.onReset();
        })
        .catch(error => {
            console.log('onSubmit', error)
        })
    },
    onReset: function() {
      this.author = '';
      this.title = '';
    }
  }

}
</script>

<style>

</style>