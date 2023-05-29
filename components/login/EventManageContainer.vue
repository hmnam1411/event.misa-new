<template>
    <div class="page-list-master">
        <div class="container container-list-master">
            <div class="content">
                <div class="panel-tabs">
                    <div class="tab-item active" id="tabManager">
                        <div class="tab-title">QUẢN LÝ SỰ KIỆN</div>
                        <div class="tab-content">
                            <div class="button-tool-bar">
                                <el-button type="primary" @click="handleAddNew()">+ Thêm
                                    mới</el-button>
                                <el-button type="primary" @click="handleBannerList()">Danh sách Banner</el-button>
                            </div>
                            <div class="tool-bar">
                                <div class="toolbar-filter">
                                    <div class="box-search box-search-device">
                                        <el-input placeholder="Tìm kiếm theo tên sự kiện" v-model="input"></el-input>
                                    </div>
                                    <div class="box-select-status">
                                        <label class="lable label-combobox-status" for="cboStatus">Trạng thái</label>
                                        <el-select v-model="value" placeholder="Tất cả">
                                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                    <div class="buttons">
                                        <el-button type="primary">Lấy dữ liệu</el-button>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="grid-list-wapper">
                                <el-table :data="getEvent" border style="width: 100%" height="550">
                                    <el-table-column fixed prop="EventName" label="Tên sự kiện" width="350">
                                    </el-table-column>
                                    <el-table-column prop="StartDate" label="Thời gian diễn ra" width="175">
                                    </el-table-column>
                                    <el-table-column prop="Summary" label="Tóm tắt" width="370">
                                    </el-table-column>
                                    <el-table-column prop="Cost" label="Chi phí" width="130">
                                    </el-table-column>
                                    <el-table-column prop="address" label="Trạng thái" width="160">
                                    </el-table-column>
                                    <el-table-column prop="zip" label="" width="80">
                                    </el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PopupAddNew />
        <PopupListBannerVue />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PopupAddNew from '../popup/PopupAddNew.vue';
import PopupListBannerVue from '../popup/PopupListBanner.vue';

export default {
    components: {
        PopupAddNew,
        PopupListBannerVue
    },

    data() {
        return {
            getEvent: [],

            input: '',

            options: [
                {
                    value: 'Tất cả',
                    label: 'Tất cả'
                },
                {
                    value: 'Kích hoạt',
                    label: 'Kích hoạt'
                },
                {
                    value: 'Chưa kích hoạt',
                    label: 'Chưa kích hoạt'
                }
            ],
            value: '',

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

        }
    },

    computed: {
        ...mapState({
            dialogVisible: state => state.dialogVisible,
            listBannerVisible: state => state.listBannerVisible
        })
    },

    methods: {
        ...mapActions({
            apiGetAllEvent: 'apiGetAllEvent',
        }),

        ...mapActions(['showDialog']),

        ...mapActions(['showListBanner']),

        
        async getAllEvent() {
            await this.apiGetAllEvent().then(res => {
                this.getEvent = res.data
            }).catch(err => {
                console.log(err);
            })
        },
        
        handleAddNew() {
            this.showDialog()
            console.log('showDialog', this.showDialog);
            console.log('dialogVisible', this.dialogVisible);
        },

        handleBannerList(){
            this.showListBanner()
            console.log('showListBanner', this.showListBanner);
            console.log('listBannerVisible', this.listBannerVisible);

        }
    },

    mounted() {
        this.getAllEvent();
        console.log('dialogVisible', this.dialogVisible);
        console.log('listBannerVisible', this.listBannerVisible);
    },
}
</script>

<style scoped>
.page-list-master {
    position: absolute;
    left: 0;
    top: 70px;
    right: 0;
    bottom: 46px;
    background: rgba(158, 207, 250, 0.3);
}

.page-list-master .container-list-master {
    height: 95%;
    padding-top: 16px;
    padding-bottom: 16px;
}

.container-list-master .content {
    background: #fff;
    height: 100%;
    position: relative;
}

.panel-tabs {
    /* border-bottom: 1px solid #E5E5E5; */
    height: 79px;
}

.tab-item.active .tab-title {
    border-bottom: 2px solid #166BA2;
    color: #216896;
    text-align: center;
}

.tab-item .tab-title {
    line-height: 76px;
    padding: 0 34px;
    user-select: none;
    font-family: RobotoBold;
    height: 80px;
    font-size: 24px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
}

.button-tool-bar {
    display: flex;
    flex-flow: row wrap;
    padding: 12px 16px;
    border-bottom: 1px solid #EBEBEB;
}

.tool-bar {
    padding: 12px 16px;
    border-bottom: 1px solid #EBEBEB;
}

.toolbar-filter {
    display: flex;
}

.tool-bar .box-search {
    width: 100%;
    position: relative;
}

.toolbar-filter>div {
    margin-right: 16px;
}

.tool-bar .box-select-status {
    white-space: nowrap;
}

.toolbar-filter .buttons {
    margin: 0;
}

/* #region element UI */
.box-select-status .el-input__inner {
    padding: 0 6px;
    width: 146px;
    border: 1px solid #E6E6E6;
}

.grid-list-wapper .el-table .el-table__cell {
    text-align: center;
}

.grid-list-wapper .el-table .cell {
    color: #000;
}

/* #endregion */
</style>