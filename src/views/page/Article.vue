<template>
  <div id="article-wrapper">
    <Title />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Title from '@/components/Title'
import Content from '@/components/Article/Content'
import Footer from '@/components/Article/Footer'

export default {
  name: 'article',
  components: {
    Title,
    Content,
    Footer
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
#article-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
