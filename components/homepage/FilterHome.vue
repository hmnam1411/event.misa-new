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
            <el-select class="dropdown-topic" v-model="selectedLabel" placeholder="Chủ đề">
              <el-option class="dropdown-topic-item" v-for="item in topics" :key="item.label" :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

            <el-select class="dropdown-event-type" v-model="events.value" placeholder="Loại sự kiện">
              <el-option class="dropdown-event-item" v-for="item in events" :key="item.value" :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

            <div class="form-date">
              <el-date-picker v-model="startDate" format="dd/MM/yyyy" value-format="dd/MM/yyyy" type="date"
                placeholder="Ngày bắt đầu" @change="changeDate()">
              </el-date-picker>
            </div>
          </div>

          <div class="box-search-wrap">
            <div class="box-search">
              <!-- @change="$emit('customChange', $event.target.value)" -->
              <el-input v-model="valueSearch" prefix-icon="el-icon-search" placeholder="Nhập tên sự kiện muốn tìm kiếm"
                clearable>
              </el-input>
              <!-- <input type="text" @change="$emit('customChange', $event.target.value)"> -->
              <!-- <div v-for="(item, index) in filterSearch" :key="index">
                  <h1>{{ item.label }}</h1>
                </div> -->
            </div>
            <div class="cls-button-search">
              <el-button @click="$emit('handle-search', handleSearch())" type="primary" icon="el-icon-search">Xem kết
                quả</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      topics: [
        {
          value: '100',
          label: '100',
        },
        {
          value: 'Quản trị Tài chính - Kế toán',
          label: 'Quản trị Tài chính - Kế toán',
        },
        {
          value: 'Quản trị Nhân sự',
          label: 'Quản trị Nhân sự',
        },
        {
          value: 'Quản lý Marketing & Bán hàng',
          label: 'Quản lý Marketing & Bán hàng',
        },
        {
          value: 'Quản trị & Vận hành',
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

      valueSearch: '',

      selectedLabel: '',

    }
  },

  props: {
    eventUpcoming: {
      type: Array,
      // require: true
    },
    value: {
      type: String
    }
  },

  computed: {
  },

  methods: {
    myDropdown() {
      document.getElementById('myDropdown').classList.toggle('show')
    },

    handleSearch() {
      this.$emit('value-search', this.valueSearch)
      this.$emit('value-topic', this.topics)
      this.$emit('select-label', this.selectedLabel)
      this.$emit('start-date', this.startDate)

      this.valueSearch = this.valueSearch
      this.selectedLabel = this.selectedLabel

      // this.valueSearch = this.value
    },

    changeDate() {
      // console.log('start date', this.startDate);

      // var date = new Date()
      // var isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString()

      // console.log('iso: ', isoDateTime);
      // console.log('compare iso > start date : ', isoDateTime > this.startDate );

    }
  },

  mounted() {
    this.testData = this.eventUpcoming
    // console.log('test data: ', this.testData);
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
  justify-content: space-between;
}

.box-sort>div:not(:last-child) {
  padding-right: 15px;
}

.event-sort-box {
  padding: 30px;
}

.dropdown-topic {
  width: 50%;
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

@media screen and (max-width: 767px) {
  .box-sort {
    flex-flow: row wrap;
  }

  .box-sort>div {
    margin-bottom: 10px;
  }

  .dropdown-topic {
    width: 100%;
    padding-right: 0 !important;
  }

  .dropdown-event-type {
    width: 50%;
  }

  .form-date {
    margin: 0;
    width: 45%;
  }
}

@media screen and (max-width: 480px) {
  .box-sort>div {
    padding-right: 0 !important;
    width: 100%;
  }

  .box-search-wrap{
    flex-flow: row wrap;
    padding-top: 0;
    justify-content: center;
  }
  
  .box-search{
    padding: 0 0 10px 0 !important;
    margin-right: 0;
  }

}
</style>
  