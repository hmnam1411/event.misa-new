<template>
    <base-popup :visible.sync="dialogVisible" title="Event Dialog" width="52%" :before-close="handleClose">
        <div class="frm-content">

            <div class="col-md-24">
                <div class="form-group">
                    <label for="EventName">Tên sự kiện <span class="red-required"></span></label>
                    <el-input type="text" v-model="event.name" class="form-control field-text" name="EventName"
                        id="EventName" placeholder="Tên sự kiện" maxlength="255" spellcheck="false" autocomplete="off">
                    </el-input>
                </div>
            </div>

            <div class="col-md-24 row-popup">

                <div class="topic">
                    <div class="form-group">
                        <label for="Topic">Chủ đề</label>
                        <el-select class="dropdown-topic" v-model="selectedLabel" placeholder="Chủ đề">
                            <el-option class="dropdown-topic-item" v-for="item in topics" :key="item.label"
                                :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>

                <div class="event-type">
                    <div class="form-group">
                        <label for="Topic">Loại sự kiện</label>
                        <el-select class="form-control" id="EventType" name="EventType">
                            <option value="" hidden="">Chọn loại sự kiện</option>
                            <option value="1">Hội thảo</option>
                            <option value="2">Đào tạo</option>
                            <option value="3">Khác</option>
                        </el-select>
                    </div>
                </div>

                <div class="datetime">
                    <div class="form-group">
                        <label for="StartDate">Thời gian bắt đầu <span class="red-required"></span></label>
                        <el-date-picker v-model="value1" type="datetime" placeholder="Select date and time">
                        </el-date-picker>
                    </div>
                </div>

                <div class="datetime">
                    <div class="form-group">
                        <label for="EndDate">Thời gian kết thúc <span class="red-required"></span></label>
                        <el-date-picker v-model="value1" type="datetime" placeholder="Select date and time">
                        </el-date-picker>
                    </div>
                </div>
            </div>

            <div class="col-md-24 row-popup">
                <div class="address-type">
                    <div class="form-group">
                        <label for="Address">Địa chỉ diễn ra <span class="red-required"></span></label>
                        <el-input type="text" class="form-control field-text" name="EventName" id="EventName"
                            placeholder="Tên sự kiện" maxlength="255" spellcheck="false" autocomplete="off">
                        </el-input>
                    </div>
                </div>
                <div class="w-220">
                    <div class="form-group">
                        <label for="Slot">Số người tham dự <span class="red-required"></span></label>
                        <el-input type="text" class="form-control field-text" name="EventName" id="EventName"
                            placeholder="Tên sự kiện" maxlength="255" spellcheck="false" autocomplete="off">
                        </el-input>
                    </div>
                </div>
                <div class="w-220">
                    <div class="form-group">
                        <label for="Cost">Phí tham dự</label>
                        <el-input type="text" class="form-control field-text" name="EventName" id="EventName"
                            placeholder="Tên sự kiện" maxlength="255" spellcheck="false" autocomplete="off">
                        </el-input>
                    </div>
                </div>
            </div>

            <div class="col-md-24 row-popup">
                <div class="w-50">
                    <div class="form-group">
                        <label for="OrganizationalUnit">Đơn vị tổ chức</label>
                        <el-input type="text" class="form-control field-text" name="EventName" id="EventName"
                            placeholder="Tên sự kiện" maxlength="255" spellcheck="false" autocomplete="off">
                        </el-input>
                    </div>
                </div>
                <div class="w-50 participant">
                    <div class="form-group">
                        <label for="TargetCustomer">Đối tượng tham dự</label>
                        <el-input type="text" class="form-control field-text" name="EventName" id="EventName"
                            placeholder="Tên sự kiện" maxlength="255" spellcheck="false" autocomplete="off">
                        </el-input>
                    </div>
                </div>
            </div>

            <!-- <el-upload class="upload-demo" action="#" :multiple="true" :on-success="handleSuccess" :on-error="handleError"
                :before-upload="beforeUpload" :headers="{ 'Authorization': token }">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                    <img :src="file.url" alt="">
                </div>
            </el-upload> -->

            <div class="col-md-24 row-popup">
                <div class="" style="width: calc(100% - 115px); float: left; padding-right: 15px;">
                    <div class="form-group">
                        <label for="Summary">Tóm tắt <span class="red-required"></span></label>
                        <el-input class="form-control field-text" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"
                            placeholder="Tóm tắt" v-model="textSummary">
                        </el-input>
                    </div>
                </div>
                <div class="col-avatar" style="width: 115px; float: left;">
                    <div class="form-group">
                        <label for="Avatar">Ảnh đại diện <span class="red-required"></span></label>
                        <div class="input-file-wap">
                            <input type="file" accept=".png,.jpg,.jpeg" class="form-control custom-file-input file-img"
                                name="Avatar" id="Avatar">
                            <label for="Avatar" class="form-control fileName-lable"></label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-24">
                <div class="form-group d-block">
                    <label for="aiMarketingCode">Mã aiMarketing</label>
                    <div class="btn-help-field" :class="{ showhelp: showHelp }" @click="showHelp = !showHelp" title="Hướng dẫn sử dụng" name="LinkEvent">
                        <div class="help-use-dialog-content" style="left: -20px;">
                            <div class="help-content">
                                <span class="text-desciption">
                                    Cấu trúc như sau: <br>
                                    <span style="color: #155892; font-size: 12px">
                                        &lt;script render-for="133b6d18-35ea-43c3-a4c7-9ffb776a631f"&gt; <br>
                                        globalThis.lzfr.renderExternalForm({ formId: "133b6d18-35ea-43c3-a4c7-9ffb776a631f",
                                        tenantId: "56c33c47-78ec-4b3a-92ba-9fdb7830a6d4", domainUnomi:
                                        "https://ladizone.com" });<br>
                                        &lt;/script&gt;
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <el-input class="form-control field-text" name="aiMarketingCode" id="aiMarketingCode" type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4 }" placeholder="Mã aiMarketing" v-model="textAimarketing">
                    </el-input>
                </div>
            </div>

            <div class="col-md-24">
                <div class="form-group d-block">
                    <label for="VideoLink">Link Video</label>
                    <div class="btn-help-field" title="Hướng dẫn sử dụng" name="LinkEvent">
                        <div class="help-use-dialog-content" style="left: -20px;">
                            <div class="help-content">
                                <span class="text-desciption">
                                    Ví dụ: <br>
                                    <span style="color: #155892; font-size: 12px">- Youtube:
                                        https://www.youtube.com/embed/98c2o9vxxCk</span> <br>
                                    <span style="color: #155892; font-size: 12px">- Vimeo:
                                        https://player.vimeo.com/video/494031485</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <el-input class="form-control field-text" name="VideoLink" id="VideoLink" type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4 }" placeholder="Link Video" v-model="textAimarketing">
                    </el-input>

                </div>
            </div>

            <div class="col-md-24">
                <div class="form-group">
                    <label for="FanpageLink">Link Fanpage Event</label>
                    <el-input class="form-control field-text" name="FanpageLink" id="FanpageLink" type="textarea"
                        :autosize="{ minRows: 2, maxRows: 10 }" placeholder="Link Fanpage Event" v-model="textAimarketing">
                    </el-input>

                </div>
            </div>

            <div class="col-md-24">
                <div class="form-group">
                    <label for="FanpageLink">Link Group Zalo</label>
                    <el-input class="form-control field-text" name="FanpageLink" id="FanpageLink" type="textarea"
                        :autosize="{ minRows: 2, maxRows: 10 }" placeholder="Link Group Zalo" v-model="textAimarketing">
                    </el-input>

                </div>
            </div>

            <div class="col-md-24">
                <div class="form-group">
                    <label for="FanpageLink">Link tải tài liệu</label>
                    <el-input class="form-control field-text" name="FanpageLink" id="FanpageLink" type="textarea"
                        :autosize="{ minRows: 2, maxRows: 10 }" placeholder="Link tải tài liệu" v-model="textAimarketing">
                    </el-input>

                </div>
            </div>

            <div class="col-md-24">
                <div class="">
                    <label for="Speaker">Diễn giả</label>
                    <div class="btn-help-field" title="Hướng dẫn sử dụng" name="LinkEvent">
                        <div class="help-use-dialog-content" style="left: -20px;">
                            <div class="help-content">
                                <span class="text-desciption">
                                    Nếu không nhập Chức vụ/Mô tả thì sẽ lấy Chức vụ/Mô tả từ thông tin của diễn giả
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="Speaker" class="jsgrid" style="position: relative; height: auto; width: 100%;">
                        <el-table :data="tableData" style="width: 100%" height="200" border>
                            <div class="text-empty" slot="empty" v-if="tableData.length == '0'">
                                Nhấn dấu '+' để thêm
                            </div>
                            <el-table-column prop="speaker" label="Diễn giả" width="242">
                                <el-select v-model="value" placeholder="Chọn diễn giả">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-table-column>

                            <el-table-column prop="position" label="Chức vụ" width="242">
                                <el-input class="form-control field-text" name="Position" id="Position"
                                    :autosize="{ minRows: 2, maxRows: 10 }" v-model="textAimarketing">
                                </el-input>
                            </el-table-column>

                            <el-table-column prop="description" label="Mô tả" width="390">
                                <el-input class="form-control field-text" name="Description" id="Description"
                                    :autosize="{ minRows: 2, maxRows: 10 }" v-model="textAimarketing">
                                </el-input>
                            </el-table-column>

                            <el-table-column prop="description">
                                <template slot="header">
                                    <el-button icon="el-icon-plus" size="small" style="text-align: center;"
                                        @click="handleAddSpeaker()">
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>

            <div class="col-md-24 mt-15">
                <div class="">
                    <label for="Content">Nội dung hữu ích</label>
                    <div id="Content" class="jsgrid" style="position: relative; height: auto; width: 100%;">
                        <el-table :data="content" style="width: 100%" height="200" border>
                            <div class="text-empty" slot="empty" v-if="content.length == '0'">
                                Nhấn dấu '+' để thêm
                            </div>

                            <el-table-column prop="position" label="Tiêu đề" width="295">
                                <el-input class="form-control field-text" name="Title" id="Title"
                                    :autosize="{ minRows: 2, maxRows: 10 }" v-model="textAimarketing">
                                </el-input>
                            </el-table-column>

                            <el-table-column prop="description" label="Nội dung" width="580">
                                <el-input class="form-control field-text" name="Content" id="Content"
                                    :autosize="{ minRows: 2, maxRows: 10 }" v-model="textAimarketing">
                                </el-input>
                            </el-table-column>

                            <el-table-column prop="description">
                                <template slot="header">
                                    <el-button icon="el-icon-plus" size="small" style="text-align: center;"
                                        @click="handleContent()">
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>

            <div class="col-md-24 mt-15">
                <div class="">
                    <label for="Schedule">Lịch trình</label>
                    <div id="Schedule" class="jsgrid" style="position: relative; height: auto; width: 100%;">
                        <el-table :data="schedule" style="width: 100%" height="200" border>
                            <div class="text-empty" slot="empty" v-if="schedule.length == '0'">
                                Nhấn dấu '+' để thêm
                            </div>

                            <el-table-column prop="position" label="Tiêu đề" width="295">
                                <el-input class="form-control field-text" name="Title" id="Title"
                                    :autosize="{ minRows: 2, maxRows: 10 }" v-model="textAimarketing">
                                </el-input>
                            </el-table-column>

                            <el-table-column prop="description" label="Nội dung" width="580">
                                <el-input class="form-control field-text" name="Content" id="Content"
                                    :autosize="{ minRows: 2, maxRows: 10 }" v-model="textAimarketing">
                                </el-input>
                            </el-table-column>

                            <el-table-column prop="description">
                                <template slot="header">
                                    <el-button icon="el-icon-plus" size="small" style="text-align: center;"
                                        @click="handleSchedule()">
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>

            <div class="col-md-24 mt-15">
                <div class="">
                    <div id="anotherContent" class="jsgrid" style="position: relative; height: auto; width: 100%;">
                        <div class="option-panel">
                            <div class="option-panel-title">Cài đặt khác</div>
                            <div class="option-panel-content">
                                <div class="col-md-8 cls-option">
                                    <label class="custom-checkbox">
                                        <el-checkbox v-model="hideBanner">Ẩn banner</el-checkbox>
                                    </label>
                                </div>
                                <div class="col-md-8 cls-option">
                                    <label class="custom-checkbox">
                                        <el-checkbox v-model="hideContent">Ẩn nội dung</el-checkbox>
                                    </label>
                                </div>
                                <div class="col-md-8 cls-option">
                                    <label class="custom-checkbox">
                                        <el-checkbox v-model="hideSchedule">Ẩn lịch trình</el-checkbox>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <span slot="footer" class="dialog-footer mt-20">
                <div class="task-bar-left pt-20">
                    <div class="cbo-Inactive">
                        <label class="custom-checkbox">
                            <el-checkbox v-model="activeEvent">Kích hoạt</el-checkbox>
                        </label>
                    </div>
                </div>
                <div class="task-bar-right pt-20">
                    <el-button>Cancel</el-button>
                    <el-button type="primary" @click="handleConfirm()">Confirm</el-button>
                </div>
            </span>
        </div>
    </base-popup>
