<template>
  <el-dialog :visible.sync="dialogVisible">
    <div class="dialog-content">
    </div>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
            dialogVisible: state => state.dialogVisible
        })
  },
  methods: {
    
  }
};
</script>
