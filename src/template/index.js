/*
 * @Author: Sunny
 * @Date: 2022-12-26 22:49:48
 * @LastEditors: Suuny
 * @LastEditTime: 2022-12-26 23:15:46
 * @Description: 
 * @FilePath: /vscode-render-template/src/template/index.js
 */


const myTemplate = `
    <template>
        <div></div>
    </template>

    <script setup>
        import { onMounted } from 'vue'

        const handleData = () => {
            console.lo('handle data!');
        }

        onMounted (() => {
            handleData();
        }) 
    </script>

    <style scoped>
    </style>
`

module.exports = myTemplate