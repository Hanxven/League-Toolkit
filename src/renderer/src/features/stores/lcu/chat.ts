import { defineStore } from 'pinia'
import { reactive, shallowReactive, shallowRef } from 'vue'

import { ChatPerson, Conversation } from '@renderer/types/chat'

export interface Conversations {
  championSelect: Conversation | null
  postGame: Conversation | null
}

export interface Participants {
  championSelect: number[] | null
  postGame: number[] | null
}

export const useChatStore = defineStore('chat', () => {
  const conversations = shallowReactive<Conversations>({
    championSelect: null,
    postGame: null
  })

  const participants = reactive<Participants>({
    championSelect: null,
    postGame: null
  })

  const me = shallowRef<ChatPerson | null>(null)

  return {
    conversations,
    participants,
    me
  }
})
