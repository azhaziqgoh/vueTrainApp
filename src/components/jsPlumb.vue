<template>
  <div class="jsPlumb">
    <h1>JS Plumb Demo</h1>
    <div id="diagramContainer">
    	<div id="item_left" class="item">
    		<p>Step 1</p>
    	</div>
        <div id="item_right" class="item" style="left:150px;">
        	<p>Step 2</p>
        </div>
    </div>
    <div>
    	<p>This is the simple connection for js Plumb. What we need to do is carve the diagram and do the connection using jsPlumb</p>
    	<p>What to take care? Connection created using js plumb need to be detach from the dom manually when the component is destroy</p>
    	<p>What to take care? For connection for svg, some xrtra configuration needs to be done in order to make it work. No shortcuts <a href="https://blog.jsplumbtoolkit.com/posts/connecting-svg-shapes.html">Connecting SVg with jsPlumb</a></p>
    </div>
    <router-link v-bind:to="'/'">Home</router-link>
  </div>
</template>

<script>
import { jsPlumb } from 'jsplumb'

export default {
  name: 'jsPlumb',
  mounted: function () {
    jsPlumb.ready(function () {
      var common = {
        connector: ['Straight'],
        anchor: ['Left', 'Right'],
        endpoint: 'Dot',
        paintStyle: { stroke: 'gray' },
        endpointStyle: { fill: 'gray' }
      }

      jsPlumb.connect({
        source: 'item_left',
        target: 'item_right'
      }, common)

      jsPlumb.draggable('item_left')
      jsPlumb.draggable('item_right')
    })
  },
  destroyed: function () {
    jsPlumb.detachEveryConnection()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#diagramContainer {
		width:100%; height: 400px;
		border: 1px solid gray;
	}

	.item {
		position: absolute;
		height:80px; width: 80px;
		border: 1px solid blue;
	}
</style>
