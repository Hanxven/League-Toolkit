<template>
  <NModal
    transform-origin="center"
    size="small"
    preset="card"
    @update:show="(val) => emits('update:show', val)"
    :show="show"
    :class="styles['settings-modal']"
  >
    <template #header><span class="card-header-title">设置</span></template>
    <NTabs type="line" animated size="small">
      <NTabPane name="basic" tab="应用"><BasicSettings /></NTabPane>
      <NTabPane name="match-history" tab="战绩"><MatchHistorySettings /></NTabPane>
      <NTabPane name="process" tab="进程"><ProcessSettings /></NTabPane>
      <NTabPane name="debug" tab="调试"><DebugSettings /></NTabPane>
      <NTabPane name="about" tab="关于">
        <div style="display: flex; justify-content: center; vertical-align: bottom; margin: 24px 0">
          <img
            style="border-radius: 50%; height: 108px; width: 108px"
            src="@renderer/assets/temp-logo.png"
            alt="Logo of League Toolkit"
          />
        </div>
        <div class="about-para">
          League Toolkit (Version {{ appState.version }}) 是一个开源的、基于 Electron
          的应用程序，专注于提供一些额外的功能，以辅助英雄联盟的游戏体验。其所有实现都依赖
          <a target="_blank" href="https://riot-api-libraries.readthedocs.io/en/latest/lcu.html"
            >League Client Update (LCU)</a
          >
        </div>
        <div class="about-para" style="font-weight: bold; margin: 12px 0">引用：</div>
        <div class="about-para">
          第三方 LCU HTTP API 文档 (内容已停止更新)：<a
            target="_blank"
            href="https://www.mingweisamuel.com/lcu-schema/tool/#/"
            >Swagger</a
          >.
        </div>
        <div class="about-para">
          第三方静态文件文档：<a
            target="_blank"
            href="https://www.communitydragon.org/documentation/assets"
            >Community Dragon</a
          >.
        </div>
        <div class="about-para">
          第三方调试工具：<a target="_blank" href="https://github.com/PenguLoader/PenguLoader"
            >Pengu Loader</a
          >.
        </div>
        <div class="about-para">
          Github：<a target="_blank" href="https://github.com/Hanxven/League-Toolkit"
            >League Toolkit</a
          >
        </div>
      </NTabPane>
    </NTabs>
  </NModal>
</template>

<script setup lang="ts">
import { NModal, NTabPane, NTabs } from 'naive-ui'
import { useCssModule } from 'vue'

import { useAppState } from '@renderer/features/stores/app'

import BasicSettings from './BasicSettings.vue'
import DebugSettings from './DebugSettings.vue'
import MatchHistorySettings from './MatchHistorySettings.vue'
import ProcessSettings from './ProcessSettings.vue'

defineProps<{
  show: boolean
}>()

const appState = useAppState()

const styles = useCssModule()

// 事件转交
const emits = defineEmits<{
  (e: 'update:show', val: boolean): void
}>()
</script>

<style lang="less" scoped>
.about-para {
  text-indent: 2em;
  font-size: 13px;
}

.card-header-title {
  font-weight: bold;
}
</style>

<style lang="less" module>
.settings-modal {
  width: 90%;
  max-width: 768px;
}
</style>