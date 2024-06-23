<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'
import ILOCOS_REGION from '../_data/mountains/1_ilocos_region';
import CAGAYAN_REGION from '../_data/mountains/2_cagayan_region';
import CORDILLERA_REGION from '../_data/mountains/2_cordillera_region';
import CENTRAL_LUZON from '../_data/mountains/3_central_luzon';
import SOUTHERN_TAGALOG from '../_data/mountains/4a_southern_tagalog';
import BICOL_REGION from '../_data/mountains/5_bicol_region';

import List from '../components/List.vue';

const mountains: Ref<string[]> = ref([])

const handleSelect = (e: Event) => {
  const { value = '' } = e.target as HTMLInputElement;
  if (mountains.value.includes(value)) {
    mountains.value = mountains.value.filter(item => item !== value)
  }
  else {
    mountains.value = [...mountains.value, value]
  }
  console.log('Mountain Value 22', mountains.value);
}
const handleGenerate = () => {
  console.log('Mountain Value 33', mountains.value);
}
</script>

<template>
  <main>
    <div class="mt-20">
      <div class="text-4xl text-center">Philippine Mountain Bucket List</div>
      <div class="text-2xl text-center">Please select all the mountains you have conquered.</div>

      <div class="pt-12">
        <div class="w-9/12 mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-4 ">
          <List :handleSelect="handleSelect" title="Ilocos Region" :data="ILOCOS_REGION" />
          <List :handleSelect="handleSelect" title="Cagayan Region" :data="CAGAYAN_REGION" />
          <List :handleSelect="handleSelect" title="Cordillera Region" :data="CORDILLERA_REGION" />
          <List :handleSelect="handleSelect" title="Central Luzon" :data="CENTRAL_LUZON" />
          <List :handleSelect="handleSelect" title="Southern Tagalog 4a" :data="SOUTHERN_TAGALOG" />
          <List :handleSelect="handleSelect" title="Bicol Region" :data="BICOL_REGION" />
        </div>
      </div>
      <div class="my-12 flex flex-row justify-center">
        <button @click="handleGenerate" class="btn btn-primary">Generate</button>
      </div>
    </div>
  </main>
</template>
