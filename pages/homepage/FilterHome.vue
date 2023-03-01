<template>
  <div class="filter-home">
    <div class="container">
      <div class="row">
        <h1 class="event-wrap-title">
          MISA không ngừng kết nối và chuyển giao giá trị hữu ích tới cộng đồng
          thông qua các sự kiện chất lượng
        </h1>
        <div class="event-sort-box">
          <div class="box-sort">
            <el-select class="dropdown-topic" v-model="topics.value" placeholder="Chủ đề">
              <el-option class="dropdown-topic-item" v-for="item in topics" :key="item.value" :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

            <el-select class="dropdown-event-type" v-model="events.value" placeholder="Loại sự kiện">
              <el-option class="dropdown-event-item" v-for="item in events" :key="item.value" :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

            <div class="form-date">
              <el-date-picker v-model="startDate" type="date" placeholder="Ngày bắt đầu">
              </el-date-picker>
            </div>
          </div>

          <div class="box-search-wrap">
            <div class="box-search">
              <!-- @change="$emit('customChange', $event.target.value)" -->
              <el-input v-model="value" prefix-icon="el-icon-search" placeholder="Nhập tên sự kiện muốn tìm kiếm"
                clearable>
              </el-input>
              <!-- <input type="text" @change="$emit('customChange', $event.target.value)"> -->
              <!-- <div v-for="(item, index) in filterSearch" :key="index">
                <h1>{{ item.label }}</h1>
              </div> -->
            </div>
            <div class="cls-button-search">
              <el-button @click="handleSearch()" type="primary" icon="el-icon-search">Xem kết quả</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      topics: [
        {
          value: 'Option1',
          label: 'Chuyển đổi số',
        },
        {
          value: 'Option2',
          label: 'Quản trị Tài chính - Kế toán',
        },
        {
          value: 'Option3',
          label: 'Quản trị Nhân sự',
        },
        {
          value: 'Option4',
          label: 'Quản lý Marketing & Bán hàng',
        },
        {
          value: 'Option5',
          label: 'Quản trị & Vận hành',
        },
      ],

      events: [
        {
          value: 'Option1',
          label: 'Hội thảo',
        },
        {
          value: 'Option2',
          label: 'Đào tạo',
        },
        {
          value: 'Option3',
          label: 'Khác',
        },
      ],

      startDate: '',

      debounceSearch: '',
      value: ''
    }
  },

  // props: [ this.value ],
  // setup(value, search){
  //   search.emit('searchInput', value)
  // },


  computed: {
    ...mapGetters('finishevents', {
      finishEvents: 'finishEvents',
    }),
    
    // filterSearch() {
    //   return this.finishEvents.filter(item => {
    //     return item.name.toLowerCase().includes(this.value.toLowerCase())
    //   }) 
      
    // }
  },

  methods: {
    myDropdown() {
      document.getElementById('myDropdown').classList.toggle('show')
    },

    handleSearch(){
        this.$emit('inputData', this.value);
        this.value = '';
        // this.$emit('testdata', this.handleSearch())
    },
  },

  mounted () {
    // this.debounceSearch = debounce((value, _this) => {
    //   _this.filter.search = value
    //   _this.$emit('filter', { ..._this.filter, search: trim(value) })
    // }, 500);

    // console.log('value',this.value);
  },
}
</script>

<style scoped>
.filter-home {
  margin-top: 60px;
}

.event-wrap-title {
  font-size: 22px;
  text-align: center;
  max-width: 620px;
  float: none;
  margin: 0 auto;
}

.box-sort {
  display: flex !important;
}

.box-sort>div:not(:last-child) {
  padding-right: 15px;
}

.event-sort-box {
  padding: 30px;
}

.dropdown-topic {
  width: 50% !important;
}

.dropdown-event-type {
  width: 28%;
}

.form-date {
  margin: 0;
  width: 22%;
}

.dropdown-topic .el-select-dropdown {
  min-width: unset !important;
}

.box-search {
  width: 100%;
  margin-right: 15px;
}

.box-search-wrap {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}


@media (min-width: 980px) {
  .event-sort-box {
    margin-left: 12.5%;
    width: 75%;
  }
}
</style>
