<script lang="ts" setup>
const { page } = useContent()

useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: new Date(page.value.datePublished).toISOString(),
      dateModified: new Date(page.value.dateModified).toISOString()
    }
  )
])
</script>

<template>
  <AtomsAppSection>
    <article class="max-w-2xl mx-auto flex flex-col">
      <div class="flex flex-col gap-4" :class="{ 'mb-6': page.image }">
        <h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {{ page.title }}
        </h1>
        <AtomsAppDate with-border :datetime="page.datePublished" class="order-first" />
      </div>
      <img v-if="page.image" :src="page.image.src" :alt="page.image.alt" class="rounded-2xl">
      <div
        class="w-full mx-auto prose max-w-2xl prose-zinc prose-img:rounded-lg
        prose-a:prose-headings:no-underline
        prose-a:transition-all prose-a:ease-in  prose-a:prose-p:font-semibold prose-a:prose-p:decoration-sky-500/30 prose-a:prose-p:text-sky-500  prose-invert hover:prose-a:prose-p:decoration-sky-500 dark:prose-a:prose-p:decoration-sky-400/30 dark:prose-a:prose-p:text-sky-400  dark:prose-invert hover:dark:prose-a:prose-p:decoration-sky-400">
        <slot />
      </div>
    </article>
  </AtomsAppSection>
</template>