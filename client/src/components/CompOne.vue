<template>
    <div>
        <h2>Component</h2>
        <p>This is thie inside of the component</p>
        <Teleport to="body">
            <div id="redDiv">Hello! CompOne</div>
        </Teleport>
    </div>
</template>

<style scoped>
  #redDiv {
    background-color: lightcoral;
    margin: 10px;
    padding: 10px;
    display: inline-block;
  }
</style>  