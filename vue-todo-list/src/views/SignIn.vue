<template>
  <AuthLayout>
    <div class="bg-white rounded-2xl p-4 w-96 h-64">
      <Vueform @submit="submit">
        <TextElement name="identifier" id="identifier" type="text" label="Email or usernale" />
        <TextElement
          name="password"
          input-type="password"
          :rules="['required', 'min:8', 'same:password_confirmation']"
          field-name="Password"
          label="Password"
          placeholder="Password"
          class="border border-gray-300 rounded-lg"
        />
      </Vueform>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AuthLayout from '../layouts/AuthLayout.vue'

const submit = async () => {}
</script>

<style lang="scss"></style>
