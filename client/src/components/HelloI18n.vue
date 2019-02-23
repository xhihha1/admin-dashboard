<template>
  <div>
    <p>{{ $t('hello') }}</p>
    {{ $t('message') }}
  </div>
</template>

<script>
export default {
  name: 'HelloI18n'
}
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  },
  "zh-TW": {
    "hello": "Hello i18n in SFC!中文"
  }
}
</i18n>
