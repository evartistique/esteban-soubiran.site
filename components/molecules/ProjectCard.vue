<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

defineProps<{ project: ParsedContent }>()
</script>

<template>
  <article class="group relative flex flex-col sm:flex-row gap-4">
    <!-- TODO: Use container to have correct size in hero -->
    <img v-if="project.image" :src="project.image.src" :alt="project.image.alt"
      class="z-10 aspect-video sm:w-60 object-cover object-center rounded-lg">
    <div class="flex flex-col">
      <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div
          class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl duration-200 ease-in">
        </div>
        <NuxtLink :to=project._path>
          <span class="absolute -inset-y-6 -inset-x-4 sm:-inset-x-6 z-20 sm:rounded-2xl"></span>
          <span class="relative z-10">
            {{ project.title }}
          </span>
        </NuxtLink>
      </h2>
      <AtomsAppDate withBorder :datetime="project.datePublished" class="order-first relative mb-3" />
      <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {{ project.description }}
      </p>
      <div aria-hidden="true" class="relative mt-4 inline-flex items-center gap-1 text-sky-500">
        <span class="text-sm font-semibold">Lire plus</span>
        <Icon class="w-4 h-4" name="heroicons:chevron-right-20-solid" />
      </div>
    </div>
  </article>
</template>