<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label>Title</label>
        <input id="title" name="title" type="text" ref="titleInput">
      </div>
      <div class="form-control">
        <label>Description</label>
        <textarea id="description" name="description" rows="4" ref="descInput"></textarea>
      </div>
      <div class="form-control">
        <label>Link</label>
        <input id="link" name="link" type="url" ref="linkInput">
      </div>
      <div class="form-control">
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
  <error-alert v-if="inputIsInValid" title="Invalid Input" @close="comfirmError">
    <template #default>
      <p>At list one input value is invalid.</p>
      <p>Please check all inputs and make sure they are not empty.</p>
    </template>
    <template #actions>
      <base-button @click="comfirmError">Okay</base-button>
    </template>
  </error-alert>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInValid: false
    }
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredurl = this.$refs.linkInput.value;

      if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredurl.trim() === '') {
        this.inputIsInValid = true;
      } else {
        this.addResource(enteredTitle, enteredDescription, enteredurl);
        this.$refs.titleInput.value = '';
        this.$refs.descInput.value = '';
        this.$refs.linkInput.value = '';
      }
    },
    comfirmError() {
      this.inputIsInValid = false;
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>