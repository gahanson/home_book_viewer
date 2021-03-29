<template>
  <q-layout view="lHh lpR fFf">

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered separator>
          <q-item clickable v-ripple @click="$store.dispatch('bookstore/showSection', 'current')">
            <q-item-section>
              <q-item-label>Current Book</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$store.dispatch('bookstore/showSection', 'available')">
            <q-item-section>
              <q-item-label>Available</q-item-label>
              <q-item-label caption>select book to view</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$store.dispatch('bookstore/showSection', 'manage')">
            <q-item-section>
              <q-item-label>Manage</q-item-label>
              <q-item-label caption>files on server</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <q-btn dense flat round icon="menu" @click="left = !left" />
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>