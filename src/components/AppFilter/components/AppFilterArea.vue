<template lang="pug">
  .area-filter(v-if="isAreaFilterShown")
    button(type="button" @click="switchToPriceFilter") Добавить цену
    ul
      li
        input(type="number" min="0" placeholder="От" name="areaFrom" id="areaFrom" :value="areaFrom" @change="updateAreaFrom")
      li
        input(type="number" min="0" placeholder="До" name="areaTo" id="areaTo" :value="areaTo" @change="updateAreaTo")
      li.unit
        span м
          sup 2
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AppFilterArea",
  computed: {
    ...mapGetters(["areaFrom", "areaTo", "isAreaFilterShown"])
  },
  methods: {
    ...mapMutations({
      switchToPriceFilter: "switchPriceFilter"
    }),
    updateAreaFrom: function(e) {
      this.$store.commit("updateAreaFrom", e.target.value);
    },
    updateAreaTo: function(e) {
      this.$store.commit("updateAreaTo", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./src/scss/main.scss";

.area-filter {
  display: flex;
  width: 100%;
  margin-top: 1.8rem;
}

button[type="button"] {
  @include button-style;
  flex: 2 1 0;
  margin-right: 30px;
}

ul {
  @include reset-list-style;
  flex: 1 0 0;
  display: flex;
  max-width: 330px;
}

input[type="number"] {
  @include input-style;
  background-color: $blue-bg;
}

li {
  margin-left: 1px;
}

li:first-child {
  margin-left: 0;
  input {
    @include left-rounded-corners;
  }
}

.unit {
  span {
    @include right-rounded-corners;
    position: relative;
    display: block;
    padding: 17px 20px 16px;
    font-size: 18px;
    line-height: 20px;
    background-color: $unit-blue-bg;
  }

  sup {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 12px;
  }
}

@media (max-width: $mobile) {
  .area-filter {
    display: flex;
    flex-direction: column;
    min-height: 110px;
  }

  button[type="button"] {
    display: block;
    order: 3;
    width: 100%;
    padding: 15px 0;
    margin-right: 0;
    margin-top: 2.1rem;
    min-height: 58px;
  }

  ul {
    min-height: 40px;
    display: flex;
    max-width: unset;
    order: 1;

    li:not(:last-child) {
      flex-grow: 1;
    }
  }

  input {
    margin-top: 0;
    border-radius: 0;
  }

  .unit {
    span {
      padding: 19px 20px 18px;
    }
  }
}
</style>
