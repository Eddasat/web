<template>
  <div>
    <div>列表渲染</div>
    <div>---------------------------------------</div>
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    <div>---------------------------------------</div>
    <ul id="example-2">
      <li v-for="(item, index) in items">
        {{ index }} - {{ item.message }}
      </li>
    </ul>
    <div>---------------------------------------</div>
    <ul id="example-3">
      <li v-for="(value, key) in obj">
        {{ key }} : {{ value }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      obj: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      }
    }
  }
}

</script>
