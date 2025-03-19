// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const roomStore = defineStore('room', {
  state: () => {
    return {
      roomId: ref(''),
    }
  },
  actions: {
    setRoomId(roomId: string) {
      this.roomId = roomId;
    }
  },
  persist: true,}
);