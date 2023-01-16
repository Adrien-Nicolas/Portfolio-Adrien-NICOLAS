<template>
  <div>
  <light-timeline :items='items'></light-timeline>
  </div>
</template>
<script>
const theme = 'red';
export default {
  data () {
    return {
      items: [
        {
          tag: '2018-01-12',
          content: 'hallo'
        },
        {
          tag: '2018-01-13',
          color: '#dcdcdc',
          type: 'circle',
          content: 'world'
        },
        {
          type: 'star',
          tag: '2018-01-14',
          htmlMode: true,
          content: `<div style="color: ${theme};"> =v = </div>`
        }
      ]
    }
  }
}
</script>
