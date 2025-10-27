<template>
	<div 
		class="material-symbols-outlined w-12 h-12 bg-white rounded-xl border border-slate-300 justify-center items-center gap-2 inline-flex p-2 text-blue"
	>{{ icon }}</div>
</template>

<script lang="ts" setup>

interface Props {
	icon: string
}
defineProps<Props>()
</script>