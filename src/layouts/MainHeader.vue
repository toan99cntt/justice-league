<template>
  <q-header elevated class="glossy">
    <q-toolbar class="toolbar bg-white">
      <div class="col-3">
        <q-btn
          flat
          dense
          round
        >
          <common-icon name="menu" />
        </q-btn>
      </div>
      <div class="col-6 text-center">
        <img @click="$router.push({ name: 'home' })" width="141" height="53.5" src="@/assets/images/logo.png" />
      </div>
      <div class="col-3 text-right">
        <q-btn round unelevated class="bg-gray" @click="$router.push({ name: 'search' })">
          <common-icon name="search" />
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>
