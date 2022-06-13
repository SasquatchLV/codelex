<script setup lang="ts">
defineProps(["person"]);
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="bg-overlay"></div>
        <h5 class="card-title">{{ person.name }}</h5>
        <p class="card-text">
          Gender: {{ person.gender }}
          <br />
          Height: {{ person.height }}cm
          <br />
          Mass: {{ person.mass }}kg
          <br />
          Hair Color: {{ person.hair_color }}
          <br />
          Skin Color: {{ person.skin_color }}
          <br />
          Birth Year: {{ person.birth_year }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
