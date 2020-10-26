<template lang="pug">
  .search
    input(
      v-if="isFilterTypeByName"
      type="text"
      id="search-by-name"
      placeholder="Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)"
      :value="name"
      @input="updateName"
    )
    ul(v-else)
      li
        select(@change="updateCity" :value="city")
          option(v-for="(c, idx) in cities" :key="idx") {{c}}
      li
        select(@change="updateOperationType" :value="operationType")
          option(v-for="(o, idx) in operationTypes" :key="idx") {{o}}
      li
        select(@change="updatePremiseType" :value="premiseType")
          option(v-for="(p, idx) in premiseTypes" :key="idx") {{p}}
    button(type="submit") Найти
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppFilterSearch",
  data: function() {
    return {
      isSearchByName: false
    };
  },
  computed: {
    ...mapGetters([
      "name",
      "city",
      "operationType",
      "premiseType",
      "isFilterTypeByName",
      "cities",
      "operationTypes",
      "premiseTypes"
    ])
  },
  methods: {
    updateName: function(e) {
      this.$store.commit("updateName", e.target.value);
    },
    updateCity: function(e) {
      this.$store.commit("updateCity", e.target.value);
    },
    updateOperationType: function(e) {
      this.$store.commit("updateOperationType", e.target.value);
    },
    updatePremiseType: function(e) {
      this.$store.commit("updatePremiseType", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./src/scss/main";

.search {
  display: flex;
  width: 100%;
}

input[type="text"] {
  @include input-style;
  @include left-rounded-corners;
}

button[type="submit"] {
  @include right-rounded-corners;
  @include transition;
  box-sizing: border-box;
  padding: 15px 40px 14px;
  font-family: inherit;
  font-size: 20px;
  line-height: 22px;
  color: white;
  background-color: $button-green;
  border: 1px solid $button-green;
  outline: none;

  &:hover,
  &:focus {
    color: $button-green;
    background-color: white;
  }

  &:active {
    opacity: 0.8;
  }
}

ul {
  @include reset-list-style;
  display: flex;
  flex-grow: 1;

  li {
    margin-left: 1px;
    flex: 1 1 0;
  }

  select {
    @include select-style;
  }
}

li:first-child {
  margin-left: 0;

  select {
    @include left-rounded-corners;
  }
}

@media (max-width: $mobile) {
  .search,
  ul {
    flex-direction: column;
  }

  input[type="text"] {
    @include right-rounded-corners;
    margin-bottom: 1rem;
  }

  select {
    @include right-rounded-corners;
    @include left-rounded-corners;
    margin-bottom: 1rem;
  }

  button[type="submit"] {
    @include left-rounded-corners;
  }
}
</style>
