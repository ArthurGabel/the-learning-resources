<template>
  <base-card>
    <base-button @:click="setSelectedTab('resources-list')" :mode="resourcesListSelect">Stored Resources</base-button>
    <base-button @:click="setSelectedTab('add-resource')" :mode="addResourcesSelect">Add Resource</base-button>
  </base-card>
  <KeepAlive>
    <component :is="selectedTab"></component>
  </KeepAlive>
</template>

<script>
import resourcesList from './ResourcesList.vue'
import addResource from './AddResource.vue'

export default {
  components: {
    resourcesList,
    addResource
  },
  data() {
    return {
      selectedTab: 'resources-list',
      storedResources: [
        {
          id: 'oficial-guide',
          title: 'Oficial Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  },
  computed: {
    resourcesListSelect() {
      return this.selectedTab === 'resources-list' ? null : 'flat';
    },
    addResourcesSelect() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        url: url
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'resources-list'
    },
    deleteResource(id) {
      const index = this.storedResources.findIndex(res => res.id === id);
      this.storedResources.splice(index, 1);
    }
  }
}
</script>