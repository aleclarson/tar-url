const semver = require('semver')
const quest = require('quest')
const rurl = require('registry-auth-token/registry-url')
const rat = require('registry-auth-token')

async function tarUrl(name, range = '*') {
  let url = rurl() + name
  let auth = rat()
  let pack = await quest.json(url, {
    Authorization: `${auth.type} ${auth.token}`
  })
  if (!pack) {
    throw Error('Unknown package: ' + url)
  }
  let versions = Object.keys(pack.versions)
  let version = semver.maxSatisfying(versions, range)
  if (version) return `${url}/-/${name}-${version}.tgz`
  return null
}

module.exports = tarUrl
