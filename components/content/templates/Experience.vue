<script lang="ts" setup>
useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
]);
</script>

<template>
  <AtomsAppSection>
    <div class="flex flex-col gap-20">
      <OrganismsMainHeader>
        <ContentSlot :use="$slots.default" unwrap="p" />
        <template v-slot:subtitle>
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </template>
      </OrganismsMainHeader>

      <OrganismsExperienceList>
        Mon expérience
      </OrganismsExperienceList>
    </div>
  </AtomsAppSection>
</template>