</template>

<script>
import '../../assets/style/index.css'

import { mapState, mapActions } from 'vuex';
import BasePopup from './BasePopup.vue';

export default {
    data() {
        return {
            selectedLabel: [],
            topics: [],
            value1: '',
            showHelp: false,

            event: [
                {
                    name: ''
                }
            ],

            tableData: [
            ],

            content: [],

            schedule: [],

            checkboxContent: [
                {}
            ],

            hideBanner: '',

            hideContent: '',

            hideSchedule: '',

            activeEvent: '',

            options: [{
                value: 'Option1',
                label: 'Option1'
            }, {
                value: 'Option2',
                label: 'Option2'
            }, {
                value: 'Option3',
                label: 'Option3'
            }, {
                value: 'Option4',
                label: 'Option4'
            }, {
                value: 'Option5',
                label: 'Option5'
            }],
            value: ''


        }
    },

    components: {
        BasePopup,
    },

    computed: {
        ...mapState({
            dialogVisible: state => state.dialogVisible
        })
    },

    methods: {
        ...mapActions(['hideDialog']),

        ...mapActions({
            apiInsertEvent: 'apiInsertEvent',
        }),

        async insertEvent() {
            await this.apiInsertEvent().then(res => {
            }).catch(err => {
                console.log(err);
            })
        },

        handleClose() {
            this.$confirm('Are you sure to close this dialog?')
                .then(_ => {
                    this.hideDialog()
                })
                .catch(_ => { });
        },

        handleConfirm() {
            console.log('confirm');
            this.insertEvent();

        },

        handleAddSpeaker() {
            console.log('add speaker');
            this.tableData.push("Table Row");
        },

        handleContent() {
            console.log('add content');
            this.content.push("Table Row");
        },

        handleSchedule() {
            console.log('add schedule');
            this.schedule.push("Table Row");
        },

    },

    mounted() {
        console.log('dialogVisible', this.dialogVisible);
    },

}
</script>

