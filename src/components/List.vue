<script setup lang="ts">
type DataProps = {
    name: string
    elevation: number
    difficulty?: number
}
interface Props {
    data: DataProps[],
    title: string
    handleSelect?: any
}
const { data, title, handleSelect } = defineProps<Props>()

console.log('handleSelect', typeof handleSelect)


</script>

<template>
    <div>
        <div class="text-xl">{{ title }}</div>
        <div v-for="item of data">
            <div class="m-2">
                <input @change="handleSelect" :value="item.name" type="checkbox" class="checkbox-success checkbox" />
                <span class="text-base">{{ item.name }} ({{ item.elevation || 0 }}m)</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
