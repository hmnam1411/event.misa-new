<template>
  <div class="slide-detail">
    
  </div>
</template>
  
  <script>
import '~/assets/style/index.css'


export default {
  name: '',

  data() {
    return {
      dotActive: 1,
      tempList: [
        {
          text1: '../../images/slide/img-test.jpg',
        },
        {
          text1: '../../images/slide/slide-3.png',
        },
        {
          text1: '../../images/slide/slide-2.png',
        },
        {
          text1: '../../images/slide/img-test.jpg',
        },
        {
          text1: '../../images/slide/slide-2.png',
        },
      ],
      items: [
        {
          text1: '../../images/slide/img-test.jpg',
        },
        {
          text1: '../../images/slide/slide-3.png',
        },
        {
          text1: '../../images/slide/slide-2.png',
        },
        {
          text1: '../../images/slide/img-test.jpg',
        },
        {
          text1: '../../images/slide/slide-2.png',
        },
      ],
    }
  },

  methods: {
    nextSlide(index) {
      // this.tempList = []
      this.dotActive = index
      console.log('123')
      // debugger
      if (index === 1) {
        this.tempList = this.items.slice(0, 4)
      } else {
        this.tempList = this.items.slice((index - 1) * 4, index * 4)
      }
    },
  },
}
</script>
  
  <style>
.test-123 {
  color: red;
}

.dot {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.dot_active {
  background: #b83b3b;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  /* border-color: #b83b3b; */
  border: 1px solid #b83b3b;
  display: inline-block;
  margin-right: 10px;
}

.dot .dot-prev {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #b83b3b;
  display: inline-block;
  margin-right: 10px;
}

@keyframes scrollSlide-data-v-4637460c {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-990px);
  }

  501% {
    transform: translateX(0);
  }
}
</style>