<style scoped>
.frm-content>div {
    padding-left: unset;
}

.no-padding {
    padding: 0 !important;
}

.form-group {
    margin-bottom: 15px;
    display: grid;
}

.frm-detail label {
    font-family: Roboto;
    font-weight: normal;
    font-size: 15px;
    cursor: pointer;
}

label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}

.btn-help-field {
    display: inline-block;
    width: 24px;
    height: 15px;
    cursor: pointer;
    background: url(../../static/images/login/info.png) center no-repeat;
    margin-bottom: -2px;
    position: relative;
}

.help-use-dialog-content {
    z-index: 100;
    width: 700px;
    position: absolute;
    background: #fff;
    padding: 5px;
    box-shadow: 0 0 10px 0px #949494;
    border-radius: 5px;
    top: 24px;
    left: -20px;
    display: none;
    user-select: none;
    cursor: default;
}

.help-use-dialog-content .help-content {
    font-size: 14px;
    text-align: justify;
    color: #000;
    white-space: normal;
}

.btn-help-field.showhelp .help-use-dialog-content{
    display: block;
}

.form-control {
    display: block;
    width: 100%;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}

.row-popup {
    display: flex;
    justify-content: space-between;
}

.no-padding-left {
    padding-left: 0;
}

.address-type {
    width: 48.5%;
}

