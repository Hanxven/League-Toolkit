<template>
  <div class="toolkit-wrapper" ref="el">
    <div class="toolkit-wrapper-inner">
      <NTabs type="line" animated>
        <NTabPane tab="自动化" name="automation">
          <AutoAccept class="tool" />
          <AutoSelect class="tool" />
          <AutoHonor class="tool" />
          <AutoReply class="tool" />
        </NTabPane>
        <NTabPane tab="过程中" name="in-process">
          <ChampionBench class="tool" />
          <InProcess class="tool" />
        </NTabPane>
        <NTabPane tab="房间" name="lobby">
          <LobbyTool class="tool" />
        </NTabPane>
        <NTabPane tab="杂项" name="miscellaneous">
          <AvailabilityCheck class="tool" />
          <SummonerBackground class="tool" />
          <Spectate class="tool" />
          <ChatAvailability class="tool" />
          <FakeRanked class="tool" />
          <GameView class="tool" />
        </NTabPane>
      </NTabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NTabPane, NTabs } from 'naive-ui'
import { ref } from 'vue'

import { useKeepAliveScrollPositionMemo } from '@renderer/compositions/useKeepAliveScrollPositionMemo'

import AutoAccept from './AutoAccept.vue'
import AutoHonor from './AutoHonor.vue'
import AutoReply from './AutoReply.vue'
import AutoSelect from './AutoSelect.vue'
import AvailabilityCheck from './AvailabilityCheck.vue'
import ChampionBench from './ChampionBench.vue'
import ChatAvailability from './ChatAvailability.vue'
import FakeRanked from './FakeRanked.vue'
import GameView from './GameView.vue'
import InProcess from './InProcess.vue'
import LobbyTool from './LobbyTool.vue'
import Spectate from './Spectate.vue'
import SummonerBackground from './SummonerBackground.vue'

// const id = 'view:toolkit'
const el = ref()
useKeepAliveScrollPositionMemo(el)
</script>

<style lang="less" scoped>
.toolkit-wrapper {
  position: relative;
  height: 100%;
  max-width: 100%;
  overflow: auto;
}

.anchor {
  position: absolute;
  right: 8px;
  top: 8px;
}

.toolkit-wrapper-inner {
  padding: 24px;
  margin: 0 auto;
  max-width: 800px;

  :deep(.n-card) {
    background-color: transparent;
  }
}

.tool:not(:last-child) {
  margin-bottom: 8px;
}
</style>
