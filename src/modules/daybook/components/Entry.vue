<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >

    <div class="entry-tittle d-flex">
        <span class="text-succes fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-light">2024, Jueves</span>
    </div>

    <div class="entry-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus quasi necessitatibus aspernatur, sequi delectus ipsam nulla odit ad aliquam modi assumenda fuga. Exercitationem quo, id voluptatem repudiandae enim et.
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-container {
        font-size: 12px;
    }
}
</style>