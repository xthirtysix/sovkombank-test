<template lang="pug">
  section.search-options
    h2.visually-hidden Настройки поиска
    section.search-type-section
      h3.visually-hidden Переключить тип поиска
      input.checkbox.visually-hidden(
        type="checkbox"
        id="search-type"
        name="search-type"
        @change="switchFilterType"
      )
      label.checkbox-switcher(for="search-type")
      span.visually-hidden Включить поиск по названию
      span.checkbox
      button(type="button" :disabled="!isFilterTypeByName" @click="switchFilterType")
        span.button-text Основной поиск
      button(type="button" :disabled="isFilterTypeByName" @click="switchFilterType")
        span.button-text Искать по названию
    section.hidden-fields-section
      h3.visually-hidden Показать скрытые фильтры
      button(
        type="button"
        @click="switchPriceFilter"
        :class="isPriceFilterShown ? 'icon-remove' : 'icon-add'"
      )
        span(role="img")
        | Цена
      button(
        type="button"
        @click="switchAreaFilter"
        :class="isAreaFilterShown ? 'icon-remove' : 'icon-add'"
      )
        span(role="img")
        | Метраж
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "AppFilterOptions",
  computed: {
    ...mapGetters([
      "isFilterTypeByName",
      "isAreaFilterShown",
      "isPriceFilterShown"
    ])
  },
  methods: {
    ...mapMutations([
      "switchFilterType",
      "switchAreaFilter",
      "switchPriceFilter"
    ])
  }
};
</script>

<style lang="scss" scoped>
@import "./src/scss/main.scss";

.search-options {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 11px 16px 12px;
  background-color: $blue-bg;

  section {
    display: flex;
  }
}

.search-type-section {
  align-items: center;

  .checkbox-switcher {
    order: 2;
    margin: 0 13px;
  }

  button[type="button"]:first-child {
    order: 1;
  }

  button[type="button"]:last-child {
    order: 3;
  }
}

.button-text {
  display: block;
  position: relative;

  button:disabled & {
    color: #adb9c4;
  }

  button:not(:disabled) & {
    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      display: block;
      width: 100%;
      height: 1px;
      background-color: transparent;
      border-bottom: 1px dotted $blue-accent;
    }
  }
}

button {
  padding: 2px;
  font-family: inherit;
  font-size: 16px;
  line-height: 20px;
  color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    color: $button-green;
    opacity: 0.8;
  }
}

.checkbox-switcher {
  position: relative;
  display: block;
  width: 40px;
  height: 22px;
  background-color: $button-green;
  border-radius: 11px;
  border: none;
  vertical-align: text-bottom;
  cursor: pointer;

  &::before {
    transition: 0.15s ease-in-out;
    content: "";
    position: absolute;
    display: block;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    background-color: white;
    border-radius: 50%;
  }

  &:hover,
  &:focus {
    background-color: white;

    &::before {
      background-color: $button-green;
    }
  }
}

input[type="checkbox"]:checked + .checkbox-switcher {
  &::before {
    left: calc(100% - 20px);
  }
}

input[type="checkbox"]:focus + .checkbox-switcher {
  background-color: white;

  &::before {
    background-color: $button-green;
  }
}

.hidden-fields-section {
  display: flex;

  button {
    @include transition;

    display: flex;
    align-items: flex-end;
    outline: none;

    &:first-of-type {
      margin-right: 24px;
    }

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }
}

.icon-add {
  span[role="img"] {
    @include circle-icon(0, 90deg);
    margin-right: 10px;
  }
}

.icon-remove {
  span[role="img"] {
    @include circle-icon(40deg, -40deg);
    margin-right: 10px;
  }
}

@media (max-width: $mobile) {
  .search-options {
    flex-direction: column;
  }

  .search-type-section {
    margin-bottom: 2rem;
  }
}
</style>
