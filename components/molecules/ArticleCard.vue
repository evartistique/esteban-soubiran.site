<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

const props = defineProps<{ article: ParsedContent }>()
</script>

<template>
  <article class="md:grid md:grid-cols-4 md:items-baseline">
    <div class="md:col-span-3 group relative flex flex-col">
      <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div
          class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl duration-200 ease-in">
        </div>
        <NuxtLink :to=$props.article._path>
          <span class="absolute -inset-y-6 -inset-x-4 sm:-inset-x-6 z-20 sm:rounded-2xl"></span>
          <span class="relative z-10">
            {{ $props.article.title }}
          </span>
        </NuxtLink>
      </h2>
      <AtomsAppDate withBorder :datetime="props.article.datePublished" class="md:hidden order-first relative mb-3" />
      <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {{ $props.article.description }}
      </p>
      <div aria-hidden="true" class="relative mt-4 inline-flex items-center gap-1 text-sky-500 dark:text-sky-400">
        <span class="text-sm font-semibold">Lire plus</span>
        <Icon class="w-4 h-4" name="heroicons:chevron-right-20-solid" />
      </div>
    </div>
    <AtomsAppDate :datetime="props.article.datePublished" class="hidden md:block order-first relative" />
  </article>
</template>