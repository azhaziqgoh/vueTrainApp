<template>
  <div class="Cytoscape">
    <h1>Cytoscape Demo</h1>
    <router-link v-bind:to="'/'">Home</router-link>
    <div id="cy"></div>
  </div>
</template>

<script>
var cytoscape = require('cytoscape')

export default {
  name: 'Cytoscape',
  components: {},
  data: function () {
    return {
      input: '',
      output: '',
      msg: 'vue to cytoscape',
      count: 0
    }
  },
  methods: {
    view_init: function () {
      this.cy = cytoscape(
        {
          container: document.getElementById('cy'),
          boxSelectionEnabled: false,
          autounselectify: true,
          style: cytoscape.stylesheet()
              .selector('node')
              .css({
                'height': 20,
                'width': 20,
                'background-fit': 'cover',
                'border-color': '#000',
                'border-width': 3,
                'border-opacity': 0.5,
                'content': 'data(name)',
                'text-valign': 'center'
              })
              .selector('edge')
              .css({
                'width': 3,
                'target-arrow-shape': 'triangle',
                'line-color': '#ffaaaa',
                'target-arrow-color': '#ffaaaa',
                'curve-style': 'bezier'
              }),
          elements: {
            nodes: [
              { data: { id: 'a', name: 'a' } },
              { data: { id: 'b', name: 'b' } }
            ],
            edges: [
              { data: { source: 'a', target: 'b' } }
            ]
          },
          layout: {
            name: 'grid',
            rows: 1
          }
        }
      )
    }
  },
  mounted: function () {
    this.view_init()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cy {
    width: 100%;
    height: 100%;
    top: 200px;
    left: 0px;
    text-align: left;
    position: absolute;
}
</style>
