#! /usr/bin/env node
const download = require('download-git-repo')

const {exec} = require('child_process')

const param = process.argv[2] ? process.argv[2] : 'vue'

let project = param === 'vue' ? 'vue-demo' : 'react-demo'

download(`github:fywanning/${project}`,'test',(error) => {
    if(error) throw error
    process.chdir(`./test/${project}`)
    exec('npm install')
    console.log("成功")
})