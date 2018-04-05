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
  let versions = pack['dist-tags'].filter(semver.valid)
  let version = semver.maxSatisfying(versions, range)
  return `${url}/-/${name}-${version}.tgz`
}

module.exports = tarUrl