.w-220 {
    width: 220px;
}

.w-50 {
    width: 50%;

}

.w-50.participant {
    padding-left: 25px;
}

.text-empty {
    color: black;
}

.option-panel {
    width: 100%;
    display: inline-block;
    border: 1px solid #e9e9e9;
    margin-bottom: 15px;
}

.option-panel-title {
    font-size: 15px;
    font-weight: normal;
    font-family: RobotoMedium;
    border-bottom: 1px solid #e9e9e9;
    padding: 7px 15px;
    background: #f9f9f9;
}

.option-panel-content {
    width: 100%;
    padding: 8px 0;
    display: flex;
}

.frm-detail label {
    font-family: Roboto;
    font-weight: normal;
    font-size: 15px;
    cursor: pointer;
}

.pogup-frm-detail .task-bar .task-bar-left {
    float: left;
    padding: 15px;
}

.pogup-frm-detail .task-bar .task-bar-left .cbo-Inactive {
    white-space: nowrap;
    height: 34px;
    user-select: none;
}

.pogup-frm-detail .task-bar-wap {
    float: right;
    padding: 15px;
}

::v-deep#Speaker .el-table .cell {
    text-align: center;
}

::v-deep.el-table .el-table__body-wrapper {
    overflow-x: hidden !important;
}

.col-md-24{
    float: unset;
}

.dialog-footer{
    display: flex;
    justify-content: space-between;
}

.dialog-footer::before{
    content: '';
    width: 989px;
    height: 1px;
    background: #ccc;
    position: absolute;
    left: 0;
    right: 0;
}

@media (min-width: 980px) {
    .no-padding-right {
        padding-right: 0 !important;
    }

}
</style>