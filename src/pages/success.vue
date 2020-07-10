<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div class="flex items-center justify-around bg-gray-200">
        <span class="text-4xl font-bold align-middle">Message Submitted</span>
        <div>
          <button
            @click="$router.push({path: '/'})"
            class="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
          >Back</button>
        </div>
      </div>

      <g-image src="../../static/success.svg" alt="Success" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Message Submitted'
  }
}
</script>