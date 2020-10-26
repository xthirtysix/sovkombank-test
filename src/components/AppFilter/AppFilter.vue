<template lang="pug">
  .container
    form.form(@submit="(e) => getData(e)")
      app-filter-search
      app-filter-area
      app-filter-price
    app-filter-options
</template>

<script>
import { mapGetters } from "vuex";
import AppFilterSearch from "@/components/AppFilter/components/AppFilterSearch";
import AppFilterArea from "@/components/AppFilter/components/AppFilterArea";
import AppFilterPrice from "@/components/AppFilter/components/AppFilterPrice";
import AppFilterOptions from "@/components/AppFilter/components/AppFilterOptions";

export default {
  components: {
    AppFilterSearch,
    AppFilterArea,
    AppFilterPrice,
    AppFilterOptions
  },
  computed: {
    ...mapGetters(["formData"])
  },
  methods: {
    getData: function(e) {
      e.preventDefault();
      console.log(this.formData);
    }
  }
};
</script>

<style lang="scss">
.form {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  width: 100%;
  padding: 37px 21px;
  font-size: 18px;
  line-height: 20px;
  background: linear-gradient(
    0deg,
    rgb(130, 179, 229) 0%,
    rgb(168, 213, 233) 100%
  );
}
</style>
