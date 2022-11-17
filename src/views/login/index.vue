<script setup lang='ts'>
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: '',
})

const rules = {
  username: [{ required: true, message: 'Please input your name', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input your password', trigger: 'blur' }],
}

const submitForm = () => {}
</script>

<template>
  <div class="login">
    <div class="login-main">
      <el-form
        ref="ruleFormRef"
        :model="formData"
        :rules="rules"
        label-width="120px"
        status-icon
      >
        <el-form-item label="username" prop="username">
          <el-input v-model="formData.username" />
        </el-form-item>
        <el-form-item label="username" prop="username">
          <el-input v-model="formData.username" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">
            login
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped src="./index.scss">
</style>
