export default {
  state: {
    isFilterTypeByName: false,
    isAreaFilterShown: false,
    isPriceFilterShown: false,
    form: {
      name: "",
      city: "Москва",
      operationType: "Арендовать",
      premiseType: "Офис",
      area: {
        from: undefined,
        to: undefined
      },
      price: {
        from: undefined,
        to: undefined,
        paymentType: "₽/месяц"
      }
    },
    cities: ["Москва", "Санкт-Петербург", "Казань"],
    operationTypes: ["Арендовать", "Сдать"],
    premiseTypes: ["Офис", "Складское помещение"],
    paymentTypes: ["₽/месяц", "€/год"]
  },
  mutations: {
    switchFilterType: function(state) {
      state.isFilterTypeByName = !state.isFilterTypeByName;
    },
    switchAreaFilter: function(state) {
      state.isAreaFilterShown = !state.isAreaFilterShown;
      state.isPriceFilterShown = false;
    },
    switchPriceFilter: function(state) {
      state.isPriceFilterShown = !state.isPriceFilterShown;
      state.isAreaFilterShown = false;
    },
    updateName: function(state, message) {
      state.form.name = message;
    },
    updateCity: function(state, city) {
      state.form.city = city;
    },
    updateOperationType: function(state, operationType) {
      state.form.operationType = operationType;
    },
    updatePremiseType: function(state, premiseType) {
      state.form.premiseType = premiseType;
    },
    updateAreaFrom: function(state, number) {
      state.form.area.from = number;
    },
    updateAreaTo: function(state, number) {
      state.form.area.to = number;
    },
    updatePriceFrom: function(state, number) {
      state.form.price.from = number;
    },
    updatePriceTo: function(state, number) {
      state.form.price.to = number;
    },
    updatePaymentType: function(state, type) {
      state.form.price.paymentType = type;
    }
  },
  getters: {
    cities: function(state) {
      return state.cities;
    },
    operationTypes: function(state) {
      return state.operationTypes;
    },
    premiseTypes: function(state) {
      return state.premiseTypes;
    },
    name: function(state) {
      return state.form.name;
    },
    city: function(state) {
      return state.form.city;
    },
    operationType: function(state) {
      return state.form.operationType;
    },
    premiseType: function(state) {
      return state.form.premiseType;
    },
    areaFrom: function(state) {
      return state.form.area.from;
    },
    areaTo: function(state) {
      return state.form.area.to;
    },
    priceFrom: function(state) {
      return state.form.price.from;
    },
    priceTo: function(state) {
      return state.form.price.to;
    },
    paymentType: function(state) {
      return state.form.price.paymentType;
    },
    isFilterTypeByName: function(state) {
      return state.isFilterTypeByName;
    },
    isAreaFilterShown: function(state) {
      return state.isAreaFilterShown;
    },
    isPriceFilterShown: function(state) {
      return state.isPriceFilterShown;
    },
    paymentTypes: function(state) {
      return state.paymentTypes;
    },
    formData: function(state) {
      return state.form;
    }
  }
};
