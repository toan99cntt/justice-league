<template>
  <q-header elevated class="glossy">
    <q-toolbar class="toolbar bg-white">
      <div class="col-3">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <common-icon name="menu" />
        </q-btn>
      </div>
      <div class="col-6 text-center">
        <q-img width="141px" height="53.5px" src="src/assets/images/logo.png" />
      </div>
      <div class="col-3 text-right">
        <q-btn round unelevated class="bg-gray" @click="$router.push({ name: 'search' })">
          <common-icon name="search" />
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    class="bg-grey-2"
  >
    <q-list>
      <q-item-label header>Essential Links</q-item-label>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Docs</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="code" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Github</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'LayoutDefault',

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
