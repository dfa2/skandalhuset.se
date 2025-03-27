import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const now = new Date()
const year = now.getFullYear()
const versionFile = path.resolve(__dirname, '../.version.json')

let data = { year, release: 0, lastCommitHash: '', commit: 0 }
if (fs.existsSync(versionFile)) {
    data = JSON.parse(fs.readFileSync(versionFile, 'utf-8'))
}

const currentCommitHash = execSync('git rev-parse HEAD').toString().trim()

if (data.year !== year) {
    data.year = year
    data.release = 0
    data.commit = 0
    data.lastCommitHash = ''
}

data.release++

if (data.lastCommitHash !== currentCommitHash) {
    data.commit++
    data.lastCommitHash = currentCommitHash
}

const version = "SKANDALHUSET-WEB."+`${data.year}.${data.release}.${data.commit}`
console.log('Build version:', version)

fs.writeFileSync(versionFile, JSON.stringify(data, null, 2))

const envFile = path.resolve(__dirname, '../.env.build')
fs.writeFileSync(envFile, `NUXT_PUBLIC_BUILD_VERSION=${version}\n`)
