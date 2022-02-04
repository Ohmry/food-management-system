export default {
  methods: {
    displayFormat (value, type) {
      if (!value) return value

      switch (type) {
        case 'numeric':
          return value.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
        case 'decimal':
          return parseFloat(value).toFixed(3).toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
        default:
          return value;
      }
    }
  }
}