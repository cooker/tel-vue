<script setup lang="ts">
import { ref } from 'vue'
import { getRoomId, pushMobile } from './utils/request';
import { roomStore } from './utils/stores';

const mobileNo = ref('')
const {roomId} = roomStore()
if (roomId == '') {
  getRoomId()
}
const qrCodeValue = ref('http://192.168.0.86:8080,')
const qrCodeSize = ref(200)

async function copy() {
  let copyText = await navigator.clipboard.readText();
  mobileNo.value = copyText
}

</script>
<template>
  <UApp>
    <div class="flex flex-col items-center justify-center gap-4 h-screen">
      <UCard>
        <label>
          <span class="inline-flex bg-(--ui-bg) px-1">扫一扫进入房间：{{ roomStore().roomId }}</span>
        </label>
        <vue-qrcode :value="qrCodeValue + roomStore().roomId" :width="qrCodeSize"/>
      </UCard>
      <UInput v-model="mobileNo" placeholder="" maxlength="11" :ui="{ base: 'peer' }">
        <label class="pointer-events-none absolute left-0 -top-2.5 text-(--ui-text-highlighted) text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-(--ui-text-highlighted) peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-(--ui-text-dimmed) peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal">
          <span class="inline-flex bg-(--ui-bg) px-1">请输入手机号</span>
        </label>
      </UInput>

      <div class="flex items-center gap-2">
        <UButton
          label="拨号"
          icon="i-lucide-square-play"
          target="_blank"
          @click="pushMobile(mobileNo)"
        />

        <UButton
          label="一键黏贴"
          color="neutral"
          variant="outline"
          target="_blank"
          @click="copy"
        />
      </div>
    </div>
  </UApp>
</template>
