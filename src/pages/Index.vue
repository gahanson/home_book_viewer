<template>
  <q-page class="flex flex-center">
    <manage-files />
    <available-books />
  </q-page>
</template>

<script>
import ManageFiles from '../components/ManageFiles.vue';
import AvailableBooks from '../components/AvailableBooks.vue';

export default {
  name: 'PageIndex',
  components: {
    ManageFiles,
    AvailableBooks
  }
}
</script>
