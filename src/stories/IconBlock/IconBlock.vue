<template>
	<div 
		class="material-symbols-outlined w-12 h-12 bg-white rounded-xl border border-slate-300 justify-center items-center gap-2 inline-flex p-2 text-digital-black"
	>{{ icon }}</div>
</template>

<script lang="ts" setup>
defineProps({
	icon: String
})
</script>