<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { useUserStore } from '@/store/modules/user'

const formData = ref({
  username: 'super-admin',
  password: '123456',
})

const ruleFormRef = ref<FormInstance>()
const rules: FormRules = {
  username: [{ required: true, message: 'Please input your name', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input your password', trigger: 'blur' }],
}

const userStore = useUserStore()
const router = useRouter()

/**
 * 登陆
 * @param formEl
 */
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return

  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const flag = await userStore.login(formData.value.username, formData.value.password)
      flag && router.push('/')
    }
  })
}
</script>

<template>
  <div class="login">
    <h3 class="title">
      Welcome to anxiety platform
    </h3>
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
        <el-form-item label="password" prop="password">
          <el-input v-model="formData.password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            login
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped src="./index.scss">
</style>
