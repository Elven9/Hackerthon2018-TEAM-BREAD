<template>
  <div id="addPost-wrapper">
    <Title />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Title from '@/components/Title'
import Content from '@/components/AddPost/Content'


export default {
  name: 'AddPost',
  components: {
    Title,
    Content,
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
#addPost-wrapper {
  display: flex;
  flex-direction: column;
  
}
</style>
