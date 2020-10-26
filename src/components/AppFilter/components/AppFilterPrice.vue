<template lang="pug">
  .price-filter(v-if="isPriceFilterShown")
    ul
      li
        input(type="number" placeholder="От" name="priceFrom" id="priceFrom" :value="priceFrom" @change="updatePriceFrom")
      li
        input(type="number" placeholder="До" name="priceTo" id="priceTo" :value="priceTo" @change="updatePriceTo")
      li
        select(@change="updatePaymentType" :value="paymentType")
          option(v-for="(paymentType, idx) in paymentTypes" :key="idx") {{paymentType}}
    button(type="button" @click="switchToAreaFilter") Добавить метраж
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AppFilterPrice",
  computed: {
    ...mapGetters([
      "priceFrom",
      "priceTo",
      "paymentType",
      "isPriceFilterShown",
      "paymentTypes"
    ])
  },
  methods: {
    ...mapMutations({
      switchToAreaFilter: "switchAreaFilter"
    }),
    updatePriceFrom: function(e) {
      this.$store.commit("updatePriceFrom", e.target.value);
    },
    updatePriceTo: function(e) {
      this.$store.commit("updatePriceTo", e.target.value);
    },
    updatePaymentType: function(e) {
      this.$store.commit("updatePaymentType", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./src/scss/main.scss";

.price-filter {
  display: flex;
  width: 100%;
  margin-top: 1.8rem;
}

ul {
  @include reset-list-style;
  flex: 2 0 0;
  display: flex;
  max-width: 550px;
}

li {
  flex: 1 1 0;
  margin-left: 1px;
}

li:first-child {
  margin-left: 0;
  input {
    @include left-rounded-corners;
  }
}

li:last-child {
  select {
    @include right-rounded-corners;
  }
}

input[type="number"] {
  @include input-style;
  background-color: $blue-bg;
}

select {
  @include select-style;
  background-color: $blue-bg;
}

button[type="button"] {
  @include button-style;
  flex: 1 1 0;
  margin-left: 30px;
}

@media (max-width: $mobile) {
  .price-filter {
    flex-direction: column;
  }

  button[type="button"] {
    padding: 15px 0;
    margin-left: 0;
    min-height: 60px;
  }

  ul {
    flex-direction: column;
    max-width: unset;
    min-height: 222px;
    height: fit-content;
  }

  li {
    margin-bottom: 1rem;
  }

  input,
  select {
    @include right-rounded-corners;
    @include left-rounded-corners;
  }
}
</style>
