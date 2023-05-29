<template>
    <el-dialog :visible="dialogVisible" :title="title" :width="width" :fullscreen="fullscreen" :top="top"
        :before-close="handleClose">
        <div class="title" slot="title">
            <div class="frm-header ui-draggable-handle">
                <div class="frm-title"><span class="action-title">THÊM</span> SỰ KIỆN</div>
            </div>
        </div>
        <div class="popup-content">
            <slot />
        </div>
    </el-dialog>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';

export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '50%'
        },
        fullscreen: {
            type: Boolean,
            default: false
        },
        top: {
            type: String,
            default: '15vh'
        },
        // modalAppendToBody: {
        //     type: Boolean,
        //     default: true
        // },
    },

    computed: {
        ...mapState({
            dialogVisible: state => state.dialogVisible
        })
    },

    methods: {
        ...mapActions(['hideDialog']),

        handleClose() {
            this.$confirm('Are you sure to close this dialog?')
                .then(_ => {
                    this.hideDialog()
                })
                .catch(_ => { });
        }
    },

}
</script>

<style>
.page-list-master .el-dialog__header{
    color: #fff;
    background: linear-gradient(to right, #0973b9, #0195f5);
    font-size: 14px;
    line-height: 16px;
    padding: 10px 15px;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 30px;
    position: relative;
}

.page-list-master .el-dialog__close{
    color: #fff;
}

</style>